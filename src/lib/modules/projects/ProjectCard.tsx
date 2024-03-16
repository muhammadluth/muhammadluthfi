import React from "react";
import Link from "next/link";
import { Card, Tooltip } from "@nextui-org/react";
import { HiOutlineArrowSmRight as HiOutlineArrowSmRightIcon } from "react-icons/hi";
import Image from "@/lib/components/elements/Image";
import { getImages } from "@/lib/constants/strapi";
import { ProjectData } from "@/lib/types/projects";
import { getIcons } from "@/lib/constants/icons";

export default function ProjectCard({ id, attributes }: ProjectData) {
  return (
    <Link href={`/projects/${id}`}>
      <Card className="group relative border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%] shadow-sm">
        <div className="relative">
          {attributes.images.data && (
            <Image
              src={getImages(attributes.images.data[0].attributes.url)}
              width={400}
              height={200}
              alt={attributes.title}
              className="rounded-t-xl h-48 object-cover object-left"
            />
          )}
          <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium">
            <span>View Project</span>
            <HiOutlineArrowSmRightIcon size={20} />
          </div>
        </div>
        <div className="p-5 space-y-2">
          <div className="flex justify-between">
            <div className="text-lg font-sora cursor-pointer hover:underline text-neutral-700 dark:text-neutral-300 lg:group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300">
              {attributes.title}
            </div>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">
            {attributes.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {attributes.stacks?.map((stack) => (
              <Tooltip key={stack} content={stack}>
                {getIcons(stack, 24)}
              </Tooltip>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
