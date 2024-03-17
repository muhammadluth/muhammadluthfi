import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Container from "@/lib/components/elements/Container";
import PageHeading from "@/lib/components/elements/PageHeading";
import { getProjectsByID } from "@/lib/services/strapi";
import Loading from "@/lib/components/elements/Loading";
import BackButton from "@/lib/components/elements/BackButton";

const ProjectDetail = dynamic(
  () => import("@/lib/modules/projects/ProjectDetail")
);

interface ProjectsDetailPage {
  params: {
    id: number;
  };
}

export default async function ProjectsDetailPage({
  params,
}: Readonly<ProjectsDetailPage>) {
  const project = await getProjectsByID(params.id);

  const PAGE_TITLE = project.data.attributes.title;
  const PAGE_DESCRIPTION = project.data.attributes.description;

  return (
    <Container data-aos="fade-up">
      <BackButton pathname="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Suspense fallback={<Loading />}>
        <ProjectDetail {...project.data} />
      </Suspense>
    </Container>
  );
}
