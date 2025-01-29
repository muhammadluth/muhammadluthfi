import React, { Suspense } from "react";
import dayjs from "dayjs";
import Loading from "@/lib/components/elements/Loading";
import Story from "@/lib/modules/about/Story";
import { getCareers } from "@/lib/services/strapi";
import { CareerData } from "@/lib/types/career";

export default async function About() {
  const yearsOfExperience = Math.ceil(
    dayjs().diff("2019-12-20", "years", true)
  );
  const careers = await getCareers();
  return (
    <Suspense fallback={<Loading />}>
      {careers.status === 200 && (
        <Story
          yearsOfExperience={yearsOfExperience}
          careers={careers.data as CareerData[]}
        />
      )}
    </Suspense>
  );
}
