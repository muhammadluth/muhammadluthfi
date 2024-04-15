import "@/lib/styles/globals.scss";
import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";

const Layout = dynamic(() => import("@/lib/components/partials/layout"));
const ThemeProvider = dynamic(() => import("@/lib/providers/ThemeProvider"));

const poppins = Poppins({ subsets: ["latin"], weight: "300", preload: true });

export const metadata: Metadata = {
  title: "Muhammad Luthfi | Home",
  description: "My home menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
