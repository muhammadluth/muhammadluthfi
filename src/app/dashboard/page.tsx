import React from "react";
import dynamic from "next/dynamic";
import { getGitHubUser } from "@/lib/services/github";
import Container from "@/lib/components/elements/Container";
import PageHeading from "@/lib/components/elements/PageHeading";
import { ContributionsData } from "@/lib/types/dashboard";

const Dashboard = dynamic(() => import("@/lib/modules/dashboard"));

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

export default async function DashboardPage() {
  const githubUserPersonal = await getGitHubUser(1);

  const contributionsData: ContributionsData[] = [
    {
      id: 1,
      account: githubUserPersonal.account,
      contribution: githubUserPersonal.contribution,
    },
  ];
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Dashboard contributions={contributionsData} />
    </Container>
  );
}
