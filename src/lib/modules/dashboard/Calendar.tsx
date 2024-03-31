"use client";
import React from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    weeks: {
      firstDay: string;
      contributionDays: Contribution[];
    }[];
    months: Month[];
    colors: string[];
  };
}

export default function Calendar({ data }: Readonly<CalendarProps>) {
  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="flex flex-col">
        <ul className="flex justify-start gap-[3px] text-xs">
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? "invisible" : ""}`)}
              style={{ minWidth: 14.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-start gap-[3px]">
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const isExistsContribution = contribution.contributionCount > 0;
                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;
                const tooltipText = `${
                  contribution.contributionCount
                } contributions on ${dayjs(contribution.date).format(
                  "DD MMMM YYYY"
                )}`;
                return (
                  <Popover key={contribution.date} placement="top" showArrow>
                    <PopoverTrigger>
                      <motion.span
                        initial="initial"
                        animate="animate"
                        variants={{
                          initial: { opacity: 0, translateY: -20 },
                          animate: {
                            opacity: 1,
                            translateY: 0,
                            transition: { delay: getRandomDelayAnimate },
                          },
                        }}
                        className={`my-[2px] block h-[12px] w-[12px] rounded-sm bg-foreground-200`}
                        style={{
                          backgroundColor: isExistsContribution
                            ? contribution.color
                            : "",
                        }}
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-tiny font-bold">{tooltipText}</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Less</span>
          <ul className="flex gap-1">
            <motion.li className="h-[10px] w-[10px] rounded-sm bg-foreground-200" />
            {contributionColors.map((item, index) => (
              <motion.li
                key={item}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className="h-[10px] w-[10px] rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
