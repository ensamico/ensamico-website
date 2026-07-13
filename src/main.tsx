import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Lang = "en" | "zh" | "ar" | "tr" | "ru" | "es";
type Direction = "ltr" | "rtl";

type Language = {
  code: Lang;
  label: string;
  short: string;
  path: string;
  htmlLang: string;
  dir: Direction;
};

type ServiceText = { title: string; desc: string; bullets: string[] };
type SourceText = { title: string; desc: string };
type StepText = { title: string; desc: string };
type FAQText = { q: string; a: string };
type TitleParts = { before: string; highlight: string; after: string };

const languages: Language[] = [
  { code: "en", label: "English", short: "EN", path: "/", htmlLang: "en", dir: "ltr" },
  { code: "zh", label: "中文", short: "中", path: "/zh/", htmlLang: "zh-CN", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", path: "/ar/", htmlLang: "ar", dir: "rtl" },
  { code: "tr", label: "Türkçe", short: "TR", path: "/tr/", htmlLang: "tr", dir: "ltr" },
  { code: "ru", label: "Русский", short: "RU", path: "/ru/", htmlLang: "ru", dir: "ltr" },
  { code: "es", label: "Español", short: "ES", path: "/es/", htmlLang: "es", dir: "ltr" },
];

const serviceMeta = [
  { id: "smart-business-solutions", n: "01", icon: "⌁" },
  { id: "technology-digital-solutions", n: "02", icon: "◎" },
  { id: "talent-hr-support", n: "03", icon: "▣" },
  { id: "outsourcing-project-support", n: "04", icon: "↗" },
  { id: "exhibition-networking-support", n: "05", icon: "≡" },
];

const sourceMeta = [
  { id: "supplier-sourcing", letter: "A" },
  { id: "supplier-verification", letter: "B" },
  { id: "quotation-comparison", letter: "C" },
  { id: "factory-visits", letter: "D" },
  { id: "sample-coordination", letter: "E" },
  { id: "exhibition-sourcing-support", letter: "F" },
  { id: "negotiation-communication-support", letter: "G" },
  { id: "china-buying-office", letter: "H" },
];

type ContactKey =
  | "email"
  | "website"
  | "location"
  | "linkedinEnsamico"
  | "instagramEnsamico"
  | "whatsappEnsamico"
  | "wechatEnsamico"
  | "phoneEnsamico"
  | "linkedinSourceChina"
  | "instagramSourceChina"
  | "whatsappSourceChina"
  | "wechatSourceChina"
  | "phoneSourceChina";

type ContactItem = {
  key: ContactKey;
  value: string;
  href?: string;
  wechatId?: string;
  qr?: string;
};

const contacts: ContactItem[] = [
  { key: "email", value: "contact@ensamico.com", href: "mailto:contact@ensamico.com" },
  { key: "website", value: "ensamico.com", href: "https://ensamico.com" },
  { key: "location", value: "Shanghai, CN" },
  { key: "linkedinEnsamico", value: "@ensamico", href: "https://www.linkedin.com/company/ensamico" },
  { key: "instagramEnsamico", value: "@ensamico", href: "https://www.instagram.com/ensamico/" },
  { key: "whatsappEnsamico", value: "+86 177 1755 7151", href: "https://wa.me/8617717557151" },
  { key: "wechatEnsamico", value: "@ensami_co", wechatId: "ensami_co", qr: "/ensamico-wechat-qr.png" },
  { key: "phoneEnsamico", value: "+86 177 1755 7151", href: "tel:+8617717557151" },
  { key: "linkedinSourceChina", value: "@source.china", href: "https://www.linkedin.com/company/source-cn" },
  { key: "instagramSourceChina", value: "@source.china", href: "https://www.instagram.com/source.china/" },
  { key: "whatsappSourceChina", value: "+86 180 1727 0669", href: "https://wa.me/8618017270669" },
  { key: "wechatSourceChina", value: "@source_cn", wechatId: "source_cn", qr: "/source-china-wechat-qr.png" },
  { key: "phoneSourceChina", value: "+86 180 1727 0669", href: "tel:+8618017270669" },
];

const content: Record<Lang, {
  meta: { title: string; description: string; og: string };
  nav: string[];
  langLabel: string;
  cta: { book: string; start: string; explore: string; source: string; exhibition: string; send: string; email: string };
  hero: { eyebrow: string; title: TitleParts; subtitle: string; trust: string[] };
  about: { eyebrow: string; title: string; lead: string; body: string; points: string[] };
  services: { eyebrow: string; title: string; items: ServiceText[] };
  source: { eyebrow: string; title: TitleParts; intro: string; pain: string; items: SourceText[] };
  who: { eyebrow: string; title: string; groups: string[] };
  why: { eyebrow: string; title: string; body: string; reasons: string[] };
  process: { eyebrow: string; title: string; steps: StepText[] };
  banner: { eyebrow: string; title: string; body: string };
  faq: { eyebrow: string; title: string; items: FAQText[] };
  contact: { eyebrow: string; title: string; body: string; labels: Record<ContactKey, string>; form: { name: string; company: string; email: string; messenger: string; topic: string; message: string; options: string[]; note: string }; mail: { subject: string; name: string; company: string; email: string; topic: string; message: string }; wechat: { title: string; id: string; close: string } };
  footer: { desc: string; services: string; source: string; quick: string; copyright: string; tagline: string; privacy: string; insights: string };
}> = {
  en: {
    meta: {
      title: "Ensamico | China Sourcing, Smart Business & Technology Support in Shanghai",
      description: "Ensamico is a Shanghai-based smart solutions company helping global businesses with China sourcing, supplier verification, exhibition support, technology solutions, talent support, and cross-border business coordination.",
      og: "Ensamico helps global businesses work with China through sourcing support, supplier verification, exhibitions, technology, talent, and cross-border business coordination.",
    },
    nav: ["About", "Services", "Source China", "Why Ensamico", "Process", "Contact"],
    langLabel: "Language",
    cta: { book: "Book a Consultation", start: "Start a Conversation", explore: "Explore Services", source: "Need help sourcing from China? Talk to Source China", exhibition: "Prepare for Your Next China Exhibition", send: "Send Message", email: "or email us directly" },
    hero: {
      eyebrow: "Shanghai · Smart Solutions Company",
      title: { before: "Connecting Technology, Talent, ", highlight: "Suppliers", after: " & Global Markets" },
      subtitle: "Ensamico helps international businesses work with China through China sourcing support, supplier verification, technology solutions, talent support, exhibition coordination, and cross-border business development — all from Shanghai.",
      trust: ["Based in Shanghai", "Smart China-side business support", "Technology + talent + supplier network", "English & Chinese communication", "For startups, SMEs, importers & global businesses"],
    },
    about: {
      eyebrow: "About Ensamico",
      title: "Smart China-side support for businesses working across borders",
      lead: "Ensamico helps overseas businesses, SMEs, importers, retailers, e-commerce sellers, and growing companies connect with China more smoothly.",
      body: "From digital solutions and business consulting to supplier coordination, talent support, and exhibition networking, we act as a practical China-side smart solutions partner.",
      points: ["Based in Shanghai", "International business mindset", "Cross-cultural communication", "China market understanding", "Technology, talent & supplier network", "Practical execution support", "Flexible project or ongoing engagement"],
    },
    services: {
      eyebrow: "Core Services",
      title: "Smart solutions across technology, talent, sourcing, and business support",
      items: [
        { title: "Smart Business Solutions", desc: "Practical business support for international companies working with China, entering new markets, building partnerships, or improving cross-border operations.", bullets: ["China market support", "Business research", "Partnership development", "Cross-border coordination", "Local resource connection", "Business follow-up support"] },
        { title: "Technology & Digital Solutions in China", desc: "Website development, custom software coordination, IT consulting, digital process support, and technology solutions for startups, SMEs, and international businesses.", bullets: ["Website & landing pages", "Custom software coordination", "IT consulting", "Digital workflow support", "Tech project management", "Digital business support"] },
        { title: "Talent & HR Support", desc: "Cross-border HR, recruitment coordination, talent support, and team-building assistance for companies expanding internationally.", bullets: ["International recruitment", "Overseas team coordination", "HR consulting", "Multilingual talent communication", "China-side hiring support", "Remote team support"] },
        { title: "Outsourcing & Project Support", desc: "Flexible execution support for companies that need China-side help without building a full local team.", bullets: ["Project coordination", "Vendor communication", "Remote business support", "Admin & operational support", "Follow-up management", "Local coordination in China"] },
        { title: "China Exhibition & Networking Support", desc: "Support for international companies attending exhibitions in China and looking to meet suppliers, distributors, importers, buyers, or strategic partners.", bullets: ["Exhibition preparation", "Meeting coordination", "On-site support in China", "Supplier follow-up", "Lead organization", "Business development support"] },
      ],
    },
    source: {
      eyebrow: "Source China by Ensamico",
      title: { before: "Your China-side sourcing and ", highlight: "supplier support", after: " partner" },
      intro: "Source China helps overseas buyers, importers, retailers, e-commerce sellers, and SMEs source from China with more confidence.",
      pain: "Too many suppliers but not enough trust. Unclear factory vs trading company differences. Communication gaps. Risky payments. Difficult quotation comparisons. No local person to visit factories or follow up after exhibitions.",
      items: [
        { title: "Supplier Sourcing & Shortlisting", desc: "Find suitable Chinese suppliers based on product, industry, quantity, target price, quality needs, and business requirements." },
        { title: "Supplier Verification", desc: "Check whether a supplier is a real manufacturer, trading company, or unreliable contact with basic due diligence." },
        { title: "Quotation Comparison", desc: "Collect and compare quotations across price, MOQ, quality, delivery timeline, and payment terms." },
        { title: "Factory Visit Coordination", desc: "Arrange factory visits, supplier meetings, and on-site communication support in China." },
        { title: "Sample Coordination", desc: "Support sample requests, follow-ups, supplier communication, and sample comparison before bulk orders." },
        { title: "Exhibition Sourcing Support", desc: "Prepare for China trade shows, collect supplier details, organize leads, and follow up after exhibitions." },
        { title: "Negotiation & Communication Support", desc: "Reduce communication gaps between overseas buyers and Chinese suppliers through clear follow-up." },
        { title: "China Buying Office Support", desc: "Monthly or project-based China-side support for supplier communication, quotations, and local coordination." },
      ],
    },
    who: { eyebrow: "Who We Help", title: "Built for global businesses working with China", groups: ["Overseas buyers sourcing from China", "Importers and distributors", "Retailers and e-commerce sellers", "Startups and SMEs", "Companies attending China exhibitions", "International companies entering China", "Businesses needing China-side support", "Companies needing technology, talent, or suppliers", "Brands looking for overseas partners", "Procurement managers seeking supplier support"] },
    why: { eyebrow: "Why Ensamico", title: "Why work with Ensamico?", body: "A single partner across the parts of China that overseas businesses usually need to coordinate separately.", reasons: ["Shanghai-based access to China’s business, supplier, technology, and exhibition ecosystem", "Combines technology, talent, sourcing, and business support", "Source China division provides focused supplier support", "Multilingual and cross-cultural communication", "Practical support without building a local China team", "Flexible project-based or ongoing support", "Suitable for startups, SMEs, importers, retailers, and e-commerce sellers", "Modern, lean, execution-focused approach", "Strong understanding of international clients and China-side communication"] },
    process: { eyebrow: "How We Work", title: "A clear five-step process", steps: [
      { title: "Understand Your Goal", desc: "We learn what you need: technology, sourcing, market entry, talent, exhibitions, supplier coordination, or business development." },
      { title: "Create a Practical Plan", desc: "We define the right approach, timeline, communication flow, and support model." },
      { title: "Connect & Coordinate", desc: "We communicate with suppliers, partners, service providers, candidates, project teams, or exhibition contacts." },
      { title: "Execute & Follow Up", desc: "We support meetings, quotations, samples, digital projects, documentation, supplier follow-up, or post-exhibition communication." },
      { title: "Build Long-Term Support", desc: "For ongoing needs, Ensamico can act as your China-side smart solutions partner." },
    ] },
    banner: { eyebrow: "Featured Service", title: "Planning to attend an exhibition in China?", body: "Ensamico can support international visitors and exhibitors before, during, and after trade shows in China, from supplier shortlisting and meeting coordination to translation, follow-up, and business development." },
    faq: { eyebrow: "FAQ", title: "Common questions about working with Ensamico", items: [
      { q: "What does Ensamico help with?", a: "Ensamico helps global businesses work with China through sourcing support, supplier verification, exhibition support, technology solutions, talent support, and cross-border business coordination." },
      { q: "Can Ensamico help me find suppliers in China?", a: "Yes. Through Source China by Ensamico, we help overseas buyers shortlist suppliers, compare quotations, coordinate samples, arrange factory visits, and manage supplier communication." },
      { q: "Can Ensamico verify Chinese suppliers?", a: "Yes. We support basic supplier verification, background checks, manufacturer versus trading company checks, and communication follow-up before sourcing decisions." },
      { q: "Does Ensamico support trade shows in China?", a: "Yes. We support international visitors and exhibitors before, during, and after China trade shows, including supplier shortlisting, meeting coordination, lead organization, and follow-up." },
      { q: "Where is Ensamico based?", a: "Ensamico is based in Shanghai, China, and supports international businesses working with Chinese suppliers, partners, service providers, and local business networks." },
    ] },
    contact: {
      eyebrow: "Contact", title: "Let's build your China connection", body: "Tell us what you are working on — sourcing, suppliers, technology, market entry, talent, exhibitions, or cross-border business support. Ensamico will help you understand the best next step.",
      labels: { email: "Email", website: "Website", location: "Location", linkedinEnsamico: "LinkedIn | Ensamico", instagramEnsamico: "Instagram | Ensamico", whatsappEnsamico: "WhatsApp | Ensamico", wechatEnsamico: "WeChat | Ensamico", phoneEnsamico: "Phone | Ensamico", linkedinSourceChina: "LinkedIn | Source China", instagramSourceChina: "Instagram | Source China", whatsappSourceChina: "WhatsApp | Source China", wechatSourceChina: "WeChat | Source China", phoneSourceChina: "Phone | Source China" },
      form: { name: "Name", company: "Company", email: "Email", messenger: "WhatsApp / WeChat", topic: "What do you need help with?", message: "Message", options: ["Smart Business Solutions", "Technology & Digital Solutions", "Talent & HR Support", "Outsourcing & Project Support", "Exhibition & Networking Support", "Source China — Sourcing / Suppliers", "Other"], note: "This form submits directly to Ensamico. You can also email us directly if preferred." },
      mail: { subject: "New Ensamico Website Inquiry", name: "Name", company: "Company", email: "Email", topic: "Topic", message: "Message" },
      wechat: { title: "Scan to add us on WeChat", id: "WeChat ID", close: "Close" },
    },
    footer: { desc: "A Shanghai-based smart solutions company connecting global businesses with China through technology, talent, sourcing, and cross-border support.", services: "Services", source: "Source China by Ensamico", quick: "Quick Links", copyright: "© 2026 Ensamico. All rights reserved.", tagline: "Smart solutions for global businesses working with China.", insights: "Insights", privacy: "Privacy & Cookie Policy" },
  },
  zh: {
    meta: { title: "Ensamico | 上海中国采购、智能商务与技术支持", description: "Ensamico 是一家总部位于上海的智能解决方案公司，帮助全球企业进行中国采购、供应商核验、展会支持、技术解决方案、人才支持与跨境商务协调。", og: "Ensamico 帮助全球企业通过采购、供应商核验、展会、技术、人才和跨境商务协调，更顺畅地与中国合作。" },
    nav: ["关于", "服务", "Source China", "为什么选择", "流程", "联系"], langLabel: "语言",
    cta: { book: "预约咨询", start: "开始沟通", explore: "查看服务", source: "需要中国采购支持？联系 Source China", exhibition: "准备下一次中国展会", send: "发送信息", email: "或直接发邮件" },
    hero: { eyebrow: "上海 · 智能解决方案公司", title: { before: "连接技术、人才、", highlight: "供应商", after: "与全球市场" }, subtitle: "Ensamico 总部位于上海，帮助国际企业通过中国采购支持、供应商核验、技术解决方案、人才支持、展会协调和跨境商务拓展，更顺畅地与中国合作。", trust: ["总部位于上海", "中国本地智能商务支持", "技术 + 人才 + 供应商网络", "中英文沟通支持", "适合创业公司、中小企业、进口商与全球企业"] },
    about: { eyebrow: "关于 Ensamico", title: "为跨境企业提供中国侧智能支持", lead: "Ensamico 帮助海外企业、中小企业、进口商、零售商、电商卖家和成长型公司更顺畅地连接中国。", body: "从数字解决方案、商务咨询到供应商协调、人才支持和展会人脉拓展，我们都是务实的中国侧智能解决方案伙伴。", points: ["总部位于上海", "国际商务思维", "跨文化沟通", "理解中国市场", "技术、人才与供应商网络", "务实执行支持", "灵活的项目制或长期合作"] },
    services: { eyebrow: "核心服务", title: "覆盖技术、人才、采购与商务支持的智能解决方案", items: [
      { title: "智能商务解决方案", desc: "为与中国合作、进入新市场、建立合作关系或优化跨境运营的国际公司提供务实商务支持。", bullets: ["中国市场支持", "商业调研", "合作伙伴开发", "跨境协调", "本地资源连接", "商务跟进支持"] },
      { title: "中国技术与数字解决方案", desc: "为创业公司、中小企业和国际企业提供网站开发、定制软件协调、IT 咨询、数字流程和技术项目支持。", bullets: ["网站与落地页开发", "定制软件协调", "IT 咨询", "数字流程支持", "技术项目管理", "数字商务支持"] },
      { title: "人才与 HR 支持", desc: "为国际扩张企业提供跨境 HR、招聘协调、人才沟通和团队搭建协助。", bullets: ["国际招聘支持", "海外团队协调", "HR 咨询", "多语言人才沟通", "中国侧招聘支持", "远程团队支持"] },
      { title: "外包与项目支持", desc: "为需要中国侧支持但暂时不想建立完整本地团队的企业提供灵活执行支持。", bullets: ["项目协调", "供应商沟通", "远程商务支持", "行政与运营支持", "跟进管理", "中国本地协调"] },
      { title: "中国展会与商务人脉支持", desc: "支持参加中国展会并希望对接供应商、经销商、进口商、买家或战略合作伙伴的国际公司。", bullets: ["展前准备", "会议协调", "中国现场支持", "供应商跟进", "线索整理", "商务拓展支持"] },
    ] },
    source: { eyebrow: "Source China by Ensamico", title: { before: "您的中国侧采购与", highlight: "供应商支持", after: "伙伴" }, intro: "Source China 帮助海外买家、进口商、零售商、电商卖家和中小企业更有信心地从中国采购。", pain: "供应商很多但信任不足；工厂与贸易公司难以区分；沟通存在差距；付款决策有风险；报价难比较；展会后缺少本地人员跟进。", items: [
      { title: "供应商开发与筛选", desc: "根据产品、行业、数量、目标价格、质量要求和业务需求寻找合适的中国供应商。" },
      { title: "供应商核验", desc: "帮助判断供应商是真实工厂、贸易公司还是高风险联系人，并进行基础背景核查。" },
      { title: "报价对比", desc: "从不同供应商收集并比较价格、MOQ、质量、交期和付款条款。" },
      { title: "工厂拜访协调", desc: "安排工厂拜访、供应商会议和中国现场沟通支持。" },
      { title: "样品协调", desc: "支持样品申请、跟进、供应商沟通和批量订单前的样品比较。" },
      { title: "展会采购支持", desc: "协助准备中国展会、拜访展商、收集供应商信息、整理线索并在展后跟进。" },
      { title: "谈判与沟通支持", desc: "通过清晰沟通和持续跟进，减少海外买家与中国供应商之间的沟通差距。" },
      { title: "中国采购办公室支持", desc: "为长期采购需求提供月度或项目制中国侧支持，包括供应商沟通、报价管理和本地协调。" },
    ] },
    who: { eyebrow: "服务对象", title: "为与中国合作的全球企业而建", groups: ["从中国采购的海外买家", "进口商和经销商", "零售商和电商卖家", "创业公司和中小企业", "参加中国展会的公司", "进入中国市场的国际公司", "需要中国侧支持的企业", "需要技术、人才或供应商的公司", "寻找海外合作伙伴的品牌", "需要供应商支持的采购经理"] },
    why: { eyebrow: "为什么选择 Ensamico", title: "为什么与 Ensamico 合作？", body: "一个合作伙伴，帮助您协调海外企业在中国通常需要分开处理的多个环节。", reasons: ["总部位于上海，直接连接中国商务、供应商、技术和展会生态", "整合技术、人才、采购和商务支持", "Source China 专注供应商与采购支持", "具备多语言和跨文化沟通能力", "为没有中国本地团队的海外公司提供务实支持", "支持项目制或长期合作", "适合创业公司、中小企业、进口商、零售商和电商卖家", "现代、精简、以执行为导向", "理解国际客户和中国侧沟通方式"] },
    process: { eyebrow: "工作方式", title: "清晰的五步流程", steps: [{ title: "了解您的目标", desc: "我们先了解您需要的是技术支持、采购协助、市场进入、人才、展会、供应商协调还是商务拓展。" }, { title: "制定务实计划", desc: "我们确定合适的方法、时间表、沟通流程和支持模式。" }, { title: "连接与协调", desc: "我们与供应商、合作伙伴、服务商、候选人、项目团队或展会联系人沟通协调。" }, { title: "执行与跟进", desc: "我们支持会议、报价、样品、数字项目、文档、供应商跟进和展后沟通。" }, { title: "建立长期支持", desc: "对于持续需求，Ensamico 可以成为您的中国侧智能解决方案伙伴。" }] },
    banner: { eyebrow: "重点服务", title: "计划参加中国展会？", body: "Ensamico 可以在展前、展中和展后支持国际访客与参展商，从供应商筛选、会议协调到翻译、跟进和商务拓展，让每一次中国展会之行更高效。" },
    faq: { eyebrow: "常见问题", title: "关于与 Ensamico 合作的常见问题", items: [{ q: "Ensamico 可以提供哪些帮助？", a: "Ensamico 帮助全球企业通过采购支持、供应商核验、展会支持、技术解决方案、人才支持和跨境商务协调与中国合作。" }, { q: "Ensamico 可以帮我寻找中国供应商吗？", a: "可以。通过 Source China by Ensamico，我们帮助海外买家筛选供应商、比较报价、协调样品、安排工厂拜访并管理供应商沟通。" }, { q: "Ensamico 可以核验中国供应商吗？", a: "可以。我们支持基础供应商核验、背景检查、工厂与贸易公司区分，以及买家决策前的沟通跟进。" }, { q: "Ensamico 支持中国展会吗？", a: "可以。我们在展前、展中和展后支持国际访客与参展商，包括供应商筛选、会议协调、线索整理和展后跟进。" }, { q: "Ensamico 位于哪里？", a: "Ensamico 总部位于中国上海，支持国际企业与中国供应商、合作伙伴、服务商和本地商务网络合作。" }] },
    contact: { eyebrow: "联系", title: "一起建立您的中国连接", body: "告诉我们您正在推进什么项目：采购、供应商、技术、市场进入、人才、展会或跨境商务支持。Ensamico 将帮助您了解最合适的下一步。", labels: { email: "邮箱", website: "网站", location: "地点", linkedinEnsamico: "LinkedIn | Ensamico", instagramEnsamico: "Instagram | Ensamico", whatsappEnsamico: "WhatsApp | Ensamico", wechatEnsamico: "微信 | Ensamico", phoneEnsamico: "电话 | Ensamico", linkedinSourceChina: "LinkedIn | Source China", instagramSourceChina: "Instagram | Source China", whatsappSourceChina: "WhatsApp | Source China", wechatSourceChina: "微信 | Source China", phoneSourceChina: "电话 | Source China" }, form: { name: "姓名", company: "公司", email: "邮箱", messenger: "WhatsApp / 微信", topic: "您需要哪方面帮助？", message: "留言", options: ["智能商务解决方案", "技术与数字解决方案", "人才与 HR 支持", "外包与项目支持", "展会与人脉支持", "Source China — 采购 / 供应商", "其他"], note: "此表单会直接提交给 Ensamico。如有需要，您也可以直接发送邮件联系我们。" }, mail: { subject: "新的 Ensamico 网站咨询", name: "姓名", company: "公司", email: "邮箱", topic: "主题", message: "留言" }, wechat: { title: "扫码添加我们的微信", id: "微信号", close: "关闭" } },
    footer: { desc: "一家总部位于上海的智能解决方案公司，通过技术、人才、采购和跨境支持连接全球企业与中国。", services: "服务", source: "Source China by Ensamico", quick: "快速链接", copyright: "© 2026 Ensamico. 保留所有权利。", tagline: "为与中国合作的全球企业提供智能解决方案。", insights: "洞察与指南", privacy: "隐私与 Cookie 政策" },
  },
  ar: {
    meta: { title: "Ensamico | التوريد من الصين والدعم التجاري والتقني في شنغهاي", description: "Ensamico شركة حلول ذكية في شنغهاي تساعد الشركات العالمية في التوريد من الصين، التحقق من الموردين، دعم المعارض، التقنية، المواهب، وتنسيق الأعمال عبر الحدود.", og: "Ensamico تساعد الشركات العالمية على العمل مع الصين عبر التوريد، الموردين، المعارض، التقنية، المواهب، والتنسيق التجاري." },
    nav: ["من نحن", "الخدمات", "Source China", "لماذا Ensamico", "العملية", "تواصل"], langLabel: "اللغة",
    cta: { book: "احجز استشارة", start: "ابدأ المحادثة", explore: "استكشف الخدمات", source: "تحتاج مساعدة في التوريد من الصين؟ تحدث إلى Source China", exhibition: "استعد لمعرضك القادم في الصين", send: "إرسال الرسالة", email: "أو راسلنا مباشرة" },
    hero: { eyebrow: "شنغهاي · شركة حلول ذكية", title: { before: "ربط التكنولوجيا والمواهب و", highlight: "الموردين", after: " بالأسواق العالمية" }, subtitle: "تساعد Ensamico الشركات الدولية على العمل مع الصين من خلال دعم التوريد، التحقق من الموردين، الحلول التقنية، دعم المواهب، تنسيق المعارض، وتطوير الأعمال عبر الحدود من شنغهاي.", trust: ["مقرنا في شنغهاي", "دعم تجاري ذكي داخل الصين", "شبكة تقنية + مواهب + موردين", "تواصل بالإنجليزية والصينية", "للشركات الناشئة والصغيرة والمتوسطة والمستوردين"] },
    about: { eyebrow: "حول Ensamico", title: "دعم ذكي من داخل الصين للشركات العاملة عبر الحدود", lead: "تساعد Ensamico الشركات الخارجية والمستوردين وتجار التجزئة وبائعي التجارة الإلكترونية على التواصل مع الصين بسلاسة أكبر.", body: "من الحلول الرقمية والاستشارات إلى تنسيق الموردين ودعم المواهب والمعارض، نعمل كشريك عملي داخل الصين.", points: ["مقر في شنغهاي", "فهم للأعمال الدولية", "تواصل بين الثقافات", "معرفة بالسوق الصينية", "شبكة تقنية ومواهب وموردين", "دعم تنفيذي عملي", "تعاون مرن"] },
    services: { eyebrow: "الخدمات الأساسية", title: "حلول ذكية في التقنية والمواهب والتوريد والدعم التجاري", items: [
      { title: "حلول أعمال ذكية", desc: "دعم عملي للشركات الدولية التي تعمل مع الصين أو تدخل أسواقًا جديدة أو تبني شراكات.", bullets: ["دعم سوق الصين", "أبحاث الأعمال", "تطوير الشراكات", "تنسيق عبر الحدود", "موارد محلية", "متابعة تجارية"] },
      { title: "حلول تقنية ورقمية في الصين", desc: "مواقع ويب، تنسيق برمجيات مخصصة، استشارات تقنية، ودعم عمليات رقمية.", bullets: ["مواقع وصفحات هبوط", "تنسيق برمجيات", "استشارات تقنية", "سير عمل رقمي", "إدارة مشاريع تقنية", "دعم أعمال رقمي"] },
      { title: "دعم المواهب والموارد البشرية", desc: "دعم توظيف ومواهب وفرق للشركات التي تتوسع دوليًا.", bullets: ["توظيف دولي", "تنسيق فرق خارجية", "استشارات HR", "تواصل متعدد اللغات", "توظيف في الصين", "دعم فرق عن بعد"] },
      { title: "دعم التعهيد والمشاريع", desc: "دعم تنفيذ مرن للشركات التي تحتاج مساعدة داخل الصين دون فريق محلي كامل.", bullets: ["تنسيق مشاريع", "تواصل مع الموردين", "دعم عن بعد", "دعم إداري", "متابعة", "تنسيق محلي"] },
      { title: "دعم المعارض وبناء العلاقات في الصين", desc: "دعم الشركات التي تحضر معارض في الصين وتبحث عن موردين أو شركاء.", bullets: ["تحضير المعرض", "تنسيق الاجتماعات", "دعم ميداني", "متابعة الموردين", "تنظيم العملاء المحتملين", "تطوير الأعمال"] },
    ] },
    source: { eyebrow: "Source China by Ensamico", title: { before: "شريكك داخل الصين للتوريد و", highlight: "دعم الموردين", after: "" }, intro: "تساعد Source China المشترين والمستوردين وتجار التجزئة على التوريد من الصين بثقة أكبر.", pain: "عدد كبير من الموردين ولكن الثقة محدودة، صعوبة تمييز المصنع عن شركة التجارة، فجوات تواصل، دفعات محفوفة بالمخاطر، ومتابعة محلية ضعيفة بعد المعارض.", items: [
      { title: "البحث عن الموردين واختيار القائمة المختصرة", desc: "العثور على موردين صينيين مناسبين حسب المنتج والكمية والسعر والجودة." },
      { title: "التحقق من الموردين", desc: "فحص ما إذا كان المورد مصنعًا حقيقيًا أو شركة تجارة أو جهة عالية المخاطر." },
      { title: "مقارنة عروض الأسعار", desc: "مقارنة السعر والحد الأدنى للطلب والجودة ووقت التسليم وشروط الدفع." },
      { title: "تنسيق زيارات المصانع", desc: "ترتيب زيارات المصانع واجتماعات الموردين والدعم الميداني في الصين." },
      { title: "تنسيق العينات", desc: "دعم طلبات العينات والمتابعة ومقارنة العينات قبل الطلبات الكبيرة." },
      { title: "دعم التوريد في المعارض", desc: "التحضير للمعارض وجمع بيانات الموردين وتنظيم العملاء المحتملين والمتابعة." },
      { title: "دعم التفاوض والتواصل", desc: "تقليل فجوات التواصل بين المشترين الخارجيين والموردين الصينيين." },
      { title: "دعم مكتب شراء في الصين", desc: "دعم شهري أو حسب المشروع للتواصل مع الموردين وإدارة العروض والتنسيق المحلي." },
    ] },
    who: { eyebrow: "من نخدم", title: "مصمم للشركات العالمية التي تعمل مع الصين", groups: ["مشترون خارجيون من الصين", "مستوردون وموزعون", "تجار تجزئة وتجارة إلكترونية", "شركات ناشئة وصغيرة", "شركات تحضر معارض الصين", "شركات تدخل السوق الصينية", "شركات تحتاج دعمًا داخل الصين", "شركات تحتاج تقنية أو مواهب أو موردين", "علامات تبحث عن شركاء", "مديرو مشتريات"] },
    why: { eyebrow: "لماذا Ensamico", title: "لماذا تعمل مع Ensamico؟", body: "شريك واحد ينسق الجوانب التي تضطر الشركات الخارجية عادة لإدارتها بشكل منفصل في الصين.", reasons: ["مقر في شنغهاي ووصول مباشر لمنظومة الصين", "يجمع التقنية والمواهب والتوريد والدعم التجاري", "قسم Source China متخصص في الموردين", "تواصل متعدد اللغات والثقافات", "دعم عملي بدون فريق محلي", "دعم مرن حسب المشروع أو مستمر", "مناسب للشركات الصغيرة والمستوردين والتجارة الإلكترونية", "نهج حديث ومركز على التنفيذ", "فهم للعملاء الدوليين والتواصل الصيني"] },
    process: { eyebrow: "طريقة العمل", title: "عملية واضحة من خمس خطوات", steps: [{ title: "فهم هدفك", desc: "نفهم احتياجك في التقنية أو التوريد أو السوق أو المواهب أو المعارض." }, { title: "إنشاء خطة عملية", desc: "نحدد النهج والجدول الزمني وطريقة التواصل." }, { title: "الربط والتنسيق", desc: "نتواصل مع الموردين والشركاء والفرق وجهات المعارض." }, { title: "التنفيذ والمتابعة", desc: "ندعم الاجتماعات والعروض والعينات والمستندات والمتابعة." }, { title: "بناء دعم طويل المدى", desc: "يمكن أن تصبح Ensamico شريكك المستمر داخل الصين." }] },
    banner: { eyebrow: "خدمة مميزة", title: "تخطط لحضور معرض في الصين؟", body: "ندعم الزوار والعارضين قبل وأثناء وبعد المعارض الصينية، من اختيار الموردين وتنسيق الاجتماعات إلى الترجمة والمتابعة وتطوير الأعمال." },
    faq: { eyebrow: "الأسئلة الشائعة", title: "أسئلة شائعة حول العمل مع Ensamico", items: [{ q: "بماذا تساعد Ensamico؟", a: "تساعد الشركات العالمية في التوريد والتحقق من الموردين والمعارض والتقنية والمواهب وتنسيق الأعمال مع الصين." }, { q: "هل تساعدون في العثور على موردين؟", a: "نعم، نساعد في اختيار الموردين ومقارنة العروض وتنسيق العينات وزيارات المصانع." }, { q: "هل يمكنكم التحقق من الموردين؟", a: "نعم، ندعم فحوصات أساسية وخلفية للتمييز بين المصنع وشركة التجارة." }, { q: "هل تدعمون معارض الصين؟", a: "نعم، ندعم التحضير والاجتماعات وتنظيم العملاء المحتملين والمتابعة بعد المعرض." }, { q: "أين تقع Ensamico؟", a: "Ensamico مقرها شنغهاي، الصين، وتدعم الشركات الدولية في العمل مع الصين." }] },
    contact: { eyebrow: "تواصل", title: "لنقم ببناء رابطك مع الصين", body: "أخبرنا بما تعمل عليه: توريد، موردون، تقنية، دخول السوق، مواهب، معارض أو دعم أعمال عبر الحدود.", labels: { email: "البريد الإلكتروني", website: "الموقع", location: "الموقع", linkedinEnsamico: "LinkedIn | Ensamico", instagramEnsamico: "Instagram | Ensamico", whatsappEnsamico: "WhatsApp | Ensamico", wechatEnsamico: "WeChat | Ensamico", phoneEnsamico: "الهاتف | Ensamico", linkedinSourceChina: "LinkedIn | Source China", instagramSourceChina: "Instagram | Source China", whatsappSourceChina: "WhatsApp | Source China", wechatSourceChina: "WeChat | Source China", phoneSourceChina: "الهاتف | Source China" }, form: { name: "الاسم", company: "الشركة", email: "البريد الإلكتروني", messenger: "WhatsApp / WeChat", topic: "ما نوع المساعدة؟", message: "الرسالة", options: ["حلول أعمال ذكية", "حلول تقنية ورقمية", "دعم المواهب والموارد البشرية", "دعم التعهيد والمشاريع", "دعم المعارض والعلاقات", "Source China — توريد / موردون", "أخرى"], note: "يتم إرسال هذا النموذج مباشرة إلى Ensamico. يمكنك أيضًا مراسلتنا عبر البريد الإلكتروني إذا رغبت." }, mail: { subject: "استفسار جديد من موقع Ensamico", name: "الاسم", company: "الشركة", email: "البريد الإلكتروني", topic: "الموضوع", message: "الرسالة" }, wechat: { title: "امسح الرمز لإضافتنا على WeChat", id: "معرّف WeChat", close: "إغلاق" } },
    footer: { desc: "شركة حلول ذكية مقرها شنغهاي تربط الشركات العالمية بالصين عبر التقنية والمواهب والتوريد والدعم عبر الحدود.", services: "الخدمات", source: "Source China by Ensamico", quick: "روابط سريعة", copyright: "© 2026 Ensamico. جميع الحقوق محفوظة.", tagline: "حلول ذكية للشركات العالمية العاملة مع الصين.", insights: "الرؤى والأدلة", privacy: "سياسة الخصوصية وملفات تعريف الارتباط" },
  },
  tr: {
    meta: { title: "Ensamico | Şanghay’da Çin Tedarik, Akıllı İş ve Teknoloji Desteği", description: "Ensamico, Şanghay merkezli bir akıllı çözümler şirketidir; Çin tedariki, tedarikçi doğrulama, fuar desteği, teknoloji, yetenek ve sınır ötesi koordinasyon sağlar.", og: "Ensamico, küresel işletmelerin Çin ile tedarik, tedarikçi doğrulama, fuarlar, teknoloji ve iş koordinasyonu üzerinden çalışmasına yardımcı olur." },
    nav: ["Hakkımızda", "Hizmetler", "Source China", "Neden Ensamico", "Süreç", "İletişim"], langLabel: "Dil",
    cta: { book: "Danışmanlık Al", start: "Görüşmeye Başla", explore: "Hizmetleri İncele", source: "Çin’den tedarik desteği mi gerekiyor? Source China ile konuşun", exhibition: "Bir Sonraki Çin Fuarına Hazırlanın", send: "Mesaj Gönder", email: "veya doğrudan e-posta gönderin" },
    hero: { eyebrow: "Şanghay · Akıllı Çözümler Şirketi", title: { before: "Teknolojiyi, Yeteneği, ", highlight: "Tedarikçileri", after: " ve Küresel Pazarları Birleştiriyoruz" }, subtitle: "Ensamico, uluslararası işletmelerin Çin ile çalışmasına; tedarik, tedarikçi doğrulama, teknoloji çözümleri, yetenek desteği, fuar koordinasyonu ve sınır ötesi iş geliştirme ile yardımcı olur.", trust: ["Şanghay merkezli", "Çin tarafında akıllı iş desteği", "Teknoloji + yetenek + tedarikçi ağı", "İngilizce ve Çince iletişim", "Startuplar, KOBİ’ler ve ithalatçılar için"] },
    about: { eyebrow: "Ensamico Hakkında", title: "Sınır ötesi çalışan işletmeler için Çin tarafında akıllı destek", lead: "Ensamico, yurt dışı işletmelerin, KOBİ’lerin, ithalatçıların, perakendecilerin ve e-ticaret satıcılarının Çin ile daha kolay bağlantı kurmasına yardımcı olur.", body: "Dijital çözümlerden iş danışmanlığına, tedarikçi koordinasyonundan yetenek desteği ve fuar bağlantılarına kadar pratik bir Çin tarafı çözüm ortağı gibi çalışırız.", points: ["Şanghay merkezli", "Uluslararası iş bakış açısı", "Kültürler arası iletişim", "Çin pazarı anlayışı", "Teknoloji, yetenek ve tedarikçi ağı", "Pratik uygulama desteği", "Esnek proje veya sürekli destek"] },
    services: { eyebrow: "Ana Hizmetler", title: "Teknoloji, yetenek, tedarik ve iş desteği için akıllı çözümler", items: [
      { title: "Akıllı İş Çözümleri", desc: "Çin ile çalışan, yeni pazarlara giren veya ortaklıklar kuran şirketler için pratik iş desteği.", bullets: ["Çin pazar desteği", "İş araştırması", "Ortaklık geliştirme", "Sınır ötesi koordinasyon", "Yerel kaynak bağlantısı", "İş takip desteği"] },
      { title: "Çin’de Teknoloji ve Dijital Çözümler", desc: "Web sitesi, özel yazılım koordinasyonu, IT danışmanlığı ve dijital süreç desteği.", bullets: ["Website ve landing page", "Yazılım koordinasyonu", "IT danışmanlığı", "Dijital iş akışı", "Tech proje yönetimi", "Dijital iş desteği"] },
      { title: "Yetenek ve İK Desteği", desc: "Uluslararası büyüyen şirketler için işe alım, yetenek iletişimi ve ekip kurma desteği.", bullets: ["Uluslararası işe alım", "Yurt dışı ekip koordinasyonu", "İK danışmanlığı", "Çok dilli iletişim", "Çin tarafı işe alım", "Uzaktan ekip desteği"] },
      { title: "Dış Kaynak ve Proje Desteği", desc: "Tam yerel ekip kurmadan Çin tarafında destek isteyen şirketler için esnek uygulama desteği.", bullets: ["Proje koordinasyonu", "Tedarikçi iletişimi", "Uzaktan destek", "Operasyonel destek", "Takip yönetimi", "Yerel koordinasyon"] },
      { title: "Çin Fuar ve Networking Desteği", desc: "Çin fuarlarında tedarikçi, alıcı, distribütör veya stratejik ortak arayan şirketler için destek.", bullets: ["Fuar hazırlığı", "Toplantı koordinasyonu", "Saha desteği", "Tedarikçi takibi", "Lead organizasyonu", "İş geliştirme"] },
    ] },
    source: { eyebrow: "Source China by Ensamico", title: { before: "Çin tarafındaki tedarik ve ", highlight: "tedarikçi destek", after: " ortağınız" }, intro: "Source China, yurt dışı alıcıların ve KOBİ’lerin Çin’den daha güvenle tedarik yapmasına yardımcı olur.", pain: "Çok tedarikçi ama az güven, fabrika ve ticaret şirketi ayrımı belirsiz, iletişim boşlukları, riskli ödemeler ve fuar sonrası yerel takip eksikliği.", items: [
      { title: "Tedarikçi Bulma ve Kısa Liste", desc: "Ürün, sektör, miktar, fiyat ve kalite ihtiyacına göre uygun Çinli tedarikçileri bulma." },
      { title: "Tedarikçi Doğrulama", desc: "Tedarikçinin üretici, ticaret şirketi veya riskli bağlantı olup olmadığını kontrol etme." },
      { title: "Teklif Karşılaştırma", desc: "Fiyat, MOQ, kalite, teslim süresi ve ödeme şartlarını karşılaştırma." },
      { title: "Fabrika Ziyareti Koordinasyonu", desc: "Fabrika ziyaretleri, tedarikçi toplantıları ve saha iletişimi organize etme." },
      { title: "Numune Koordinasyonu", desc: "Numune talepleri, takipler ve toplu sipariş öncesi numune karşılaştırması." },
      { title: "Fuar Tedarik Desteği", desc: "Fuar hazırlığı, katılımcı görüşmeleri, tedarikçi bilgisi ve fuar sonrası takip." },
      { title: "Müzakere ve İletişim Desteği", desc: "Alıcılar ve Çinli tedarikçiler arasındaki iletişim boşluklarını azaltma." },
      { title: "Çin Satın Alma Ofisi Desteği", desc: "Aylık veya proje bazlı tedarikçi iletişimi, teklif yönetimi ve yerel koordinasyon." },
    ] },
    who: { eyebrow: "Kimlere Yardım Ediyoruz", title: "Çin ile çalışan küresel işletmeler için", groups: ["Çin’den tedarik yapan alıcılar", "İthalatçılar ve distribütörler", "Perakendeciler ve e-ticaret satıcıları", "Startuplar ve KOBİ’ler", "Çin fuarlarına katılan şirketler", "Çin pazarına giren şirketler", "Çin tarafı desteğe ihtiyaç duyan işletmeler", "Teknoloji, yetenek veya tedarikçiye ihtiyaç duyan şirketler", "Yurt dışı ortak arayan markalar", "Satın alma yöneticileri"] },
    why: { eyebrow: "Neden Ensamico", title: "Neden Ensamico ile çalışmalısınız?", body: "Yurt dışı işletmelerin Çin’de ayrı ayrı koordine ettiği alanlarda tek bir ortak.", reasons: ["Şanghay’dan Çin ekosistemine erişim", "Teknoloji, yetenek, tedarik ve iş desteği birlikte", "Source China tedarikçi desteğine odaklanır", "Çok dilli ve kültürler arası iletişim", "Yerel Çin ekibi olmadan pratik destek", "Proje bazlı veya sürekli destek", "Startuplar, KOBİ’ler ve ithalatçılar için uygun", "Modern ve uygulama odaklı yaklaşım", "Uluslararası müşteri ve Çin iletişimi anlayışı"] },
    process: { eyebrow: "Nasıl Çalışıyoruz", title: "Net beş adımlı süreç", steps: [{ title: "Hedefinizi Anlarız", desc: "Teknoloji, tedarik, pazara giriş, yetenek, fuar veya iş geliştirme ihtiyacınızı öğreniriz." }, { title: "Pratik Plan Oluştururuz", desc: "Yaklaşımı, takvimi ve iletişim modelini belirleriz." }, { title: "Bağlantı ve Koordinasyon", desc: "Tedarikçiler, ortaklar, ekipler ve fuar bağlantılarıyla iletişim kurarız." }, { title: "Uygulama ve Takip", desc: "Toplantı, teklif, numune, doküman ve tedarikçi takibini destekleriz." }, { title: "Uzun Vadeli Destek", desc: "Sürekli ihtiyaçlarda Ensamico Çin tarafı çözüm ortağınız olabilir." }] },
    banner: { eyebrow: "Öne Çıkan Hizmet", title: "Çin’de bir fuara katılmayı mı planlıyorsunuz?", body: "Fuar öncesi, sırası ve sonrasında tedarikçi seçimi, toplantı koordinasyonu, çeviri, takip ve iş geliştirme desteği sağlarız." },
    faq: { eyebrow: "SSS", title: "Ensamico ile çalışmak hakkında sorular", items: [{ q: "Ensamico neye yardımcı olur?", a: "Tedarik, tedarikçi doğrulama, fuar, teknoloji, yetenek ve sınır ötesi iş koordinasyonunda yardımcı olur." }, { q: "Çin’de tedarikçi bulabilir misiniz?", a: "Evet, Source China ile tedarikçi kısa listesi, teklif karşılaştırması, numune ve fabrika ziyareti desteği sağlarız." }, { q: "Tedarikçi doğrulama yapıyor musunuz?", a: "Evet, temel doğrulama ve üretici/ticaret şirketi ayrımı desteği sağlarız." }, { q: "Çin fuarlarını destekliyor musunuz?", a: "Evet, hazırlık, toplantı koordinasyonu, lead organizasyonu ve fuar sonrası takibi destekleriz." }, { q: "Ensamico nerede?", a: "Ensamico Şanghay, Çin merkezlidir." }] },
    contact: { eyebrow: "İletişim", title: "Çin bağlantınızı birlikte kuralım", body: "Tedarik, teknoloji, pazara giriş, yetenek, fuar veya iş desteği ihtiyacınızı anlatın.", labels: { email: "E-posta", website: "Website", location: "Konum", linkedinEnsamico: "LinkedIn | Ensamico", instagramEnsamico: "Instagram | Ensamico", whatsappEnsamico: "WhatsApp | Ensamico", wechatEnsamico: "WeChat | Ensamico", phoneEnsamico: "Telefon | Ensamico", linkedinSourceChina: "LinkedIn | Source China", instagramSourceChina: "Instagram | Source China", whatsappSourceChina: "WhatsApp | Source China", wechatSourceChina: "WeChat | Source China", phoneSourceChina: "Telefon | Source China" }, form: { name: "İsim", company: "Şirket", email: "E-posta", messenger: "WhatsApp / WeChat", topic: "Hangi konuda yardım lazım?", message: "Mesaj", options: ["Akıllı İş Çözümleri", "Teknoloji ve Dijital Çözümler", "Yetenek ve İK Desteği", "Dış Kaynak ve Proje Desteği", "Fuar ve Networking Desteği", "Source China — Tedarik / Tedarikçiler", "Diğer"], note: "Bu form doğrudan Ensamico’ya gönderilir. İsterseniz bize doğrudan e-posta da gönderebilirsiniz." }, mail: { subject: "Yeni Ensamico Website Talebi", name: "İsim", company: "Şirket", email: "E-posta", topic: "Konu", message: "Mesaj" }, wechat: { title: "WeChat’te eklemek için QR kodu tarayın", id: "WeChat ID", close: "Kapat" } },
    footer: { desc: "Şanghay merkezli, küresel işletmeleri teknoloji, yetenek, tedarik ve sınır ötesi destek ile Çin’e bağlayan akıllı çözümler şirketi.", services: "Hizmetler", source: "Source China by Ensamico", quick: "Hızlı Linkler", copyright: "© 2026 Ensamico. Tüm hakları saklıdır.", tagline: "Çin ile çalışan küresel işletmeler için akıllı çözümler.", insights: "İçgörüler ve Rehberler", privacy: "Gizlilik ve Çerez Politikası" },
  },
  ru: {
    meta: { title: "Ensamico | Китайский сорсинг, бизнес и технологическая поддержка", description: "Ensamico — компания smart solutions в Шанхае, помогающая глобальному бизнесу с сорсингом в Китае, проверкой поставщиков, выставками, технологиями, талантами и координацией.", og: "Ensamico помогает глобальным компаниям работать с Китаем через сорсинг, поставщиков, выставки, технологии и бизнес-координацию." },
    nav: ["О нас", "Услуги", "Source China", "Почему Ensamico", "Процесс", "Контакты"], langLabel: "Язык",
    cta: { book: "Записаться", start: "Начать разговор", explore: "Посмотреть услуги", source: "Нужна помощь с закупками в Китае? Свяжитесь с Source China", exhibition: "Подготовиться к выставке в Китае", send: "Отправить", email: "или напишите напрямую" },
    hero: { eyebrow: "Шанхай · Компания smart solutions", title: { before: "Соединяем технологии, таланты, ", highlight: "поставщиков", after: " и глобальные рынки" }, subtitle: "Ensamico помогает международным компаниям работать с Китаем: сорсинг, проверка поставщиков, технологические решения, поддержка талантов, координация выставок и трансграничное развитие бизнеса из Шанхая.", trust: ["Базируемся в Шанхае", "Smart business support на стороне Китая", "Сеть технологий + талантов + поставщиков", "Коммуникация на английском и китайском", "Для стартапов, МСП, импортёров и глобального бизнеса"] },
    about: { eyebrow: "О Ensamico", title: "Smart support со стороны Китая для трансграничного бизнеса", lead: "Ensamico помогает зарубежным компаниям, МСП, импортёрам, ритейлерам и e-commerce продавцам проще взаимодействовать с Китаем.", body: "Мы поддерживаем digital solutions, бизнес-консалтинг, координацию поставщиков, таланты и выставочный нетворкинг как практичный партнёр в Китае.", points: ["Шанхайская база", "Международное бизнес-мышление", "Межкультурная коммуникация", "Понимание рынка Китая", "Сеть технологий, талантов и поставщиков", "Практическая поддержка", "Гибкий проектный или постоянный формат"] },
    services: { eyebrow: "Основные услуги", title: "Smart solutions в технологиях, талантах, сорсинге и бизнес-поддержке", items: [
      { title: "Smart Business Solutions", desc: "Практическая поддержка для компаний, работающих с Китаем, выходящих на рынки или строящих партнёрства.", bullets: ["Поддержка рынка Китая", "Бизнес-исследования", "Партнёрства", "Координация", "Локальные ресурсы", "Follow-up"] },
      { title: "Технологические и цифровые решения", desc: "Сайты, кастомное ПО, IT-консалтинг, digital workflows и tech project support.", bullets: ["Сайты и лендинги", "ПО-координация", "IT-консалтинг", "Digital workflow", "Tech project management", "Digital support"] },
      { title: "Поддержка талантов и HR", desc: "Международный найм, координация команд, HR-консалтинг и многоязычная коммуникация.", bullets: ["Международный найм", "Координация команд", "HR-консалтинг", "Многоязычная коммуникация", "Найм в Китае", "Remote support"] },
      { title: "Аутсорсинг и проектная поддержка", desc: "Гибкая помощь в Китае без создания полноценной локальной команды.", bullets: ["Координация проектов", "Коммуникация с вендорами", "Удалённая поддержка", "Операционная помощь", "Follow-up", "Локальная координация"] },
      { title: "Поддержка выставок и networking в Китае", desc: "Поддержка компаний, ищущих поставщиков, покупателей, дистрибьюторов или партнёров на выставках.", bullets: ["Подготовка", "Координация встреч", "Поддержка на месте", "Follow-up поставщиков", "Организация лидов", "Business development"] },
    ] },
    source: { eyebrow: "Source China by Ensamico", title: { before: "Ваш партнёр в Китае по сорсингу и ", highlight: "поддержке поставщиков", after: "" }, intro: "Source China помогает зарубежным покупателям и МСП закупать из Китая с большей уверенностью.", pain: "Много поставщиков, но мало доверия; сложно отличить фабрику от trading company; есть коммуникационные разрывы, риски оплаты и слабый follow-up после выставок.", items: [
      { title: "Поиск и шортлист поставщиков", desc: "Поиск подходящих китайских поставщиков по продукту, цене, качеству и бизнес-задаче." },
      { title: "Проверка поставщиков", desc: "Проверка, является ли поставщик производителем, торговой компанией или рискованным контактом." },
      { title: "Сравнение котировок", desc: "Сравнение цены, MOQ, качества, сроков поставки и условий оплаты." },
      { title: "Координация визитов на фабрики", desc: "Организация визитов, встреч с поставщиками и поддержки на месте в Китае." },
      { title: "Координация образцов", desc: "Запросы образцов, follow-up и сравнение образцов перед заказом." },
      { title: "Сорсинг-поддержка на выставках", desc: "Подготовка к выставкам, сбор данных поставщиков, организация лидов и follow-up." },
      { title: "Поддержка переговоров и коммуникации", desc: "Снижение коммуникационных разрывов между покупателями и поставщиками." },
      { title: "Поддержка China Buying Office", desc: "Ежемесячная или проектная поддержка коммуникации, предложений и локальной координации." },
    ] },
    who: { eyebrow: "Кому мы помогаем", title: "Для глобальных компаний, работающих с Китаем", groups: ["Покупатели, закупающие из Китая", "Импортёры и дистрибьюторы", "Ритейлеры и e-commerce", "Стартапы и МСП", "Компании на выставках в Китае", "Компании, входящие в Китай", "Бизнесы, которым нужна поддержка в Китае", "Компании, которым нужны технологии, таланты или поставщики", "Бренды, ищущие партнёров", "Менеджеры по закупкам"] },
    why: { eyebrow: "Почему Ensamico", title: "Почему работать с Ensamico?", body: "Один партнёр для координации задач в Китае, которые зарубежные компании обычно ведут отдельно.", reasons: ["Шанхай и доступ к экосистеме Китая", "Технологии, таланты, сорсинг и бизнес support", "Source China сфокусирован на поставщиках", "Многоязычная и межкультурная коммуникация", "Поддержка без локальной команды", "Проектный или постоянный формат", "Подходит стартапам, МСП и импортёрам", "Современный execution-focused подход", "Понимание международных клиентов и китайской коммуникации"] },
    process: { eyebrow: "Как мы работаем", title: "Понятный процесс из пяти шагов", steps: [{ title: "Понимаем цель", desc: "Определяем вашу потребность: технологии, сорсинг, рынок, таланты, выставки или поставщики." }, { title: "Создаём план", desc: "Определяем подход, сроки и коммуникацию." }, { title: "Связываем и координируем", desc: "Коммуницируем с поставщиками, партнёрами, командами и выставочными контактами." }, { title: "Выполняем и ведём follow-up", desc: "Поддерживаем встречи, предложения, образцы, документы и последующую коммуникацию." }, { title: "Строим долгосрочную поддержку", desc: "Для постоянных задач Ensamico может стать вашим партнёром в Китае." }] },
    banner: { eyebrow: "Ключевая услуга", title: "Планируете выставку в Китае?", body: "Мы поддерживаем посетителей и экспонентов до, во время и после выставок: поставщики, встречи, перевод, follow-up и business development." },
    faq: { eyebrow: "FAQ", title: "Частые вопросы о работе с Ensamico", items: [{ q: "С чем помогает Ensamico?", a: "С сорсингом, проверкой поставщиков, выставками, технологиями, талантами и координацией бизнеса в Китае." }, { q: "Можете найти поставщиков в Китае?", a: "Да, через Source China мы помогаем с шортлистом, предложениями, образцами и фабричными визитами." }, { q: "Проверяете поставщиков?", a: "Да, поддерживаем базовую проверку и различение фабрики и торговой компании." }, { q: "Поддерживаете выставки?", a: "Да, помогаем с подготовкой, встречами, лидами и follow-up." }, { q: "Где находится Ensamico?", a: "Ensamico находится в Шанхае, Китай." }] },
    contact: { eyebrow: "Контакты", title: "Давайте построим вашу связь с Китаем", body: "Расскажите, что вам нужно: сорсинг, поставщики, технологии, рынок, таланты, выставки или трансграничная поддержка.", labels: { email: "Email", website: "Сайт", location: "Локация", linkedinEnsamico: "LinkedIn | Ensamico", instagramEnsamico: "Instagram | Ensamico", whatsappEnsamico: "WhatsApp | Ensamico", wechatEnsamico: "WeChat | Ensamico", phoneEnsamico: "Телефон | Ensamico", linkedinSourceChina: "LinkedIn | Source China", instagramSourceChina: "Instagram | Source China", whatsappSourceChina: "WhatsApp | Source China", wechatSourceChina: "WeChat | Source China", phoneSourceChina: "Телефон | Source China" }, form: { name: "Имя", company: "Компания", email: "Email", messenger: "WhatsApp / WeChat", topic: "С чем вам нужна помощь?", message: "Сообщение", options: ["Smart Business Solutions", "Technology & Digital Solutions", "Talent & HR Support", "Outsourcing & Project Support", "Exhibition & Networking Support", "Source China — Sourcing / Suppliers", "Другое"], note: "Эта форма отправляется напрямую в Ensamico. При желании вы также можете написать нам по email." }, mail: { subject: "Новый запрос с сайта Ensamico", name: "Имя", company: "Компания", email: "Email", topic: "Тема", message: "Сообщение" }, wechat: { title: "Отсканируйте, чтобы добавить нас в WeChat", id: "WeChat ID", close: "Закрыть" } },
    footer: { desc: "Шанхайская компания smart solutions, соединяющая глобальный бизнес с Китаем через технологии, таланты, сорсинг и поддержку.", services: "Услуги", source: "Source China by Ensamico", quick: "Быстрые ссылки", copyright: "© 2026 Ensamico. Все права защищены.", tagline: "Smart solutions для бизнеса, работающего с Китаем.", insights: "Статьи и руководства", privacy: "Политика конфиденциальности и файлов cookie" },
  },
  es: {
    meta: { title: "Ensamico | Sourcing en China, negocios inteligentes y soporte tecnológico", description: "Ensamico es una empresa de soluciones inteligentes en Shanghái que ayuda con sourcing en China, verificación de proveedores, ferias, tecnología, talento y coordinación transfronteriza.", og: "Ensamico ayuda a empresas globales a trabajar con China mediante sourcing, proveedores, ferias, tecnología y coordinación comercial." },
    nav: ["Sobre nosotros", "Servicios", "Source China", "Por qué Ensamico", "Proceso", "Contacto"], langLabel: "Idioma",
    cta: { book: "Reservar consulta", start: "Iniciar conversación", explore: "Explorar servicios", source: "¿Necesita ayuda comprando en China? Hable con Source China", exhibition: "Prepare su próxima feria en China", send: "Enviar mensaje", email: "o escríbanos directamente" },
    hero: { eyebrow: "Shanghái · Empresa de soluciones inteligentes", title: { before: "Conectamos tecnología, talento, ", highlight: "proveedores", after: " y mercados globales" }, subtitle: "Ensamico ayuda a empresas internacionales a trabajar con China mediante sourcing, verificación de proveedores, tecnología, talento, coordinación de ferias y desarrollo comercial transfronterizo desde Shanghái.", trust: ["Con sede en Shanghái", "Soporte empresarial desde China", "Red de tecnología + talento + proveedores", "Comunicación en inglés y chino", "Para startups, pymes, importadores y empresas globales"] },
    about: { eyebrow: "Sobre Ensamico", title: "Soporte inteligente desde China para empresas transfronterizas", lead: "Ensamico ayuda a empresas extranjeras, pymes, importadores, minoristas y vendedores de e-commerce a conectarse con China de forma más fluida.", body: "Desde soluciones digitales y consultoría hasta coordinación de proveedores, talento y networking en ferias, actuamos como socio práctico en China.", points: ["Con sede en Shanghái", "Mentalidad internacional", "Comunicación intercultural", "Conocimiento del mercado chino", "Red de tecnología, talento y proveedores", "Ejecución práctica", "Colaboración flexible"] },
    services: { eyebrow: "Servicios principales", title: "Soluciones inteligentes en tecnología, talento, sourcing y soporte empresarial", items: [
      { title: "Soluciones empresariales inteligentes", desc: "Soporte práctico para empresas que trabajan con China, entran en nuevos mercados o desarrollan alianzas.", bullets: ["Soporte de mercado en China", "Investigación empresarial", "Desarrollo de alianzas", "Coordinación transfronteriza", "Recursos locales", "Seguimiento comercial"] },
      { title: "Soluciones tecnológicas y digitales en China", desc: "Websites, software a medida, consultoría IT, procesos digitales y soporte de proyectos tecnológicos.", bullets: ["Websites y landing pages", "Coordinación de software", "Consultoría IT", "Flujos digitales", "Gestión de tech projects", "Soporte digital"] },
      { title: "Soporte de talento y RR. HH.", desc: "Reclutamiento, talento, HR y coordinación de equipos para empresas que se expanden internacionalmente.", bullets: ["Reclutamiento internacional", "Coordinación de equipos", "Consultoría HR", "Comunicación multilingüe", "Contratación en China", "Soporte remoto"] },
      { title: "Soporte de outsourcing y proyectos", desc: "Soporte flexible para empresas que necesitan ayuda en China sin crear un equipo local completo.", bullets: ["Coordinación de proyectos", "Comunicación con proveedores", "Soporte remoto", "Soporte operativo", "Seguimiento", "Coordinación local"] },
      { title: "Soporte de ferias y networking en China", desc: "Apoyo para empresas que buscan proveedores, compradores, distribuidores o socios en ferias de China.", bullets: ["Preparación de ferias", "Coordinación de reuniones", "Soporte presencial", "Seguimiento de proveedores", "Organización de leads", "Desarrollo comercial"] },
    ] },
    source: { eyebrow: "Source China by Ensamico", title: { before: "Su socio en China para sourcing y ", highlight: "soporte de proveedores", after: "" }, intro: "Source China ayuda a compradores, importadores, minoristas y pymes a comprar desde China con mayor confianza.", pain: "Demasiados proveedores pero poca confianza, diferencias poco claras entre fábrica y trading company, brechas de comunicación, pagos riesgosos y falta de seguimiento local después de ferias.", items: [
      { title: "Búsqueda y preselección de proveedores", desc: "Encontrar proveedores chinos adecuados según producto, cantidad, precio, calidad y necesidades del negocio." },
      { title: "Verificación de proveedores", desc: "Comprobar si el proveedor es fabricante real, trading company o contacto de riesgo." },
      { title: "Comparación de cotizaciones", desc: "Comparar precio, MOQ, calidad, plazo de entrega y condiciones de pago." },
      { title: "Coordinación de visitas a fábricas", desc: "Organizar visitas, reuniones con proveedores y soporte presencial en China." },
      { title: "Coordinación de muestras", desc: "Apoyar muestras, seguimiento y comparación antes de pedidos grandes." },
      { title: "Soporte de sourcing en ferias", desc: "Preparar ferias, recopilar datos de proveedores, organizar leads y hacer seguimiento." },
      { title: "Soporte de negociación y comunicación", desc: "Reducir brechas de comunicación entre compradores extranjeros y proveedores chinos." },
      { title: "Soporte de oficina de compras en China", desc: "Soporte mensual o por proyecto para comunicación, cotizaciones y coordinación local." },
    ] },
    who: { eyebrow: "A quién ayudamos", title: "Para empresas globales que trabajan con China", groups: ["Compradores que compran en China", "Importadores y distribuidores", "Minoristas y e-commerce", "Startups y pymes", "Empresas que asisten a ferias en China", "Empresas que entran en China", "Negocios que necesitan soporte local", "Empresas que necesitan tecnología, talento o proveedores", "Marcas que buscan socios", "Gerentes de compras"] },
    why: { eyebrow: "Por qué Ensamico", title: "¿Por qué trabajar con Ensamico?", body: "Un solo socio para coordinar las partes de China que las empresas extranjeras suelen gestionar por separado.", reasons: ["Base en Shanghái y acceso al ecosistema chino", "Tecnología, talento, sourcing y soporte empresarial juntos", "Source China se enfoca en proveedores", "Comunicación multilingüe e intercultural", "Soporte sin equipo local en China", "Soporte por proyecto o continuo", "Adecuado para startups, pymes e importadores", "Enfoque moderno y orientado a ejecución", "Comprensión de clientes internacionales y comunicación en China"] },
    process: { eyebrow: "Cómo trabajamos", title: "Un proceso claro de cinco pasos", steps: [{ title: "Entendemos su objetivo", desc: "Identificamos si necesita tecnología, sourcing, entrada al mercado, talento, ferias o proveedores." }, { title: "Creamos un plan práctico", desc: "Definimos enfoque, calendario y comunicación." }, { title: "Conectamos y coordinamos", desc: "Hablamos con proveedores, socios, equipos y contactos de ferias." }, { title: "Ejecutamos y damos seguimiento", desc: "Apoyamos reuniones, cotizaciones, muestras, documentos y seguimiento." }, { title: "Construimos soporte a largo plazo", desc: "Para necesidades continuas, Ensamico puede ser su socio en China." }] },
    banner: { eyebrow: "Servicio destacado", title: "¿Planea asistir a una feria en China?", body: "Apoyamos antes, durante y después de ferias en China: proveedores, reuniones, traducción, seguimiento y desarrollo comercial." },
    faq: { eyebrow: "FAQ", title: "Preguntas comunes sobre Ensamico", items: [{ q: "¿Con qué ayuda Ensamico?", a: "Con sourcing, verificación de proveedores, ferias, tecnología, talento y coordinación comercial con China." }, { q: "¿Pueden encontrar proveedores en China?", a: "Sí, a través de Source China apoyamos shortlist, cotizaciones, muestras y visitas a fábricas." }, { q: "¿Verifican proveedores?", a: "Sí, apoyamos verificación básica y diferenciación entre fábrica y trading company." }, { q: "¿Apoyan ferias en China?", a: "Sí, preparación, reuniones, leads y seguimiento post-feria." }, { q: "¿Dónde está Ensamico?", a: "Ensamico tiene sede en Shanghái, China." }] },
    contact: { eyebrow: "Contacto", title: "Construyamos su conexión con China", body: "Cuéntenos si necesita sourcing, proveedores, tecnología, entrada al mercado, talento, ferias o soporte transfronterizo.", labels: { email: "Email", website: "Sitio web", location: "Ubicación", linkedinEnsamico: "LinkedIn | Ensamico", instagramEnsamico: "Instagram | Ensamico", whatsappEnsamico: "WhatsApp | Ensamico", wechatEnsamico: "WeChat | Ensamico", phoneEnsamico: "Teléfono | Ensamico", linkedinSourceChina: "LinkedIn | Source China", instagramSourceChina: "Instagram | Source China", whatsappSourceChina: "WhatsApp | Source China", wechatSourceChina: "WeChat | Source China", phoneSourceChina: "Teléfono | Source China" }, form: { name: "Nombre", company: "Empresa", email: "Email", messenger: "WhatsApp / WeChat", topic: "¿Con qué necesita ayuda?", message: "Mensaje", options: ["Soluciones empresariales inteligentes", "Soluciones tecnológicas y digitales", "Soporte de talento y RR. HH.", "Soporte de outsourcing y proyectos", "Soporte de ferias y networking", "Source China — Sourcing / Proveedores", "Otro"], note: "Este formulario se envía directamente a Ensamico. También puede escribirnos por email si lo prefiere." }, mail: { subject: "Nueva consulta desde el sitio de Ensamico", name: "Nombre", company: "Empresa", email: "Email", topic: "Tema", message: "Mensaje" }, wechat: { title: "Escanee para agregarnos en WeChat", id: "ID de WeChat", close: "Cerrar" } },
    footer: { desc: "Empresa de smart solutions en Shanghái que conecta empresas globales con China mediante tecnología, talento, sourcing y soporte transfronterizo.", services: "Servicios", source: "Source China by Ensamico", quick: "Enlaces rápidos", copyright: "© 2026 Ensamico. Todos los derechos reservados.", tagline: "Soluciones inteligentes para empresas que trabajan con China.", insights: "Ideas y guías", privacy: "Política de privacidad y cookies" },
  },
};
function isLang(value: string | undefined): value is Lang {
  return Boolean(value && languages.some((language) => language.code === value));
}

function getCurrentLanguage(): Lang {
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
  return isLang(firstSegment) ? firstSegment : "en";
}

function getLanguageMeta(code: Lang): Language {
  return languages.find((language) => language.code === code) || languages[0];
}

function setMetaByName(name: string, value: string) {
  document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.setAttribute("content", value);
}

function setMetaByProperty(property: string, value: string) {
  document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)?.setAttribute("content", value);
}

