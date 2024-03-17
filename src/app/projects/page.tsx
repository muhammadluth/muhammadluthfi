import React from "react";
import dynamic from "next/dynamic";
import Container from "@/lib/components/elements/Container";
import PageHeading from "@/lib/components/elements/PageHeading";

const Projects = dynamic(() => import("@/lib/modules/projects"));

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION =
  "Several projects that I have worked on, both private and open source.";

export default function ProjectsPage() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Projects />
    </Container>
  );
}
