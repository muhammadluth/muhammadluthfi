import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { Card, CardBody } from "@nextui-org/react";
import { CareerData } from "@/lib/types/career";
import Image from "@/lib/components/elements/Image";
import { getImage } from "@/lib/constants/strapi";

export default function CareerCard({
  attributes: {
    position,
    company,
    company_logo,
    company_website,
    company_location,
    start_period,
    end_period,
  },
}: Readonly<CareerData>) {
  const startPeriod = dayjs(start_period);
  const endPeriod = dayjs(end_period);

  const durationYears = endPeriod.isValid()
    ? endPeriod.diff(startPeriod, "years")
    : dayjs().diff(startPeriod, "years");
  const durationMonths = endPeriod.isValid()
    ? endPeriod.diff(startPeriod, "months") % 12
    : dayjs().diff(startPeriod, "months") % 12;

  let durationText = "";
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? "s" : ""} `;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? "s" : ""}`;
  }

  return (
    <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-900 shadow-sm">
      <CardBody>
        <div className="grid grid-cols-12 gap-2 items-center justify-center">
          <div className="relative col-span-3">
            <Image
              src={getImage(company_logo.data.attributes.url)}
              width={55}
              height={55}
              loading="lazy"
              className="h-auto w-auto"
              alt={company}
            />
          </div>
          <div className="flex flex-col col-span-9">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-foreground/90">{position}</h3>
              <div className="flex items-center gap-1 md:gap-2">
                <Link
                  href={company_website}
                  target="_blank"
                  data-umami-event={`Click Career Company Name: ${company}`}
                >
                  <span className="hover:underline cursor-pointer text-md">
                    {company}
                  </span>
                </Link>
                <span className="text-foreground-300">•</span>
                <span>{company_location}</span>
              </div>
              <div className="flex flex-col md:text-[13px]">
                <div className="flex gap-1">
                  <span className="text-foreground-600">
                    {startPeriod.format("MMM YYYY")}
                  </span>
                  <span className="mx-1">-</span>
                  <span className="text-foreground-600">
                    {endPeriod.isValid()
                      ? endPeriod.format("MMM YYYY")
                      : "Present"}
                  </span>
                </div>
                <span className="text-neutral-500 dark:text-neutral-500">
                  ~ {durationText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
