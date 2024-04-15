import React from "react";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/react";
import { EducationData } from "@/lib/types/education";
import { getImage } from "@/lib/constants/strapi";
import Image from "@/lib/components/elements/Image";

export default function EducationCard({
  attributes: {
    school,
    school_logo,
    school_website,
    degree,
    major,
    start_period,
    end_period,
  },
}: Readonly<EducationData>) {
  return (
    <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-900 shadow-sm">
      <CardBody>
        <div className="grid grid-cols-12 gap-2 items-center justify-center">
          <div className="relative col-span-4 sm:col-span-1">
            <Image
              src={getImage(school_logo.data.attributes.url)}
              width={55}
              height={55}
              loading="lazy"
              alt={school}
              className="h-auto w-auto"
            />
          </div>
          <div className="flex flex-col col-span-8 sm:col-span-11 ml-5">
            <div className="flex flex-col gap-2">
              <Link
                href={school_website}
                target="_blank"
                data-umami-event={`Click Education School Name: ${school}`}
              >
                <span className="hover:underline cursor-pointer">{school}</span>
              </Link>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                  <span>{degree}</span>
                  <span className="hidden md:flex text-neutral-300 dark:text-neutral-700">
                    •
                  </span>
                  <span>{major}</span>
                </div>
                <div className="flex flex-col md:text-[13px]">
                  <div className="flex gap-1">
                    <span>{start_period}</span>
                    <span className="mx-1">-</span>
                    <span>{end_period ?? "Present"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
