"use client";
import React, { useState, useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FaBuilding, FaUserTie } from "react-icons/fa";
import { CareerData } from "@/lib/types/career";

export default function Experience({
  company,
  position,
  employee_status,
  experience,
}: Readonly<CareerData>) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    const serializeContent = async () => {
      if (experience) {
        const serialized = await serialize(experience);
        setMdxSource(serialized);
      }
    };
    serializeContent();
  }, [experience]);

  return (
    <Card className="group relative flex items-center gap-5 p-3 border border-foreground-800 rounded-xl">
      <CardHeader>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xl font-bold">
            <FaBuilding /> <h3>{company}</h3>
          </div>
          <div className="flex flex-wrap gap-2 items-center text-small font-bold">
            <FaUserTie />
            <span>{position}</span>
            <span className="hidden md:inline">•</span>
            <span>{employee_status}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <h4 className="text-center underline">RESPONSIBILITIES</h4>
        {mdxSource ? <MDXRemote {...mdxSource} /> : <p>Loading Content...</p>}
      </CardBody>
    </Card>
  );
}
