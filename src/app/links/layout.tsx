import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Francisco Costa",
  description:
    "Acesse rapidamente meu site, redes sociais e formas de contato. Francisco Costa, Engenheiro de Software especializado em Full Stack e Cloud.",
  openGraph: {
    title: "Links | Francisco Costa",
    description:
      "Veja todos os links importantes para acessar o portfólio e as redes sociais de Francisco Costa, Engenheiro de Software especializado em soluções seguras e escaláveis.",
    url: "https://www.franciscocosta.dev.br/links",
    siteName: "Francisco Costa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francisco Costa Links",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Links | Francisco Costa",
    description:
      "Entre em contato comigo rapidamente através dos links para WhatsApp, LinkedIn, GitHub e mais.",
    images: ["/og-image.jpg"],
  },
};

export default function LinksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
