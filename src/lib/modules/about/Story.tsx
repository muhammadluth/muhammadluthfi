"use client";
import React from "react";
import { useMDXComponents } from "@/lib/hooks/useMdx";
import dynamic from "next/dynamic";
import BreakLine from "@/lib/components/elements/BreakLine";
import { CareerData } from "@/lib/types/career";
import Experience from "@/lib/modules/about/Experience";

const AboutMdx = dynamic(() => import("@/lib/constants/about.mdx"));
const GoalsMdx = dynamic(() => import("@/lib/constants/goals.mdx"));

interface StoryProps {
  yearsOfExperience: number;
  careers: CareerData[];
}

export default function Story({
  yearsOfExperience,
  careers,
}: Readonly<StoryProps>) {
  const componentAboutMdx = useMDXComponents({
    Experience: () => <strong>{yearsOfExperience} years of experience</strong>,
  });

  return (
    <section className="space-y-4 leading-[1.8] md:leading-loose">
      <div className="prose max-w-none dark:prose-invert text-justify">
        <AboutMdx components={componentAboutMdx} />
      </div>
      <BreakLine className="my-8" />
      <div className="prose max-w-none dark:prose-invert text-justify grid gap-4">
        <h2>💼 Experience</h2>
        {careers.map((career: CareerData) => (
          <Experience key={career.id} {...career} />
        ))}
      </div>
      <BreakLine className="my-8" />
      <div className="prose max-w-none dark:prose-invert text-justify">
        <GoalsMdx />
      </div>
    </section>
  );
}
