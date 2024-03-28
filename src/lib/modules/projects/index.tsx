import React, { Suspense } from "react";
import { getProjects } from "@/lib/services/strapi";
import { ProjectData } from "@/lib/types/projects";
import ProjectCard from "@/lib/modules/projects/ProjectCard";
import Loading from "@/lib/components/elements/Loading";

export default async function Projects() {
  const projects = await getProjects(10, 1);
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid sm:grid-cols-2 gap-5 pt-2 px-1">
        {projects.data.map((project: ProjectData) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Suspense>
  );
}
