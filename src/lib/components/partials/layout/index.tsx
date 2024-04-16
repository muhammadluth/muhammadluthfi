"use client";
import React, { ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import AOS from "aos";

const Sidebar = dynamic(() => import("@/lib/components/partials/sidebar"));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <main className={clsx("max-w-6xl mx-auto lg:px-8")}>
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8">
        <Sidebar />
        <div className="lg:w-4/5 max-w-[854px] transition-all duration-300">
          {children}
        </div>
      </div>
    </main>
  );
}
