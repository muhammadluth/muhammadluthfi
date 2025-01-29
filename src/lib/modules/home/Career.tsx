import React, { Suspense } from "react";
import { HiOutlineBriefcase as HiOutlineBriefcaseIcon } from "react-icons/hi";
import { getCareers } from "@/lib/services/strapi";
import SectionHeading from "@/lib/components/elements/SectionHeading";
import SectionSubHeading from "@/lib/components/elements/SectionSubHeading";
import CareerCard from "@/lib/modules/home/CareerCard";
import Loading from "@/lib/components/elements/Loading";
import { CareerData } from "@/lib/types/career";

export default async function Career() {
  const careers = await getCareers();
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Career"
          icon={<HiOutlineBriefcaseIcon className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="text-foreground-500">My professional career journey.</p>
        </SectionSubHeading>
      </div>

      <Suspense fallback={<Loading className="h-[10vh]" />}>
        <div className="grid md:grid-cols-1 gap-4">
          {careers.status === 200 &&
            careers.data?.map((career: CareerData) => (
              <CareerCard key={career.id} {...career} />
            ))}
        </div>
      </Suspense>
    </section>
  );
}
