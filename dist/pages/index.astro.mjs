import { c as createComponent, r as renderTemplate, a as renderSlot, b as renderHead, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderScript, u as unescapeHTML, g as renderComponent } from '../chunks/astro/server_CgHHeF85.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Overnight \u2014 AI-Powered Development Workflows",
    description = "Overnight automates your software development with AI agents that plan, code, review, and ship features while you sleep. Book a demo today.",
    ogImage = "/og-image.png"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "SoftwareApplication",\n        "name": "Overnight",\n        "applicationCategory": "DeveloperApplication",\n        "operatingSystem": "Web",\n        "url": "https://overnightai.app",\n        "description": "AI-powered development workflows that plan, code, and ship features automatically.",\n        "offers": [\n          {\n            "@type": "Offer",\n            "name": "Starter",\n            "price": "50",\n            "priceCurrency": "USD",\n            "priceSpecification": {\n              "@type": "UnitPriceSpecification",\n              "price": "50",\n              "priceCurrency": "USD",\n              "unitText": "per seat/month"\n            }\n          }\n        ]\n      }\n    <\/script>', "</head> <body> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.site), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.site), "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/workspaces/seo-website/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="nav-wrapper" data-astro-cid-dmqpwcec> <nav class="container nav-inner" data-astro-cid-dmqpwcec> <a href="/" class="nav-logo" aria-label="Overnight home" data-astro-cid-dmqpwcec> <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-dmqpwcec> <circle cx="14" cy="14" r="13" stroke="url(#logo-gradient)" stroke-width="2" data-astro-cid-dmqpwcec></circle> <path d="M14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22C16.5 22 18.75 20.875 20.25 19.1C18.75 19.7 17.1 20 15.4 19.6C12.1 18.8 9.6 15.9 9.6 12.4C9.6 9.5 11.4 7.1 14 6Z" fill="url(#logo-gradient)" data-astro-cid-dmqpwcec></path> <defs data-astro-cid-dmqpwcec> <linearGradient id="logo-gradient" x1="6" y1="6" x2="22" y2="22" gradientUnits="userSpaceOnUse" data-astro-cid-dmqpwcec> <stop stop-color="#818cf8" data-astro-cid-dmqpwcec></stop> <stop offset="1" stop-color="#c084fc" data-astro-cid-dmqpwcec></stop> </linearGradient> </defs> </svg> <span data-astro-cid-dmqpwcec>Overnight</span> </a> <ul class="nav-links" role="list" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="#features" data-astro-cid-dmqpwcec>Features</a></li> <li data-astro-cid-dmqpwcec><a href="#how-it-works" data-astro-cid-dmqpwcec>How it works</a></li> <li data-astro-cid-dmqpwcec><a href="#pricing" data-astro-cid-dmqpwcec>Pricing</a></li> </ul> <div class="nav-cta" data-astro-cid-dmqpwcec> <a href="#pricing" class="btn-secondary nav-btn-secondary" data-astro-cid-dmqpwcec>View pricing</a> <a href="#book-demo" class="btn-primary nav-btn-primary" data-astro-cid-dmqpwcec>Book a demo</a> </div> <button class="nav-mobile-toggle" aria-label="Toggle menu" aria-expanded="false" id="mobile-toggle" data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec></span> <span data-astro-cid-dmqpwcec></span> <span data-astro-cid-dmqpwcec></span> </button> </nav> <div class="nav-mobile-menu" id="mobile-menu" aria-hidden="true" data-astro-cid-dmqpwcec> <ul role="list" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="#features" data-astro-cid-dmqpwcec>Features</a></li> <li data-astro-cid-dmqpwcec><a href="#how-it-works" data-astro-cid-dmqpwcec>How it works</a></li> <li data-astro-cid-dmqpwcec><a href="#pricing" data-astro-cid-dmqpwcec>Pricing</a></li> </ul> <div class="nav-mobile-cta" data-astro-cid-dmqpwcec> <a href="#book-demo" class="btn-primary" style="width: 100%; justify-content: center;" data-astro-cid-dmqpwcec>Book a demo</a> </div> </div> </header> ${renderScript($$result, "/workspaces/seo-website/src/components/Nav.astro?astro&type=script&index=0&lang.ts")} `;
}, "/workspaces/seo-website/src/components/Nav.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="hero" data-astro-cid-bbe6dxrz> <!-- Background glow blobs --> <div class="hero-bg" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="blob blob-1" data-astro-cid-bbe6dxrz></div> <div class="blob blob-2" data-astro-cid-bbe6dxrz></div> <div class="blob blob-3" data-astro-cid-bbe6dxrz></div> <div class="grid-overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="container hero-content" data-astro-cid-bbe6dxrz> <div class="hero-badge" data-astro-cid-bbe6dxrz> <span class="badge" data-astro-cid-bbe6dxrz> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-bbe6dxrz> <circle cx="6" cy="6" r="4" fill="currentColor" opacity="0.6" data-astro-cid-bbe6dxrz></circle> <circle cx="6" cy="6" r="2" fill="currentColor" data-astro-cid-bbe6dxrz></circle> </svg>
Now available — join the early access
</span> </div> <h1 class="hero-title" data-astro-cid-bbe6dxrz>
Ship features<br data-astro-cid-bbe6dxrz> <span class="gradient-text" data-astro-cid-bbe6dxrz>while you sleep</span> </h1> <p class="hero-subtitle" data-astro-cid-bbe6dxrz>
Overnight is the AI-powered development platform where you describe the feature and agents do the rest — planning, coding, reviewing, and deploying, end-to-end.
</p> <div class="hero-actions" data-astro-cid-bbe6dxrz> <a href="#book-demo" class="btn-primary hero-btn-primary" data-astro-cid-bbe6dxrz>
Book a demo
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-bbe6dxrz> <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path> </svg> </a> <a href="#how-it-works" class="btn-secondary" data-astro-cid-bbe6dxrz>
See how it works
</a> </div> <div class="hero-social-proof" data-astro-cid-bbe6dxrz> <div class="trust-avatars" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="avatar" style="background: linear-gradient(135deg, #6366f1, #8b5cf6)" data-astro-cid-bbe6dxrz>A</div> <div class="avatar" style="background: linear-gradient(135deg, #8b5cf6, #c084fc)" data-astro-cid-bbe6dxrz>B</div> <div class="avatar" style="background: linear-gradient(135deg, #4338ca, #6366f1)" data-astro-cid-bbe6dxrz>C</div> <div class="avatar" style="background: linear-gradient(135deg, #7c3aed, #a855f7)" data-astro-cid-bbe6dxrz>D</div> </div> <p class="trust-text" data-astro-cid-bbe6dxrz><strong data-astro-cid-bbe6dxrz>Join engineering teams</strong> shipping faster with Overnight</p> </div> <!-- Product screenshot placeholder --> <div class="hero-visual" data-astro-cid-bbe6dxrz> <div class="hero-screen-frame" data-astro-cid-bbe6dxrz> <div class="screen-dots" aria-hidden="true" data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz></span><span data-astro-cid-bbe6dxrz></span><span data-astro-cid-bbe6dxrz></span> </div> <div class="screen-placeholder" data-astro-cid-bbe6dxrz> <!-- Product screenshot placeholder --> <div class="placeholder-ui" data-astro-cid-bbe6dxrz> <div class="placeholder-sidebar" data-astro-cid-bbe6dxrz> <div class="sidebar-item active" data-astro-cid-bbe6dxrz> <div class="sidebar-icon" data-astro-cid-bbe6dxrz></div> <div class="sidebar-label" data-astro-cid-bbe6dxrz></div> </div> <div class="sidebar-item" data-astro-cid-bbe6dxrz> <div class="sidebar-icon" data-astro-cid-bbe6dxrz></div> <div class="sidebar-label" data-astro-cid-bbe6dxrz></div> </div> <div class="sidebar-item" data-astro-cid-bbe6dxrz> <div class="sidebar-icon" data-astro-cid-bbe6dxrz></div> <div class="sidebar-label" data-astro-cid-bbe6dxrz></div> </div> <div class="sidebar-item" data-astro-cid-bbe6dxrz> <div class="sidebar-icon" data-astro-cid-bbe6dxrz></div> <div class="sidebar-label" data-astro-cid-bbe6dxrz></div> </div> </div> <div class="placeholder-main" data-astro-cid-bbe6dxrz> <div class="dag-container" data-astro-cid-bbe6dxrz> <div class="dag-node node-orchestrator" data-astro-cid-bbe6dxrz> <div class="node-dot" data-astro-cid-bbe6dxrz></div> <span data-astro-cid-bbe6dxrz>Orchestrator</span> </div> <div class="dag-connector connector-1" data-astro-cid-bbe6dxrz></div> <div class="dag-connector connector-2" data-astro-cid-bbe6dxrz></div> <div class="dag-connector connector-3" data-astro-cid-bbe6dxrz></div> <div class="dag-row" data-astro-cid-bbe6dxrz> <div class="dag-node node-agent running" data-astro-cid-bbe6dxrz> <div class="node-dot pulse" data-astro-cid-bbe6dxrz></div> <span data-astro-cid-bbe6dxrz>Frontend</span> </div> <div class="dag-node node-agent running" data-astro-cid-bbe6dxrz> <div class="node-dot pulse" data-astro-cid-bbe6dxrz></div> <span data-astro-cid-bbe6dxrz>Backend</span> </div> <div class="dag-node node-agent" data-astro-cid-bbe6dxrz> <div class="node-dot" data-astro-cid-bbe6dxrz></div> <span data-astro-cid-bbe6dxrz>Database</span> </div> </div> <div class="dag-progress" data-astro-cid-bbe6dxrz> <div class="progress-bar" data-astro-cid-bbe6dxrz> <div class="progress-fill" data-astro-cid-bbe6dxrz></div> </div> <span class="progress-label" data-astro-cid-bbe6dxrz>Running workflow · 2 agents active</span> </div> </div> </div> </div> <div class="placeholder-badge" data-astro-cid-bbe6dxrz> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" data-astro-cid-bbe6dxrz> <rect width="14" height="14" rx="4" fill="url(#img-grad)" data-astro-cid-bbe6dxrz></rect> <path d="M3 7H11M7 3V11" stroke="white" stroke-width="1.5" stroke-linecap="round" data-astro-cid-bbe6dxrz></path> <defs data-astro-cid-bbe6dxrz> <linearGradient id="img-grad" x1="0" y1="0" x2="14" y2="14" data-astro-cid-bbe6dxrz> <stop stop-color="#6366f1" data-astro-cid-bbe6dxrz></stop> <stop offset="1" stop-color="#a855f7" data-astro-cid-bbe6dxrz></stop> </linearGradient> </defs> </svg>
Product screenshot coming soon
</div> </div> </div> <!-- Floating stat cards --> <div class="hero-float-card card-left" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="float-card-icon" data-astro-cid-bbe6dxrz>⚡</div> <div data-astro-cid-bbe6dxrz> <div class="float-card-value" data-astro-cid-bbe6dxrz>10x</div> <div class="float-card-label" data-astro-cid-bbe6dxrz>faster shipping</div> </div> </div> <div class="hero-float-card card-right" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="float-card-icon" style="background: linear-gradient(135deg, var(--purple-600), var(--purple-400))" data-astro-cid-bbe6dxrz>🤖</div> <div data-astro-cid-bbe6dxrz> <div class="float-card-value" data-astro-cid-bbe6dxrz>24/7</div> <div class="float-card-label" data-astro-cid-bbe6dxrz>agents working</div> </div> </div> </div> </div> </section> `;
}, "/workspaces/seo-website/src/components/Hero.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 2L3 7V15L11 20L19 15V7L11 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="11" cy="11" r="3" stroke="currentColor" stroke-width="1.5"/></svg>`,
      title: "AI Workflow Builder",
      description: "Describe your feature in plain language. Our AI CPO+CTO asks the right questions, understands your stack, and builds a complete, production-ready workflow \u2014 agents, prompts, context, and all.",
      highlight: "No prompt engineering required"
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M7 19H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 16V19" stroke="currentColor" stroke-width="1.5"/><path d="M6 9L9 12L15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "Visual Agent DAG",
      description: "See your entire workflow as an interactive graph \u2014 every agent, sub-agent, skill, and knowledge source. Inspect prompts, add context, swap tools, or remove steps before you hit run.",
      highlight: "Full transparency and control"
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H10V10H4V4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 4H18V10H12V4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 12H10V18H4V12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 12V18M12 15H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      title: "Project Integration",
      description: "Connect your GitHub repos in seconds. Overnight reads your codebase, loads your .env securely, learns how to run your project, and spins up on-demand cloud environments for every workflow.",
      highlight: "GitHub-native, zero config"
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18L8 13M8 13L11 16L14 9L17 12L20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="3" cy="18" r="1.5" fill="currentColor"/></svg>`,
      title: "Live Workflow Chat",
      description: "Each workflow has its own group chat. Agents post real-time updates, ask when they need input, and alert you if something goes wrong. The whole team stays in the loop \u2014 no black boxes.",
      highlight: "Agents that communicate"
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3C7.5 3 4 5.5 4 9C4 12.5 7 14 7 14H15C15 14 18 12.5 18 9C18 5.5 14.5 3 11 3Z" stroke="currentColor" stroke-width="1.5"/><path d="M8 14V17M14 14V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 19H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      title: "Toolkit & Skills",
      description: "A growing library of pre-built agents, tools, skills, and knowledge sources. Add custom rules, documentation, or APIs. Everything is reusable across all your projects and workflows.",
      highlight: "Extensible by design"
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M11 7V11L14 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "Cloud Execution",
      description: "Workflows run in isolated cloud environments with full real-time visibility. Watch your agents write code, run tests, and push branches \u2014 like pair programming but with a team of AI engineers.",
      highlight: "Fully observable execution"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="features" id="features" data-astro-cid-vnivfuh2> <div class="container" data-astro-cid-vnivfuh2> <div class="features-header" data-astro-cid-vnivfuh2> <span class="section-label" data-astro-cid-vnivfuh2>Features</span> <h2 class="section-title" data-astro-cid-vnivfuh2>
Everything your team needs<br data-astro-cid-vnivfuh2>
to <span class="gradient-text" data-astro-cid-vnivfuh2>ship autonomously</span> </h2> <p class="section-subtitle" data-astro-cid-vnivfuh2>
From idea to pull request, Overnight handles the entire development lifecycle — so your engineers focus on what matters.
</p> </div> <div class="features-grid" data-astro-cid-vnivfuh2> ${features.map((feature, i) => renderTemplate`<article class="feature-card"${addAttribute(`animation-delay: ${i * 0.08}s`, "style")} data-astro-cid-vnivfuh2> <div class="feature-icon" aria-hidden="true" data-astro-cid-vnivfuh2>${unescapeHTML(feature.icon)}</div> <h3 class="feature-title" data-astro-cid-vnivfuh2>${feature.title}</h3> <p class="feature-description" data-astro-cid-vnivfuh2>${feature.description}</p> <div class="feature-highlight" data-astro-cid-vnivfuh2> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-vnivfuh2> <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-vnivfuh2></path> </svg> ${feature.highlight} </div> </article>`)} </div> </div> </section> `;
}, "/workspaces/seo-website/src/components/Features.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Connect your project",
      description: "Import your GitHub repo, load your environment config securely, and tell Overnight how to run your project. One-time setup, reused across every workflow.",
      visual: "connect"
    },
    {
      number: "02",
      title: "Describe your feature",
      description: "Chat with Overnight's AI \u2014 your combined CPO and CTO. It asks the right questions, understands your architecture, and collaborates until it has everything it needs.",
      visual: "chat"
    },
    {
      number: "03",
      title: "Review the workflow",
      description: "Overnight generates a complete agent workflow \u2014 prompts, tools, knowledge sources, and execution order. You review, adjust, and approve before anything runs.",
      visual: "review"
    },
    {
      number: "04",
      title: "Ship while you sleep",
      description: "Agents run in isolated cloud environments. Watch live, get updates in workflow chat, answer questions if asked. Wake up to a pull request ready to merge.",
      visual: "ship"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="how-it-works" id="how-it-works" data-astro-cid-cmgpsf2k> <div class="container" data-astro-cid-cmgpsf2k> <div class="hiw-header" data-astro-cid-cmgpsf2k> <span class="section-label" data-astro-cid-cmgpsf2k>How it works</span> <h2 class="section-title" data-astro-cid-cmgpsf2k>
From idea to PR<br data-astro-cid-cmgpsf2k>
in <span class="gradient-text" data-astro-cid-cmgpsf2k>four steps</span> </h2> <p class="section-subtitle" data-astro-cid-cmgpsf2k>
Overnight handles the complexity. You provide the vision.
</p> </div> <div class="steps" data-astro-cid-cmgpsf2k> ${steps.map((step, i) => renderTemplate`<div${addAttribute(`step ${i % 2 === 0 ? "step-normal" : "step-reverse"}`, "class")} data-astro-cid-cmgpsf2k> <div class="step-content" data-astro-cid-cmgpsf2k> <span class="step-number" data-astro-cid-cmgpsf2k>${step.number}</span> <h3 class="step-title" data-astro-cid-cmgpsf2k>${step.title}</h3> <p class="step-description" data-astro-cid-cmgpsf2k>${step.description}</p> </div> <div class="step-visual" data-astro-cid-cmgpsf2k> <div${addAttribute(`step-mockup mockup-${step.visual}`, "class")} data-astro-cid-cmgpsf2k> ${step.visual === "connect" && renderTemplate`<div class="mockup-connect" data-astro-cid-cmgpsf2k> <div class="connect-repo" data-astro-cid-cmgpsf2k> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-astro-cid-cmgpsf2k> <path d="M10 1.667C5.397 1.667 1.667 5.397 1.667 10c0 3.682 2.388 6.807 5.702 7.909.417.077.569-.181.569-.402 0-.198-.007-.724-.011-1.42-2.32.504-2.81-1.119-2.81-1.119-.38-.964-.927-1.221-.927-1.221-.757-.518.058-.507.058-.507.838.059 1.278.86 1.278.86.744 1.274 1.951.906 2.428.693.075-.539.29-.906.528-1.114-1.851-.21-3.797-.926-3.797-4.122 0-.91.325-1.655.859-2.239-.086-.21-.372-1.058.081-2.207 0 0 .7-.224 2.292.854A7.996 7.996 0 0 1 10 5.462c.709.003 1.422.096 2.088.281 1.59-1.078 2.288-.854 2.288-.854.455 1.15.168 1.997.083 2.207.535.584.858 1.329.858 2.239 0 3.204-1.95 3.91-3.806 4.116.299.258.566.767.566 1.546 0 1.117-.01 2.017-.01 2.291 0 .223.15.483.573.401C16.617 16.803 18.333 13.68 18.333 10c0-4.603-3.73-8.333-8.333-8.333Z" fill="currentColor" data-astro-cid-cmgpsf2k></path> </svg> <div class="repo-info" data-astro-cid-cmgpsf2k> <div class="repo-name" data-astro-cid-cmgpsf2k>my-saas-app</div> <div class="repo-branch" data-astro-cid-cmgpsf2k>main · 1,243 commits</div> </div> <div class="connect-check" data-astro-cid-cmgpsf2k> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" data-astro-cid-cmgpsf2k> <circle cx="7" cy="7" r="6" fill="#22c55e" fill-opacity="0.2" stroke="#22c55e" data-astro-cid-cmgpsf2k></circle> <path d="M4 7L6.5 9.5L10 5" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cmgpsf2k></path> </svg> </div> </div> <div class="connect-settings" data-astro-cid-cmgpsf2k> <div class="setting-row" data-astro-cid-cmgpsf2k> <span class="setting-key" data-astro-cid-cmgpsf2k>.env</span> <span class="setting-val" data-astro-cid-cmgpsf2k>Loaded securely</span> </div> <div class="setting-row" data-astro-cid-cmgpsf2k> <span class="setting-key" data-astro-cid-cmgpsf2k>Run command</span> <span class="setting-val" data-astro-cid-cmgpsf2k>npm run dev</span> </div> <div class="setting-row" data-astro-cid-cmgpsf2k> <span class="setting-key" data-astro-cid-cmgpsf2k>Default model</span> <span class="setting-val" data-astro-cid-cmgpsf2k>Claude Opus 4</span> </div> </div> </div>`} ${step.visual === "chat" && renderTemplate`<div class="mockup-chat" data-astro-cid-cmgpsf2k> <div class="chat-message ai" data-astro-cid-cmgpsf2k> <div class="chat-avatar ai-avatar" data-astro-cid-cmgpsf2k>AI</div> <div class="chat-bubble" data-astro-cid-cmgpsf2k>
Tell me about the feature you want to build. What problem does it solve for your users?
</div> </div> <div class="chat-message user" data-astro-cid-cmgpsf2k> <div class="chat-bubble user-bubble" data-astro-cid-cmgpsf2k>
I want users to be able to invite teammates to their workspace.
</div> <div class="chat-avatar user-avatar" data-astro-cid-cmgpsf2k>Y</div> </div> <div class="chat-message ai" data-astro-cid-cmgpsf2k> <div class="chat-avatar ai-avatar" data-astro-cid-cmgpsf2k>AI</div> <div class="chat-bubble" data-astro-cid-cmgpsf2k>
Great! A few questions: Should invites be email-based or link-based? Do you need role-based permissions? Any limit on workspace size?
</div> </div> <div class="chat-typing" data-astro-cid-cmgpsf2k> <div class="typing-dot" data-astro-cid-cmgpsf2k></div> <div class="typing-dot" data-astro-cid-cmgpsf2k></div> <div class="typing-dot" data-astro-cid-cmgpsf2k></div> </div> </div>`} ${step.visual === "review" && renderTemplate`<div class="mockup-dag" data-astro-cid-cmgpsf2k> <div class="mini-dag" data-astro-cid-cmgpsf2k> <div class="mini-node orchestrator" data-astro-cid-cmgpsf2k>Orchestrator</div> <div class="mini-connectors" data-astro-cid-cmgpsf2k> <div class="mini-line" data-astro-cid-cmgpsf2k></div> <div class="mini-line" data-astro-cid-cmgpsf2k></div> <div class="mini-line" data-astro-cid-cmgpsf2k></div> </div> <div class="mini-row" data-astro-cid-cmgpsf2k> <div class="mini-node agent" data-astro-cid-cmgpsf2k> <span class="mini-dot active" data-astro-cid-cmgpsf2k></span>Frontend
</div> <div class="mini-node agent" data-astro-cid-cmgpsf2k> <span class="mini-dot active" data-astro-cid-cmgpsf2k></span>Backend
</div> <div class="mini-node agent" data-astro-cid-cmgpsf2k> <span class="mini-dot" data-astro-cid-cmgpsf2k></span>Tests
</div> </div> </div> <div class="dag-meta" data-astro-cid-cmgpsf2k> <div class="meta-item" data-astro-cid-cmgpsf2k> <span class="meta-label" data-astro-cid-cmgpsf2k>Agents</span> <span class="meta-val" data-astro-cid-cmgpsf2k>3</span> </div> <div class="meta-item" data-astro-cid-cmgpsf2k> <span class="meta-label" data-astro-cid-cmgpsf2k>Skills</span> <span class="meta-val" data-astro-cid-cmgpsf2k>5</span> </div> <div class="meta-item" data-astro-cid-cmgpsf2k> <span class="meta-label" data-astro-cid-cmgpsf2k>Est. time</span> <span class="meta-val" data-astro-cid-cmgpsf2k>~18m</span> </div> </div> </div>`} ${step.visual === "ship" && renderTemplate`<div class="mockup-ship" data-astro-cid-cmgpsf2k> <div class="ship-chat" data-astro-cid-cmgpsf2k> <div class="ship-msg" data-astro-cid-cmgpsf2k> <span class="agent-tag frontend" data-astro-cid-cmgpsf2k>Frontend</span>
Implemented invite form and email validation ✓
</div> <div class="ship-msg" data-astro-cid-cmgpsf2k> <span class="agent-tag backend" data-astro-cid-cmgpsf2k>Backend</span>
API endpoints created, tokens secured ✓
</div> <div class="ship-msg" data-astro-cid-cmgpsf2k> <span class="agent-tag question" data-astro-cid-cmgpsf2k>Backend</span>
Should invite links expire after 7 days?
</div> <div class="ship-input" data-astro-cid-cmgpsf2k> <input type="text" placeholder="Reply to agent..." readonly data-astro-cid-cmgpsf2k> <button data-astro-cid-cmgpsf2k>Send</button> </div> </div> <div class="ship-pr" data-astro-cid-cmgpsf2k> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" data-astro-cid-cmgpsf2k> <circle cx="3" cy="3" r="2" stroke="#a855f7" stroke-width="1.5" data-astro-cid-cmgpsf2k></circle> <circle cx="3" cy="11" r="2" stroke="#22c55e" stroke-width="1.5" data-astro-cid-cmgpsf2k></circle> <circle cx="11" cy="3" r="2" stroke="#a855f7" stroke-width="1.5" data-astro-cid-cmgpsf2k></circle> <path d="M3 5V9M3 5C3 5 11 6 11 5V8C11 9 3 9 3 9" stroke="#6366f1" stroke-width="1" data-astro-cid-cmgpsf2k></path> </svg>
PR #47 ready to review
</div> </div>`} <!-- Placeholder badge --> <div class="visual-placeholder-badge" aria-hidden="true" data-astro-cid-cmgpsf2k> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" data-astro-cid-cmgpsf2k> <rect width="12" height="12" rx="3" fill="url(#vis-grad)" data-astro-cid-cmgpsf2k></rect> <path d="M2.5 6H9.5M6 2.5V9.5" stroke="white" stroke-width="1.2" stroke-linecap="round" data-astro-cid-cmgpsf2k></path> <defs data-astro-cid-cmgpsf2k> <linearGradient id="vis-grad" x1="0" y1="0" x2="12" y2="12" data-astro-cid-cmgpsf2k> <stop stop-color="#6366f1" data-astro-cid-cmgpsf2k></stop><stop offset="1" stop-color="#a855f7" data-astro-cid-cmgpsf2k></stop> </linearGradient> </defs> </svg>
Video demo coming soon
</div> </div> </div> </div>`)} </div> </div> </section> `;
}, "/workspaces/seo-website/src/components/HowItWorks.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      name: "Starter",
      price: "$50",
      period: "per seat / month",
      description: "Everything your team needs to start shipping with AI agents.",
      cta: "Get started",
      ctaHref: "#book-demo",
      featured: false,
      features: [
        "Unlimited workflows",
        "Up to 10 team members",
        "GitHub integration",
        "Visual agent DAG editor",
        "Workflow chat & notifications",
        "Pre-built agent toolkit",
        "Cloud execution environment",
        "Global API key management",
        "Email support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us for pricing",
      description: "For organizations that need custom deployments, SSO, and dedicated support.",
      cta: "Contact sales",
      ctaHref: "mailto:sales@overnightai.app",
      featured: true,
      features: [
        "Everything in Starter",
        "Unlimited seats",
        "SSO & custom domain login",
        "Custom knowledge bases",
        "Fine-grained role permissions",
        "Dedicated cloud environment",
        "Priority support & SLA",
        "Custom model configurations",
        "Slack / Teams / Chat integrations",
        "Dedicated onboarding & success manager"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pricing" id="pricing" data-astro-cid-hkoc4sea> <div class="container" data-astro-cid-hkoc4sea> <div class="pricing-header" data-astro-cid-hkoc4sea> <span class="section-label" data-astro-cid-hkoc4sea>Pricing</span> <h2 class="section-title" data-astro-cid-hkoc4sea>
Simple, transparent<br data-astro-cid-hkoc4sea> <span class="gradient-text" data-astro-cid-hkoc4sea>pricing</span> </h2> <p class="section-subtitle" data-astro-cid-hkoc4sea>
Start shipping with AI agents today. Scale to enterprise when you're ready.
</p> </div> <div class="pricing-grid" data-astro-cid-hkoc4sea> ${plans.map((plan) => renderTemplate`<div${addAttribute(`pricing-card ${plan.featured ? "pricing-card-featured" : ""}`, "class")} data-astro-cid-hkoc4sea> ${plan.featured && renderTemplate`<div class="featured-badge" data-astro-cid-hkoc4sea>Most popular</div>`} <div class="plan-header" data-astro-cid-hkoc4sea> <h3 class="plan-name" data-astro-cid-hkoc4sea>${plan.name}</h3> <div class="plan-price" data-astro-cid-hkoc4sea> <span class="price-amount" data-astro-cid-hkoc4sea>${plan.price}</span> ${plan.price !== "Custom" && renderTemplate`<span class="price-currency" data-astro-cid-hkoc4sea></span>`} </div> <p class="plan-period" data-astro-cid-hkoc4sea>${plan.period}</p> <p class="plan-description" data-astro-cid-hkoc4sea>${plan.description}</p> </div> <a${addAttribute(plan.ctaHref, "href")}${addAttribute(plan.featured ? "btn-primary plan-cta" : "btn-secondary plan-cta", "class")} data-astro-cid-hkoc4sea> ${plan.cta} <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" data-astro-cid-hkoc4sea> <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hkoc4sea></path> </svg> </a> <ul class="plan-features" role="list" data-astro-cid-hkoc4sea> ${plan.features.map((feature) => renderTemplate`<li class="plan-feature" data-astro-cid-hkoc4sea> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-hkoc4sea> <circle cx="8" cy="8" r="7" fill="url(#check-gradient)" fill-opacity="0.15" stroke="url(#check-gradient)" stroke-opacity="0.4" data-astro-cid-hkoc4sea></circle> <path d="M5 8L7 10.5L11 5.5" stroke="url(#check-gradient)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hkoc4sea></path> <defs data-astro-cid-hkoc4sea> <linearGradient id="check-gradient" x1="1" y1="1" x2="15" y2="15" gradientUnits="userSpaceOnUse" data-astro-cid-hkoc4sea> <stop stop-color="#818cf8" data-astro-cid-hkoc4sea></stop> <stop offset="1" stop-color="#c084fc" data-astro-cid-hkoc4sea></stop> </linearGradient> </defs> </svg> ${feature} </li>`)} </ul> </div>`)} </div> <div class="pricing-note" data-astro-cid-hkoc4sea> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-hkoc4sea> <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2" opacity="0.5" data-astro-cid-hkoc4sea></circle> <path d="M8 5V8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" data-astro-cid-hkoc4sea></path> <circle cx="8" cy="11" r="0.75" fill="currentColor" data-astro-cid-hkoc4sea></circle> </svg>
All plans include a 14-day free trial. No credit card required to start.
</div> </div> </section> `;
}, "/workspaces/seo-website/src/components/Pricing.astro", void 0);

const $$BookDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="book-demo" id="book-demo" data-astro-cid-ouqes7pf> <div class="container" data-astro-cid-ouqes7pf> <div class="demo-inner" data-astro-cid-ouqes7pf> <!-- Glow --> <div class="demo-glow" aria-hidden="true" data-astro-cid-ouqes7pf></div> <div class="demo-content" data-astro-cid-ouqes7pf> <span class="badge" data-astro-cid-ouqes7pf> <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" data-astro-cid-ouqes7pf> <circle cx="5" cy="5" r="4" fill="currentColor" opacity="0.5" data-astro-cid-ouqes7pf></circle> <circle cx="5" cy="5" r="2" fill="currentColor" data-astro-cid-ouqes7pf></circle> </svg>
Limited early access spots available
</span> <h2 class="demo-title" data-astro-cid-ouqes7pf>
Ready to ship<br data-astro-cid-ouqes7pf> <span class="gradient-text" data-astro-cid-ouqes7pf>10x faster?</span> </h2> <p class="demo-subtitle" data-astro-cid-ouqes7pf>
Book a 30-minute demo and see Overnight build a real feature in your codebase — live.
</p> <form class="demo-form" novalidate data-astro-cid-ouqes7pf> <div class="form-row" data-astro-cid-ouqes7pf> <div class="form-group" data-astro-cid-ouqes7pf> <label for="demo-name" class="form-label" data-astro-cid-ouqes7pf>Full name</label> <input type="text" id="demo-name" name="name" placeholder="Alex Johnson" class="form-input" autocomplete="name" data-astro-cid-ouqes7pf> </div> <div class="form-group" data-astro-cid-ouqes7pf> <label for="demo-email" class="form-label" data-astro-cid-ouqes7pf>Work email</label> <input type="email" id="demo-email" name="email" placeholder="alex@company.com" class="form-input" autocomplete="email" data-astro-cid-ouqes7pf> </div> </div> <div class="form-group" data-astro-cid-ouqes7pf> <label for="demo-company" class="form-label" data-astro-cid-ouqes7pf>Company & team size</label> <input type="text" id="demo-company" name="company" placeholder="Acme Inc · 10–50 engineers" class="form-input" autocomplete="organization" data-astro-cid-ouqes7pf> </div> <button type="submit" class="btn-primary demo-submit" data-astro-cid-ouqes7pf>
Book my demo
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-ouqes7pf> <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ouqes7pf></path> </svg> </button> <p class="form-note" data-astro-cid-ouqes7pf>No spam. We'll reach out within 24 hours to schedule your slot.</p> </form> </div> <div class="demo-stats" data-astro-cid-ouqes7pf> <div class="stat-item" data-astro-cid-ouqes7pf> <div class="stat-value gradient-text" data-astro-cid-ouqes7pf>10x</div> <div class="stat-label" data-astro-cid-ouqes7pf>faster feature delivery</div> </div> <div class="stat-divider" data-astro-cid-ouqes7pf></div> <div class="stat-item" data-astro-cid-ouqes7pf> <div class="stat-value gradient-text" data-astro-cid-ouqes7pf>24/7</div> <div class="stat-label" data-astro-cid-ouqes7pf>agents working for you</div> </div> <div class="stat-divider" data-astro-cid-ouqes7pf></div> <div class="stat-item" data-astro-cid-ouqes7pf> <div class="stat-value gradient-text" data-astro-cid-ouqes7pf>$0</div> <div class="stat-label" data-astro-cid-ouqes7pf>setup cost to get started</div> </div> </div> </div> </div> </section> ${renderScript($$result, "/workspaces/seo-website/src/components/BookDemo.astro?astro&type=script&index=0&lang.ts")} `;
}, "/workspaces/seo-website/src/components/BookDemo.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container footer-inner" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <a href="/" class="footer-logo" aria-label="Overnight home" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-sz7xmlte> <circle cx="14" cy="14" r="13" stroke="url(#footer-logo-gradient)" stroke-width="2" data-astro-cid-sz7xmlte></circle> <path d="M14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22C16.5 22 18.75 20.875 20.25 19.1C18.75 19.7 17.1 20 15.4 19.6C12.1 18.8 9.6 15.9 9.6 12.4C9.6 9.5 11.4 7.1 14 6Z" fill="url(#footer-logo-gradient)" data-astro-cid-sz7xmlte></path> <defs data-astro-cid-sz7xmlte> <linearGradient id="footer-logo-gradient" x1="6" y1="6" x2="22" y2="22" gradientUnits="userSpaceOnUse" data-astro-cid-sz7xmlte> <stop stop-color="#818cf8" data-astro-cid-sz7xmlte></stop> <stop offset="1" stop-color="#c084fc" data-astro-cid-sz7xmlte></stop> </linearGradient> </defs> </svg> <span class="footer-logo-text" data-astro-cid-sz7xmlte>Overnight</span> </a> <p class="footer-tagline" data-astro-cid-sz7xmlte>
AI-powered development workflows.<br data-astro-cid-sz7xmlte>Ship features while you sleep.
</p> <div class="footer-social" data-astro-cid-sz7xmlte> <a href="https://twitter.com/overnightai" class="social-link" aria-label="Follow Overnight on X (Twitter)" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-sz7xmlte> <path d="M13 2L9.07 7.14L13.5 13H10.5L7.86 9.57L4.5 13H2.5L6.65 7.57L2.5 2H5.5L8.14 5.43L11.5 2H13Z" fill="currentColor" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://github.com/overnightai-app" class="social-link" aria-label="Overnight on GitHub" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-sz7xmlte> <path d="M8 1C4.13 1 1 4.13 1 8C1 11.1 3.01 13.71 5.79 14.64C6.14 14.7 6.27 14.49 6.27 14.3C6.27 14.13 6.26 13.6 6.26 12.96C4.49 13.35 4.09 12.2 4.09 12.2C3.77 11.38 3.31 11.17 3.31 11.17C2.68 10.74 3.36 10.75 3.36 10.75C4.05 10.8 4.41 11.46 4.41 11.46C5.03 12.54 6.02 12.23 6.3 12.05C6.36 11.6 6.55 11.3 6.75 11.12C5.1 10.94 3.36 10.3 3.36 7.48C3.36 6.7 3.64 6.06 4.08 5.56C4 5.37 3.76 4.65 4.16 3.68C4.16 3.68 4.74 3.47 6.26 4.38C6.9 4.21 7.55 4.12 8.2 4.12C8.85 4.12 9.5 4.21 10.14 4.38C11.66 3.47 12.24 3.68 12.24 3.68C12.64 4.65 12.4 5.37 12.32 5.56C12.76 6.06 13.04 6.7 13.04 7.48C13.04 10.31 11.29 10.93 9.63 11.11C9.89 11.33 10.13 11.77 10.13 12.44C10.13 13.4 10.12 14.17 10.12 14.3C10.12 14.49 10.25 14.71 10.61 14.64C13.39 13.71 15.4 11.1 15.4 8C15.4 4.13 12.27 1 8.4 1H8Z" fill="currentColor" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://linkedin.com/company/overnightai" class="social-link" aria-label="Overnight on LinkedIn" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-sz7xmlte> <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.2" data-astro-cid-sz7xmlte></rect> <path d="M4 6.5V12M4 4.5V5M7 12V9C7 7.9 7.9 7 9 7C10.1 7 11 7.9 11 9V12M7 6.5V12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </div> <nav class="footer-nav" aria-label="Footer navigation" data-astro-cid-sz7xmlte> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" data-astro-cid-sz7xmlte>Product</h4> <ul role="list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#features" data-astro-cid-sz7xmlte>Features</a></li> <li data-astro-cid-sz7xmlte><a href="#how-it-works" data-astro-cid-sz7xmlte>How it works</a></li> <li data-astro-cid-sz7xmlte><a href="#pricing" data-astro-cid-sz7xmlte>Pricing</a></li> <li data-astro-cid-sz7xmlte><a href="#book-demo" data-astro-cid-sz7xmlte>Book a demo</a></li> </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" data-astro-cid-sz7xmlte>Company</h4> <ul role="list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/about" data-astro-cid-sz7xmlte>About</a></li> <li data-astro-cid-sz7xmlte><a href="/blog" data-astro-cid-sz7xmlte>Blog</a></li> <li data-astro-cid-sz7xmlte><a href="/careers" data-astro-cid-sz7xmlte>Careers</a></li> <li data-astro-cid-sz7xmlte><a href="mailto:hello@overnightai.app" data-astro-cid-sz7xmlte>Contact</a></li> </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" data-astro-cid-sz7xmlte>Legal</h4> <ul role="list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/privacy" data-astro-cid-sz7xmlte>Privacy policy</a></li> <li data-astro-cid-sz7xmlte><a href="/terms" data-astro-cid-sz7xmlte>Terms of service</a></li> <li data-astro-cid-sz7xmlte><a href="/security" data-astro-cid-sz7xmlte>Security</a></li> </ul> </div> </nav> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <div class="container footer-bottom-inner" data-astro-cid-sz7xmlte> <p class="footer-copyright" data-astro-cid-sz7xmlte>
&copy; ${year} Overnight AI, Inc. All rights reserved.
</p> <p class="footer-domain" data-astro-cid-sz7xmlte> <a href="https://overnightai.app" aria-label="Visit overnightai.app" data-astro-cid-sz7xmlte>overnightai.app</a> </p> </div> </div> </footer> `;
}, "/workspaces/seo-website/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Overnight \u2014 AI Development Workflows That Ship While You Sleep", "description": "Overnight automates your entire development lifecycle with AI agents. Describe a feature, approve the plan, and wake up to a pull request. Book a demo today." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "BookDemo", $$BookDemo, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/workspaces/seo-website/src/pages/index.astro", void 0);

const $$file = "/workspaces/seo-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
