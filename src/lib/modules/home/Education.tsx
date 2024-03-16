import React from "react";
import { TbSchool as TbSchoolIcon } from "react-icons/tb";
import SectionHeading from "@/lib/components/elements/SectionHeading";
import SectionSubHeading from "@/lib/components/elements/SectionSubHeading";
import { EducationItemsData } from "@/lib/constants/education";
import EducationCard from "@/lib/modules/home/EducationCard";

export default function Education() {
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

      <div className="grid md:grid-cols-1 gap-4">
        {EducationItemsData?.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
