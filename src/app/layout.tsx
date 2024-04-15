import "@/lib/styles/globals.scss";
import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import Providers from "@/lib/providers/Providers";

const Layout = dynamic(() => import("@/lib/components/partials/layout"));

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
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
