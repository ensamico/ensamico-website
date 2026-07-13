(() => {
  "use strict";

  const getArticleData = () => {
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    const ogTitle = document
      .querySelector('meta[property="og:title"]')
      ?.getAttribute("content")
      ?.trim();
    const description = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content")
      ?.trim();
    const heading = document.querySelector("article h1, main h1, h1")
      ?.textContent
      ?.trim();

    return {
      url: (canonical || `${location.origin}${location.pathname}`).split("#")[0],
      title: ogTitle || heading || document.title,
      description: description || "",
    };
  };

  const addTracking = (originalUrl, source) => {
    try {
      const url = new URL(originalUrl);
      url.searchParams.set("utm_source", source);
      url.searchParams.set("utm_medium", "social");
      url.searchParams.set("utm_campaign", "insights_share");
      return url.toString();
    } catch {
      return originalUrl;
    }
  };

  const openShareWindow = (url) => {
    const popup = window.open(
      url,
      "ensamico-share",
      "width=720,height=620,resizable=yes,scrollbars=yes"
    );

    if (popup) popup.opener = null;
  };

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    textarea.remove();

    if (!copied) throw new Error("Copy command failed");
  };

  const initialise = (container) => {
    const article = getArticleData();
    const title = encodeURIComponent(article.title);

    const platforms = [
      {
        label: "LinkedIn",
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          addTracking(article.url, "linkedin")
        )}`,
      },
      {
        label: "Facebook",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          addTracking(article.url, "facebook")
        )}`,
      },
      {
        label: "X",
        url: `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
          addTracking(article.url, "x")
        )}`,
      },
      {
        label: "WhatsApp",
        url: `https://wa.me/?text=${encodeURIComponent(
          `${article.title}\n${addTracking(article.url, "whatsapp")}`
        )}`,
      },
      {
        label: "Telegram",
        url: `https://t.me/share/url?url=${encodeURIComponent(
          addTracking(article.url, "telegram")
        )}&text=${title}`,
      },
    ];

    const heading = document.createElement("p");
    heading.className = "article-share__heading";
    heading.textContent = "Share this insight";

    const buttons = document.createElement("div");
    buttons.className = "article-share__buttons";

    for (const platform of platforms) {
      const link = document.createElement("a");
      link.className = "article-share__button";
      link.href = platform.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = platform.label;
      link.setAttribute(
        "aria-label",
        `Share “${article.title}” on ${platform.label}`
      );
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openShareWindow(platform.url);
      });
      buttons.appendChild(link);
    }

    const email = document.createElement("a");
    email.className = "article-share__button";
    email.textContent = "Email";
    email.href = `mailto:?subject=${title}&body=${encodeURIComponent(
      `${article.title}\n\n${article.description}\n\n${addTracking(
        article.url,
        "email"
      )}`
    )}`;
    email.setAttribute("aria-label", `Share “${article.title}” by email`);
    buttons.appendChild(email);

    const status = document.createElement("p");
    status.className = "article-share__status";
    status.setAttribute("aria-live", "polite");

    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "article-share__button";
    copy.textContent = "Copy link";
    copy.addEventListener("click", async () => {
      try {
        await copyText(article.url);
        copy.textContent = "Copied";
        status.textContent = "Article link copied.";
        window.setTimeout(() => {
          copy.textContent = "Copy link";
          status.textContent = "";
        }, 2500);
      } catch (error) {
        console.error("Unable to copy article link", error);
        status.textContent = "Unable to copy the link automatically.";
      }
    });
    buttons.appendChild(copy);

    if (typeof navigator.share === "function") {
      const more = document.createElement("button");
      more.type = "button";
      more.className =
        "article-share__button article-share__button--primary";
      more.textContent = "More options";
      more.setAttribute(
        "aria-label",
        `Open more sharing options for “${article.title}”`
      );
      more.addEventListener("click", async () => {
        try {
          await navigator.share({
            title: article.title,
            text: article.description,
            url: addTracking(article.url, "native_share"),
          });
        } catch (error) {
          if (error?.name !== "AbortError") {
            console.error("Native sharing failed", error);
          }
        }
      });
      buttons.appendChild(more);
    }

    container.replaceChildren(heading, buttons, status);
  };

  document.querySelectorAll("[data-article-share]").forEach(initialise);
})();
