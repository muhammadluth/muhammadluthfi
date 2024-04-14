import React, { Suspense } from "react";
import { TbSchool as TbSchoolIcon } from "react-icons/tb";
import { getEducations } from "@/lib/services/strapi";
import SectionHeading from "@/lib/components/elements/SectionHeading";
import SectionSubHeading from "@/lib/components/elements/SectionSubHeading";
import EducationCard from "@/lib/modules/home/EducationCard";
import Loading from "@/lib/components/elements/Loading";
import { EducationData } from "@/lib/types/education";

export default async function Education() {
  const educations = await getEducations();
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Education"
          icon={<TbSchoolIcon size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My educational journey.</p>
        </SectionSubHeading>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="grid md:grid-cols-1 gap-4">
          {educations.status === 200 &&
            educations.data?.map((education: EducationData) => (
              <EducationCard key={education.id} {...education} />
            ))}
        </div>
      </Suspense>
    </section>
  );
}
