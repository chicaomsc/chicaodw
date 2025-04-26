import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
    "Portfólio profissional de Francisco Costa, Engenheiro de Software especialista em Full Stack e Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-gradient-to-b from-background-darker to-background-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
