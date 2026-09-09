import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.scss";

import { neueMontreal, zagmaMono } from "./fonts";

export const metadata: Metadata = {
  title: "QOVES — Test Task",
  description: "Interactive frontend experience built with Next.js, GSAP and Recharts.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} ${zagmaMono.variable}`}>{children}</body>
    </html>
  );
}
