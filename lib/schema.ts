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
  areaServed: "Worldwide",
  sameAs: [
    "https://businessday.ng/life/article/aulteus-logic-the-market-doesnt-care-what-you-think-about/",
    "https://www.brainzmagazine.com/post/5-forex-and-stock-market-trading-secrets-you-need-to-know-to-succeed-as-a-trader",
  ],
};

export const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Aulteus Logic",
  url: BASE_URL,
  description:
    "Aulteus Logic delivers structured trading education through its five-layer decision framework and Agentic AI tools. We teach traders how to govern decisions under market uncertainty using institutional-grade methodology.",
  email: "Hello@aulteuslogic.com",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aulteus Logic Programmes",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Aulteus Logic Framework",
          description:
            "The five-layer institutional decision framework: Macro Context, Liquidity Engineering, Gap Analysis, Technical Precision, Emotional Intelligence.",
          provider: { "@type": "Organization", name: "Aulteus Logic" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "The Aulteus Logic Complete Mentorship",
          description:
            "Full mentorship programme including the framework, Agentic AI tools, live sessions, and ongoing decision governance support.",
          provider: { "@type": "Organization", name: "Aulteus Logic" },
        },
      },
    ],
  },
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

export const eitBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "The EIT Framework", item: `${BASE_URL}/eit` },
  ],
};

export const eitDefinedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "EIT (Emotionally Intelligent Trader)",
  description:
    "A behaviour framework of six protocols run by a trader every trading day, beginning with the Traffic Light pre-trade check, designed to govern conduct rather than predict price.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Aulteus Logic EIT Framework",
  },
};

export const eitFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the EIT Traffic Light Check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Traffic Light Check is Protocol 01 of the EIT framework and the only protocol published publicly. It sorts a potential trade into a Green, Amber or Red state before any capital is at risk. Red means no trade at all.",
      },
    },
    {
      "@type": "Question",
      name: "How many EIT protocols are there?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Six. The first, the Traffic Light System, is public. The remaining five are taught to members inside the Aulteus Logic mentorship.",
      },
    },
    {
      "@type": "Question",
      name: "Why do most trading accounts fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bad trading habits rather than bad analysis destroy most trading accounts. Revenge trading after a loss, overtrading after a win, FOMO entries, oversized positions and moved stop losses are behaviour problems, which is what the EIT framework was built to govern.",
      },
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
