import React from "react";
import dynamic from "next/dynamic";
import Container from "@/lib/components/elements/Container";
import PageHeading from "@/lib/components/elements/PageHeading";

const About = dynamic(() => import("@/lib/modules/about"));

const PAGE_TITLE = "About";
const PAGE_DESCRIPTION =
  "A short story of me, not important but seem better than nothing.";

export default async function AboutPage() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <About />
    </Container>
  );
}
