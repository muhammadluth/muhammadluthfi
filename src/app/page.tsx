import React from "react";
import dynamic from "next/dynamic";
import Container from "@/lib/components/elements/Container";

const Home = dynamic(() => import("@/lib/modules/home"));

export default function RootPage() {
  return (
    <Container data-aos="fade-left">
      <Home />
    </Container>
  );
}
