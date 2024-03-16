import React from "react";
import { HiOutlineBriefcase as HiOutlineBriefcaseIcon } from "react-icons/hi";
import SectionHeading from "@/lib/components/elements/SectionHeading";
import SectionSubHeading from "@/lib/components/elements/SectionSubHeading";
import { CareerItemsData } from "@/lib/constants/career";
import CareerCard from "@/lib/modules/home/CareerCard";

export default function Career() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Career"
          icon={<HiOutlineBriefcaseIcon className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My professional career journey.
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CareerItemsData?.map((career) => (
          <CareerCard key={career.id} {...career} />
        ))}
      </div>
    </section>
  );
}
