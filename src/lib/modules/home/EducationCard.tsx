import React from "react";
import Link from "next/link";
import { BsBuildings as BsBuildingsIcon } from "react-icons/bs";
import { Card, CardBody } from "@nextui-org/react";
import { EducationProps } from "@/lib/types/education";
import Image from "@/lib/components/elements/Image";

export default function EducationCard({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  school_website,
}: Readonly<EducationProps>) {
  return (
    <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-900 shadow-sm">
      <CardBody>
        <div className="grid grid-cols-12 gap-2 items-center justify-center">
          <div className="relative col-span-4 sm:col-span-1">
            {logo ? (
              <Image src={logo} width={55} height={55} alt={school} />
            ) : (
              <BsBuildingsIcon size={50} />
            )}
          </div>
          <div className="flex flex-col col-span-8 sm:col-span-11 ml-5">
            <div className="flex flex-col gap-2">
              <Link
                href={school_website}
                target="_blank"
                data-umami-event={`Click Career Company Name: ${school}`}
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
                    <span>{start_year}</span> -{" "}
                    <span>{end_year ?? "Present"}</span>
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
