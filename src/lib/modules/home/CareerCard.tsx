import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { Card, CardBody } from "@nextui-org/react";
import { CareerData } from "@/lib/types/career";
import Image from "@/lib/components/elements/Image";
import { getImage } from "@/lib/constants/strapi";

export default function CareerCard({
  position,
  company,
  company_logo,
  company_website,
  company_location,
  employee_status,
  start_period,
  end_period,
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
    <Card className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 border border-foreground-800 shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:border-foreground-300">
      <CardBody className="w-full">
        <div className="grid sm:grid-cols-12 gap-4 items-center text-center sm:text-left">
          <div className="relative col-span-1 sm:col-span-2 h-16 w-16 rounded-full overflow-hidden shadow-md flex items-center justify-center mx-auto sm:mx-0">
            <Image
              src={getImage(company_logo.url)}
              alt={company}
              width={64}
              height={64}
              className="object-cover rounded-full w-full h-full transition-all duration-300 group-hover:scale-105"
              priority
            />
          </div>

          <div className="flex flex-col col-span-1 sm:col-span-10 items-center sm:items-start">
            <div className="flex flex-col gap-2">
              <Link
                href={company_website}
                target="_blank"
                data-umami-event={`Click Career Company Name: ${company}`}
              >
                <span className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  {company}
                </span>
              </Link>
              <div className="text-sm text-foreground-300 space-y-2">
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="font-medium text-foreground-500">
                    {position}
                  </span>
                  <span className="hidden md:inline">•</span>
                  <span className="text-foreground-500">{employee_status}</span>
                </div>
                <div className="text-foreground-500">{company_location}</div>
                <div className="text-xs text-foreground-500">
                  {start_period} - {end_period ?? "Present"} ({durationText})
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
