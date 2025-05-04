import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francisco Costa | Engenheiro de Software",
  description:
    "Francisco Costa, Engenheiro de Software especialista em Full Stack com Java, Node.js, React, AWS e muito mais.",
  metadataBase: new URL("https://www.franciscocosta.dev.br"),
  openGraph: {
    title: "Francisco Costa | Engenheiro de Software",
    description:
      "Desenvolvedor Full Stack especializado em Java, Node.js, React e AWS.",
    url: "https://www.franciscocosta.dev.br",
    siteName: "Francisco Costa",
    images: [
      {
        url: "https://www.franciscocosta.dev.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francisco Costa Engenheiro de Software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Costa | Engenheiro de Software",
    description:
      "Desenvolvedor Full Stack especializado em Java, Node.js, React e AWS.",
    site: "@chicaodw",
    images: ["https://www.franciscocosta.dev.br/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.franciscocosta.dev.br",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="schema-ld-json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Francisco Costa",
            url: "https://www.franciscocosta.dev.br",
            sameAs: [
              "https://linkedin.com/in/chicaodw",
              "https://github.com/chicaodw",
              "https://instagram.com/chicaodw",
            ],
            jobTitle: "Engenheiro de Software",
            worksFor: {
              "@type": "Organization",
              name: "HerutSoft",
            },
            description:
              "Francisco Costa, Engenheiro de Software especializado em Full Stack e Cloud.",
            email: "mailto:francyscocosta@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Recife",
              addressCountry: "Brasil",
            },
          })}
        </Script>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-6081GKK9TQ`}
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6081GKK9TQ');
            `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-gradient-to-b from-background-darker to-background-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
