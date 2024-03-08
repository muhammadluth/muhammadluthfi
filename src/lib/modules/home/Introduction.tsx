import React from "react";
import { TypeAnimation } from "@/lib/components/elements/TypeAnimation";

export default function Introduction() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-2xl font-medium lg:text-3xl">
          <TypeAnimation
            sequence={["Hi, I'm Muhammad Luthfi", "Hi, I'm Software Engineer"]}
            delay={3000}
            className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          />
        </div>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-1 lg:flex-row lg:gap-8">
          <li>Hybrid worker</li>
          <li>
            Based in Yogyakarta, Indonesia <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose">
          I am an experienced Software Engineer, proficient in both Front-End
          and Back-End development, with a passion for creating fast and
          efficient platforms. I work with GoLang, JavaScript, and TypeScript,
          specializing in banking and fintech systems. I enjoy collaborating
          with teams to deliver the best results in a system.
        </p>
      </div>
    </section>
  );
}
