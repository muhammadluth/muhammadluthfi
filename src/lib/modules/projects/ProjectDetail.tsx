"use client";
import React, { useEffect, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Tooltip } from "@nextui-org/react";
import { ProjectData } from "@/lib/types/projects";
import { getIcons } from "@/lib/constants/icons";
import { getImage } from "@/lib/constants/strapi";
import Image from "@/lib/components/elements/Image";
import ProjectLink from "@/lib/modules/projects/ProjectLink";

export default function ProjectDetail({
  title,
  overview,
  images,
  stacks,
  link_demo,
  link_repository,
}: Readonly<ProjectData>) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    const serializeContent = async () => {
      if (overview) {
        const serialized = await serialize(overview);
        setMdxSource(serialized);
      }
    };
    serializeContent();
  }, [overview]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[15px] mb-1">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack) => (
              <Tooltip key={stack} content={stack}>
                {getIcons(stack, 24)}
              </Tooltip>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo}
          link_repository={link_repository}
        />
      </div>

      <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-gray-700">
        {images?.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="rounded-xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <Image
                  src={getImage(image.formats.large.url)}
                  width={1000}
                  height={600}
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="prose md:prose-md dark:prose-invert">
        {mdxSource ? <MDXRemote {...mdxSource} /> : <p>Loading Content...</p>}
      </div>
    </div>
  );
}
