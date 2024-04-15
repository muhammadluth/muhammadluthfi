import React from "react";

export default function Introduction() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-2xl font-medium lg:text-3xl">
          <h1>Hi, I&apos;m Muhammad Luthfi</h1>
          <span className="ml-1 animate-waving-hand">👋</span>
        </div>
      </div>

      <div className="space-y-4">
        <ul className="ml-3 flex list-disc flex-collg:flex-row gap-2">
          <li>Based in Yogyakarta, Indonesia </li>
          <span className="animate-flag-fluttering">🇮🇩</span>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-justify">
          I am an experienced Software Engineer, proficient in both Front-End
          and Back-End development, with a passion for creating fast and
          efficient platforms. I work with GoLang, JavaScript, and TypeScript,
          specializing in payment systems. I enjoy collaborating with teams to
          deliver the best results in a system.
        </p>
      </div>
    </section>
  );
}
