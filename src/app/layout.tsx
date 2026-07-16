import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Robin Mia | C++ Developer & Infrastructure Engineer",
  description:
    "Robin Mia is a C++ Developer and Infrastructure Engineer in Bangladesh with experience in software development, Linux servers, networking, and IT operations.",
  keywords: [
    "robin",
    "mrun1corn",
    "mrunicorn",
    "portfolio",
    "C++ developer",
    "server administrator",
    "network engineer",
    "IT executive",
    "MikroTik",
    "Cisco",
    "CCTV",
    "virtualization",
    "Proxmox",
    "Linux",
    "Bangladesh",
  ],
  authors: [{ name: "Robin (mrun1corn)" }],
  alternates: {
    canonical: "https://mrun1corn.xyz/",
  },
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/avatar.png",
  },
  openGraph: {
    title: "Robin Mia | C++ Developer & Infrastructure Engineer",
    description:
      "C++ Developer and Infrastructure Engineer in Bangladesh with experience in software development, Linux servers, networking, and IT operations.",
    url: "https://mrun1corn.xyz/",
    siteName: "Robin Mia Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mrun1corn.xyz/assets/site-icon.png",
        alt: "Robin Mia portfolio logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Mia | C++ Developer & Infrastructure Engineer",
    description:
      "C++ Developer and Infrastructure Engineer in Bangladesh with experience in software development, Linux servers, networking, and IT operations.",
    images: ["https://mrun1corn.xyz/assets/site-icon.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mrun1corn.xyz/#person",
  "name": "Robin Mia",
  "alternateName": ["mrun1corn", "mrunicorn"],
  "url": "https://mrun1corn.xyz",
  "image": "https://mrun1corn.xyz/assets/site-icon.png",
  "jobTitle": "C++ Developer & Infrastructure Engineer",
  "description": "C++ Developer and Infrastructure Engineer in Bangladesh with experience in software development, Linux servers, networking, virtualization, and IT operations.",
  "email": "robin424123@gmail.com",
  "telephone": "+8801716708463",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangladesh"
  },
  "knowsAbout": [
    "C++ development",
    "System-level programming",
    "Server administration",
    "Linux operations",
    "Virtualization (Proxmox, VMware)",
    "Network administration",
    "MikroTik & Cisco configuration",
    "IT support"
  ],
  "sameAs": [
    "https://facebook.com/mrun1orn",
    "https://github.com/mrun1corn",
    "https://linkedin.com/in/robin-unicorn"
  ]
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://mrun1corn.xyz/#profile",
  "name": "Robin Mia Portfolio",
  "url": "https://mrun1corn.xyz",
  "description": "Portfolio of Robin Mia, a C++ Developer and Infrastructure Engineer focused on C++ programming, network administration, server management, and DevOps automation.",
  "about": {
    "@id": "https://mrun1corn.xyz/#person"
  },
  "mainEntity": {
    "@id": "https://mrun1corn.xyz/#person"
  },
  "hasPart": [
    {
      "@type": "WebPageElement",
      "name": "About",
      "description": "Summary of Robin Mia's experience in C++ development and infrastructure roles."
    },
    {
      "@type": "WebPageElement",
      "name": "Skills",
      "description": "Technical expertise in C++ programming, server administration, networking, and DevOps."
    },
    {
      "@type": "WebPageElement",
      "name": "Projects",
      "description": "Showcase of projects like portview, Community Savings Platform, and ShareBuddy Android."
    },
    {
      "@type": "WebPageElement",
      "name": "Experience",
      "description": "Professional history as a C++ Developer and Server/Network administrator."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{
        // Set --font-heading to the same Outfit font variable
        // @ts-ignore
        "--font-heading": "var(--font-body)",
      }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem("portfolio-theme");
                if (savedTheme === "light" || savedTheme === "dark") {
                  document.documentElement.dataset.theme = savedTheme;
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        {/* Load Lottie Web Component Script */}
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
