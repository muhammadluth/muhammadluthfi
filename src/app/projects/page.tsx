import React from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/lib/components/elements/Container"));
const Projects = dynamic(() => import("@/lib/modules/projects"));

export default function ProjectsPage() {
  return (
    <Container data-aos="fade-left">
      <Projects />
    </Container>
  );
}
