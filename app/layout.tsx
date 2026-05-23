import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";

export const metadata: Metadata = {
  title: "Atharva Singh — Founding Engineer / AI Builder",
  description:
    "Atharva Singh — AI/ML engineer, founding engineer at Himitsu Lab, building multi-agent systems, RAG pipelines, and autonomous trading bots. New Delhi.",
  keywords: [
    "Atharva Singh",
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LLM",
    "Next.js",
    "Portfolio",
    "wannabeaquant",
  ],
  authors: [{ name: "Atharva Singh", url: "https://github.com/wannabeaquant" }],
  openGraph: {
    title: "Atharva Singh — Founding Engineer / AI Builder",
    description:
      "AI/ML engineer building production multi-agent systems, trading bots, and agentic infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grain antialiased">
        <Cursor />
        <Grain />
        {children}
      </body>
    </html>
  );
}
