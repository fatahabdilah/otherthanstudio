import type { Metadata } from "next";
import { Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Anton: a tall, condensed poster face — high cap-height and narrow
// letterforms give the headline its vertical, full-bleed presence.
const displayFont = Anton({
  variable: "--font-display-face",
  weight: "400",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otherthan Studio | Branding & Social Media",
  description:
    "We turn ideas into visual languages that give brands a distinct point of view — branding, visual identity, and social media.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