function setCanonical(value: string) {
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", value);
}

function HighlightedTitle({ title }: { title: TitleParts }) {
  return (
    <>
      {title.before}
      <em>{title.highlight}</em>
      {title.after}
    </>
  );
}
function Header({ lang }: { lang: Lang }) {
  const t = content[lang];
  const languageMeta = getLanguageMeta(lang);
  const navHrefs = ["#about", "#services", "#source-china", "#why", "#process", "#contact"];
const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
const languageSwitcherRef = React.useRef<HTMLDetailsElement>(null);
const closeLanguageTimer = React.useRef<number | null>(null);
const openLanguageMenu = () => {
  if (closeLanguageTimer.current) {
    window.clearTimeout(closeLanguageTimer.current);
  }

  setIsLanguageOpen(true);
};

const closeLanguageMenu = () => {
  closeLanguageTimer.current = window.setTimeout(() => {
    setIsLanguageOpen(false);
  }, 180);
};
React.useEffect(() => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      languageSwitcherRef.current &&
      !languageSwitcherRef.current.contains(event.target as Node)
    ) {
      setIsLanguageOpen(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsLanguageOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("touchstart", handleClickOutside);
  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
    document.removeEventListener("keydown", handleEscape);
  };
}, []);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="logo" href="#top" aria-label="Ensamico home">
          <img src="/ensamico-logo.png" alt="Ensamico logo" className="logo-img" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((label, index) => (
            <a key={label} href={navHrefs[index]}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <details
  ref={languageSwitcherRef}
  className="language-switcher"
  open={isLanguageOpen}
  onMouseEnter={openLanguageMenu}
  onMouseLeave={closeLanguageMenu}
>
  <summary
    aria-label={t.langLabel}
    onClick={(event) => {
      event.preventDefault();
      setIsLanguageOpen((open) => !open);
    }}
  >
    🌐 {languageMeta.short}
  </summary>

  <div className="language-menu">
    {languages.map((language) => (
      <a
        key={language.code}
        href={language.path}
        hrefLang={language.htmlLang}
        className={language.code === lang ? "active" : undefined}
        onClick={() => {
  if (closeLanguageTimer.current) {
    window.clearTimeout(closeLanguageTimer.current);
  }

  setIsLanguageOpen(false);
}}
      >
        {language.label}
      </a>
    ))}
  </div>
</details>

          <a className="nav-cta" href="#contact">
            {t.cta.book} <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow"><span /> {t.hero.eyebrow}</p>
        <h1><HighlightedTitle title={t.hero.title} /></h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="button-row">
          <a className="btn primary" href="#contact">{t.cta.start} <span>→</span></a>
          <a className="btn secondary" href="#services">{t.cta.explore}</a>
        </div>
        <ul className="trust-list">
          {t.hero.trust.map((item) => <li key={item}>✓ {item}</li>)}
        </ul>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="about" className="section border-top">
      <div className="container split">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
        </div>
        <div>
          <p className="lead">{t.about.lead}</p>
          <p>{t.about.body}</p>
          <ul className="check-grid">
            {t.about.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="services" className="section alt border-top">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2>{t.services.title}</h2>
        </div>
        <div className="service-grid">
          {t.services.items.map((service, index) => {
            const meta = serviceMeta[index];
            return (
              <article id={meta.id} className="card service-card" key={meta.id}>
                <div className="card-top"><span className="service-icon">{meta.icon}</span><span className="number">{meta.n}</span></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SourceChina({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="source-china" className="section dark-section border-top">
      <div className="container">
        <div className="split source-intro">
          <div>
            <p className="eyebrow light">{t.source.eyebrow}</p>
            <h2><HighlightedTitle title={t.source.title} /></h2>
          </div>
          <div>
            <p>{t.source.intro}</p>
            <p className="small-light">{t.source.pain}</p>
          </div>
        </div>
        <div className="source-grid">
          {t.source.items.map((service, index) => {
            const meta = sourceMeta[index];
            return (
              <article id={meta.id} className="source-card" key={meta.id}>
                <div><span>{meta.letter}</span><h3>{service.title}</h3></div>
                <p>{service.desc}</p>
              </article>
            );
          })}
        </div>
        <a className="btn white" href="#contact">{t.cta.source} <span>→</span></a>
      </div>
    </section>
  );
}

function WhoWeHelp({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section className="section border-top">
      <div className="container">
        <div className="section-intro"><p className="eyebrow">{t.who.eyebrow}</p><h2>{t.who.title}</h2></div>
        <div className="people-grid">
          {t.who.groups.map((group, index) => <div className="person-row" key={group}><span>{String(index + 1).padStart(2, "0")}</span><p>{group}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function WhyEnsamico({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="why" className="section alt border-top">
      <div className="container split">
        <div><p className="eyebrow">{t.why.eyebrow}</p><h2>{t.why.title}</h2><p>{t.why.body}</p></div>
        <div className="reason-grid">
          {t.why.reasons.map((reason, index) => <article className="reason-card" key={reason}><span>{String(index + 1).padStart(2, "0")}</span><p>{reason}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Process({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="process" className="section border-top">
      <div className="container">
        <div className="section-intro"><p className="eyebrow">{t.process.eyebrow}</p><h2>{t.process.title}</h2></div>
        <ol className="process-grid">
          {t.process.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.desc}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

function ExhibitionBanner({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section className="section border-top banner-section">
      <div className="container">
        <div className="banner">
          <div><p className="eyebrow light">{t.banner.eyebrow}</p><h2>{t.banner.title}</h2><p>{t.banner.body}</p></div>
          <a className="btn white" href="#contact">{t.cta.exhibition} <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function FAQ({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <section id="faq" className="section border-top">
      <div className="container">
        <div className="section-intro"><p className="eyebrow">{t.faq.eyebrow}</p><h2>{t.faq.title}</h2></div>
        <div className="faq-grid">
          {t.faq.items.map((item) => <article className="card faq-card" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [wechatModal, setWechatModal] = React.useState<{ label: string; wechatId: string; qr: string } | null>(null);
const turnstileSiteKey = "0x4AAAAAADz7HuLJLJhLZZsp";
  const [formStatus, setFormStatus] = React.useState<
  "idle" | "sending" | "success" | "error"
>("idle");

const formStatusText: Record<
  Lang,
  { sending: string; success: string; error: string }
> = {
  en: {
    sending: "Sending...",
    success: "Thank you. Your message has been sent successfully.",
    error: "Sorry, something went wrong. Please email us directly.",
  },
  zh: {
    sending: "正在发送...",
    success: "谢谢，您的信息已成功发送。",
    error: "抱歉，提交失败。请直接发送邮件联系我们。",
  },
  ar: {
    sending: "جارٍ الإرسال...",
    success: "شكرًا لك. تم إرسال رسالتك بنجاح.",
    error: "عذرًا، حدث خطأ. يرجى مراسلتنا مباشرة عبر البريد الإلكتروني.",
  },
  tr: {
    sending: "Gönderiliyor...",
    success: "Teşekkürler. Mesajınız başarıyla gönderildi.",
    error: "Üzgünüz, bir sorun oluştu. Lütfen doğrudan e-posta gönderin.",
  },
  ru: {
    sending: "Отправка...",
    success: "Спасибо. Ваше сообщение успешно отправлено.",
    error: "Извините, произошла ошибка. Пожалуйста, напишите нам напрямую.",
  },
  es: {
    sending: "Enviando...",
    success: "Gracias. Su mensaje se ha enviado correctamente.",
    error: "Lo sentimos, algo salió mal. Escríbanos directamente por email.",
  },
};
React.useEffect(() => {
  if (document.querySelector("script[data-turnstile-script='true']")) {
    return;
  }

  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
  script.async = true;
  script.defer = true;
  script.setAttribute("data-turnstile-script", "true");

  document.body.appendChild(script);
}, []);
  const openWechatContact = (label: string, wechatId: string, qr: string) => {
    window.location.href = `weixin://dl/chat?username=${wechatId}`;
    setTimeout(() => setWechatModal({ label, wechatId, qr }), 1200);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formElement = event.currentTarget;
  const form = new FormData(formElement);

  const payload = {
  name: String(form.get("name") || ""),
  company: String(form.get("company") || ""),
  email: String(form.get("email") || ""),
  messenger: String(form.get("messenger") || ""),
  topic: String(form.get("topic") || ""),
  message: String(form.get("message") || ""),
  language: lang,
  turnstileToken: String(form.get("cf-turnstile-response") || ""),
};

if (!payload.turnstileToken) {
  setFormStatus("error");
  return;
}

  setFormStatus("sending");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    formElement.reset();
(window as any).turnstile?.reset();
setFormStatus("success");
  } catch (error) {
    console.error(error);
    setFormStatus("error");
  }
};

  return (
    <section id="contact" className="section alt border-top">
      <div className="container split">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <dl className="contact-list">
            {contacts.map((contact) => {
              const label = t.contact.labels[contact.key];
              return (
  <div key={contact.key}>
    <dt>{label}</dt>
    <dd className="contact-value" dir="ltr">
      {contact.wechatId && contact.qr ? (
        <button
          type="button"
          className="contact-link-button"
          onClick={() => openWechatContact(label, contact.wechatId!, contact.qr!)}
        >
          {contact.value}
        </button>
      ) : contact.href ? (
        <a
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
        >
          {contact.value}
        </a>
      ) : (
        contact.value
      )}
    </dd>
  </div>
);
            })}
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>{t.contact.form.name}<input name="name" required /></label>
            <label>{t.contact.form.company}<input name="company" /></label>
            <label>{t.contact.form.email}<input name="email" type="email" required /></label>
            <label>{t.contact.form.messenger}<input name="messenger" /></label>
          </div>
          <label>{t.contact.form.topic}<select name="topic">{t.contact.form.options.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>
  {t.contact.form.message}
  <textarea name="message" rows={5} required></textarea>
</label>
<div className="turnstile-wrap">
  <div
    className="cf-turnstile"
    data-sitekey={turnstileSiteKey}
    data-theme="light"
  ></div>
</div>

          <div className="form-actions">
  <button
    className="btn primary"
    type="submit"
    disabled={formStatus === "sending"}
  >
    {formStatus === "sending" ? formStatusText[lang].sending : t.cta.send}
    <span>→</span>
  </button>

  <a href="mailto:contact@ensamico.com">{t.cta.email}</a>
</div>

{formStatus === "success" && (
  <p className="form-status success">{formStatusText[lang].success}</p>
)}

{formStatus === "error" && (
  <p className="form-status error">{formStatusText[lang].error}</p>
)}
          <p className="form-note">{t.contact.form.note}</p>
        </form>
      </div>

      {wechatModal && <div className="wechat-mask" onClick={() => setWechatModal(null)}><div className="wechat-modal" onClick={(event) => event.stopPropagation()}><img src={wechatModal.qr} alt={`${wechatModal.label} QR code`} /><p className="wechat-title">{t.contact.wechat.title}</p><p className="wechat-id">{t.contact.wechat.id}: <strong>{wechatModal.wechatId}</strong></p><button type="button" className="wechat-close" onClick={() => setWechatModal(null)}>{t.contact.wechat.close}</button></div></div>}
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <footer className="footer border-top">
      <div className="container footer-grid">
        <div><a className="logo" href="#top" aria-label="Ensamico home"><img src="/ensamico-logo.png" alt="Ensamico logo" className="footer-logo-img" /></a><p>{t.footer.desc}</p><small>Shanghai, China · contact@ensamico.com</small></div>
        <div><h4>{t.footer.services}</h4><ul className="footer-links">{t.services.items.map((service, index) => <li key={serviceMeta[index].id}><a href={`#${serviceMeta[index].id}`}>{service.title}</a></li>)}</ul></div>
        <div><h4>{t.footer.source}</h4><ul className="footer-links">{t.source.items.slice(0, 5).map((service, index) => <li key={sourceMeta[index].id}><a href={`#${sourceMeta[index].id}`}>{service.title}</a></li>)}</ul></div>
        <div><h4>{t.footer.quick}</h4><ul className="footer-links"><li><a href="#about">{t.nav[0]}</a></li><li><a href="#why">{t.nav[3]}</a></li><li><a href="#process">{t.nav[4]}</a></li><li><a href="#contact">{t.nav[5]}</a></li><li><a href="/insights/">{t.footer.insights}</a></li><li><a href="/privacy-policy/">{t.footer.privacy}</a></li></ul></div>
      </div>
      <div className="container footer-bottom"><small>{t.footer.copyright}</small><small>{t.footer.tagline}</small></div>
    </footer>
  );
}

function App() {
  const lang = getCurrentLanguage();
  const languageMeta = getLanguageMeta(lang);
  const t = content[lang];

  React.useEffect(() => {
    const canonicalUrl = `https://ensamico.com${languageMeta.path}`;
    document.documentElement.lang = languageMeta.htmlLang;
    document.documentElement.dir = languageMeta.dir;
    document.documentElement.dataset.lang = lang;
    document.title = t.meta.title;
    setMetaByName("description", t.meta.description);
    setMetaByProperty("og:title", t.meta.title);
    setMetaByProperty("og:description", t.meta.og);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("twitter:title", t.meta.title);
    setMetaByProperty("twitter:description", t.meta.og);
    setCanonical(canonicalUrl);
  }, [lang, languageMeta.dir, languageMeta.htmlLang, languageMeta.path, t.meta.description, t.meta.og, t.meta.title]);

  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <SourceChina lang={lang} />
        <WhoWeHelp lang={lang} />
        <WhyEnsamico lang={lang} />
        <Process lang={lang} />
        <ExhibitionBanner lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
