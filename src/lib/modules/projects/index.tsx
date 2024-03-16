import React, { Suspense } from "react";
import { motion } from "framer-motion";
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
          // <motion.div
          //   key={project.id}
          //   initial={{ opacity: 0, scale: 0.8 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   transition={{ duration: 0.3, delay: project.id * 0.1 }}
          // >
          <ProjectCard key={project.id} {...project} />
          // </motion.div>
        ))}
      </div>
    </Suspense>
  );
}
