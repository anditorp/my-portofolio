// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from "next";

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img: string;

  theme: {
    default: "light" | "dark";
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string; // default og image
    imageAlt?: string;
    locale?: string;
    type?: string;
    twitterCard?: string;
    robots?: string;
    themeColor?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "Muhammad Andito",
  domain: "andito.site",
  author: "Muhammad Andito",
  description: "Full Stack web and mobile developer",
  about:
    "Full-stack mobile craftsman: Backend brains, frontend soul, mobile heart",
  author_img: "https://avatars.githubusercontent.com/u/70146127?v=4",
  keywords: [
    "Muhammad Andito",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "Framer Motion",
    "React Native",
    "Mobile Developer",
  ],
  ogImage: "/og.png",
  twitterHandle: "",

  theme: {
    default: "dark",
    allowSystem: true,
  },
  links: {
    website: "andito.dev",
    github: "https://github.com/anditorp",
    linkedin: "https://www.linkedin.com/in/anditorp",
    email: "mailto:contact@muhamadandito78.com",
    tips: "",
  },
  social: [
    {
      label: "GitHub",
      url: "https://github.com/anditorp",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/anditorp",
      icon: "linkedin",
    },
    { label: "Website", url: "", icon: "globe" },
    { label: "Tip", url: "", icon: "coffee" },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    title: "Muhammad Andito",
    description: "Full Stack web and mobile developer",
    keywords: [
      "Muhammad Andito",
      "Full Stack Developer",
      "Portfolio",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Framer Motion",
      "Mobile Developer",
    ],
    canonical: "",
    image: "",
    imageAlt: "Muhammad Andito - Full Stack Developer",
    locale: "en-US",
    type: "website",
    twitterCard: "summary_large_image",
    robots: "index,follow",
    themeColor: "#0f172a",
  },
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? "website",
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      robots: seo.robots,
      "theme-color": seo.themeColor,
      "og:image:alt": seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
