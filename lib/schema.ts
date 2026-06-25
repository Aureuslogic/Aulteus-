import { faqs, type FAQ } from "@/lib/faqs";

const BASE_URL = "https://aulteuslogic.com";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aulteus Logic",
  url: BASE_URL,
  description:
    "A non linear decision asset framework for Forex, Gold, Oil and Indices traders. Decision governance, not financial advice.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "Aulteus Logic",
    url: BASE_URL,
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aulteus Logic",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logo-new.png`,
  description:
    "Aulteus Logic is a non linear decision asset framework expressed through Agentic AI. It helps traders decide whether to act, remain neutral, or wait during uncertain market conditions. It does not place trades, is not a trading platform, and can be used alongside any trading platform worldwide.",
  email: "Hello@aulteuslogic.com",
  knowsAbout: [
    "Forex trading decision frameworks",
    "Institutional trading methodology",
    "Non linear decision intelligence",
    "Commodities trading education",
    "Gold and Oil trading",
    "Decision governance under uncertainty",
    "Agentic AI for market analysis",
  ],
  founder: {
    "@type": "Person",
    name: "Sam Onigbanjo",
  },
  // TODO: add real profile URLs once available (LinkedIn, YouTube, X) to strengthen the entity signal
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sam Onigbanjo",
  jobTitle: "Inventor of Aulteus Logic",
  description:
    "After years in corporate strategy and capital markets, Sam Onigbanjo created Aulteus Logic, a non linear decision framework to govern trading decisions under uncertainty. He observed the same pattern repeatedly: intelligent people making poor decisions under pressure not because they lacked knowledge, but because they lacked a decision asset.",
  image: `${BASE_URL}/assets/author.jpg`,
  worksFor: {
    "@type": "Organization",
    name: "Aulteus Logic",
    url: BASE_URL,
  },
  url: BASE_URL,
  // TODO: add Sam's LinkedIn profile URL once available
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agentic Decision Intelligence",
      item: `${BASE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aulteus Logic",
      item: `${BASE_URL}/`,
    },
  ],
};

function answerText(answer: FAQ["answer"]): string {
  return Array.isArray(answer) ? answer.join(" ") : answer;
}

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answerText(faq.answer),
    },
  })),
};
