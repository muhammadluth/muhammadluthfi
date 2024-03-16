import React from "react";

interface ProjectsDetailProps {
  params: { id: string };
}

export default function ProjectsDetailPage({
  params,
}: Readonly<ProjectsDetailProps>) {
  return <div>My Post: {params.id}</div>;
}
