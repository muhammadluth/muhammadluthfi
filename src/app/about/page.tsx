import React from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/lib/components/elements/Container"));
const About = dynamic(() => import("@/lib/modules/about"));

export default function AboutPage() {
  return (
    <Container data-aos="fade-left">
      <About />
    </Container>
  );
}
