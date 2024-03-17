import React from "react";
import { Tooltip } from "@nextui-org/react";
import Image from "@/lib/components/elements/Image";
import { ProjectData } from "@/lib/types/projects";
import { getIcons } from "@/lib/constants/icons";
import { getImages } from "@/lib/constants/strapi";
import ProjectLink from "@/lib/modules/projects/ProjectLink";

export default function ProjectDetail({ attributes }: Readonly<ProjectData>) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[15px] mb-1 text-neutral-700 dark:text-neutral-300">
            Tech Stack :
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {attributes.stacks?.map((stack) => (
              <Tooltip key={stack} content={stack}>
                {getIcons(stack, 24)}
              </Tooltip>
            ))}
          </div>
        </div>
        <ProjectLink
          title={attributes.title}
          link_demo={attributes.link_demo}
          link_repository={attributes.link_repository}
        />
      </div>
      <Image
        src={getImages(attributes.images.data[0].attributes.url)}
        width={800}
        height={400}
        alt={attributes.title}
        className="hover:scale-105"
      />
    </div>
  );
}
