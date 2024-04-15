import React, { JSX } from "react";
import {
  SiTailwindcss as SiTailwindcssIcon,
  SiTypescript as SiTypescriptIcon,
  SiNextdotjs as SiNextdotjsIcon,
  SiStrapi as SiStrapiIcon,
} from "react-icons/si";

export const getIcons = (name: string, size: number) => {
  const icons = new Map<string, JSX.Element>();
  icons.set("NextJS", <SiNextdotjsIcon size={size} />);
  icons.set(
    "TailwindCSS",
    <SiTailwindcssIcon size={size} className="text-[#38bdf8]" />
  );
  icons.set(
    "TypeScript",
    <SiTypescriptIcon size={size} className="text-[#3178c6]" />
  );
  icons.set("Strapi", <SiStrapiIcon size={size} className="text-[#4743ff]" />);
  return icons.get(name);
};
