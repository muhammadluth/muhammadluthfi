"use client";
import React, { ReactNode, useEffect } from "react";
// import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import AOS from "aos";
// import { useWindowSize } from "usehooks-ts";

const Sidebar = dynamic(() => import("@/lib/components/partials/sidebar"));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const { resolvedTheme } = useTheme();
  // const pathname = usePathname();
  // const hasMounted = useHasMounted();
  // const { width } = useWindowSize();
  // const isMobile = width < 480;
  // const isUseHeader = false;

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    // <div className="flex flex-col justify-center">
    //   <div className="flex w-full flex-col justify-center lg:flex-row lg:gap-5">
    //     <Sidebar />
    //     <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-10 lg:min-h-screen lg:max-w-[854px]">
    //       {children}
    //     </main>
    //   </div>
    // </div>
    <div>
      <div className={clsx("max-w-6xl mx-auto lg:px-8")}>
        {/* {isFullPageHeader ? (
          <div className="flex flex-col xl:pb-8">
            <HeaderTop />
            <main className="transition-all duration-300">{children}</main>
          </div>
        ) : ( */}
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8">
          <Sidebar />
          <main className="lg:w-4/5 max-w-[854px] transition-all duration-300">
            {children}
          </main>
        </div>
        {/* )} */}
      </div>
      {/* {isShowChatButton && <ChatButton />}
      {isMobile ? <NowPlayingCard /> : <NowPlayingBar />} */}
    </div>
  );
}
