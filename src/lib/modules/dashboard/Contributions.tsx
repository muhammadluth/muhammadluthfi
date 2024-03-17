import React from "react";
import Link from "next/link";
import { IoLogoGithub as IoLogoGithubIcon } from "react-icons/io";
import SectionHeading from "@/lib/components/elements/SectionHeading";
import SectionSubHeading from "@/lib/components/elements/SectionSubHeading";
import { GitHubConfigData } from "@/lib/types/github";
import Overview from "@/lib/modules/dashboard/Overview";
import Calendar from "@/lib/modules/dashboard/Calendar";

interface ContributionsProps {
  account: GitHubConfigData;
  data: any;
}

export default function Contributions({
  account,
  data,
}: Readonly<ContributionsProps>) {
  const { username } = account;
  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading
        title="Contributions"
        icon={<IoLogoGithubIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <p>My contributions from last year on github.</p>
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          passHref
          className="text-sm font-code"
        >
          @{username}
        </Link>
      </SectionSubHeading>

      {!data && <div>No Data</div>}

      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
}
