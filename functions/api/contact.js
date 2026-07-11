function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function clean(value, maxLength = 2000) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function verifyTurnstile(token, secret, ip) {
  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  return response.json();
}

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json().catch(() => null);

    if (!data) {
      return jsonResponse({ ok: false, message: "Invalid form data." }, 400);
    }

    const name = clean(data.name, 120);
    const company = clean(data.company, 160);
    const email = clean(data.email, 180);
    const messenger = clean(data.messenger, 180);
    const topic = clean(data.topic, 200);
    const message = clean(data.message, 4000);
    const language = clean(data.language, 20);
    const turnstileToken = clean(data.turnstileToken, 2048);

    if (!name || !email || !message) {
      return jsonResponse(
        { ok: false, message: "Name, email, and message are required." },
        400
      );
    }

    if (!turnstileToken) {
      return jsonResponse(
        { ok: false, message: "Security check is required." },
        400
      );
    }

    if (!env.TURNSTILE_SECRET_KEY) {
      return jsonResponse(
        { ok: false, message: "Turnstile is not configured." },
        500
      );
    }

    const visitorIp = request.headers.get("CF-Connecting-IP") || "";

    const turnstileResult = await verifyTurnstile(
      turnstileToken,
      env.TURNSTILE_SECRET_KEY,
      visitorIp
    );

    if (!turnstileResult.success) {
      return jsonResponse(
        { ok: false, message: "Security check failed." },
        403
      );
    }

    if (!env.CLOUDFLARE_ACCOUNT_ID || !env.CLOUDFLARE_EMAIL_API_TOKEN) {
      return jsonResponse(
        { ok: false, message: "Email service is not configured." },
        500
      );
    }

    const toEmail = env.CONTACT_TO_EMAIL || "contact@ensamico.com";
    const fromEmail =
      env.CONTACT_FROM_EMAIL || "website@ensamico.com";

    const subject = `New Ensamico website inquiry: ${
      topic || "General inquiry"
    }`;

    const textBody = `New Ensamico website inquiry

Name: ${name}
Company: ${company || "-"}
Email: ${email}
WhatsApp / WeChat: ${messenger || "-"}
Topic: ${topic || "-"}
Language: ${language || "-"}

Message:
${message || "-"}

---
Sent from ensamico.com`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #172033;">
        <h2>New Ensamico website inquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>WhatsApp / WeChat:</strong> ${escapeHtml(messenger || "-")}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic || "-")}</p>
        <p><strong>Language:</strong> ${escapeHtml(language || "-")}</p>

        <hr style="border:0;border-top:1px solid #dfe6ef;margin:24px 0;" />

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "-").replaceAll("\n", "<br />")}</p>

        <hr style="border:0;border-top:1px solid #dfe6ef;margin:24px 0;" />

        <p style="color:#5d6880;font-size:13px;">Sent from ensamico.com</p>
      </div>
    `;

    const emailResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/email/sending/send`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.CLOUDFLARE_EMAIL_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: toEmail,
          from: fromEmail,
          subject,
          html: htmlBody,
          text: textBody,
        }),
      }
    );

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Cloudflare Email error:", errorText);

      return jsonResponse(
        { ok: false, message: "Email could not be sent." },
        502
      );
    }

    return jsonResponse({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return jsonResponse(
      { ok: false, message: "Something went wrong." },
      500
    );
  }
}