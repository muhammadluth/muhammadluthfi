import React, { Suspense } from "react";
import Loading from "@/lib/components/elements/Loading";
import Contributions from "@/lib/modules/dashboard/Contributions";
import { ContributionsData } from "@/lib/types/dashboard";

interface DashboardProps {
  contributions: ContributionsData[];
}

export default function Dashboard({ contributions }: Readonly<DashboardProps>) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-10">
        {contributions?.map((item) => (
          <Contributions
            key={item.id}
            account={item.account}
            data={item.contribution.data}
          />
        ))}
      </div>
    </Suspense>
  );
}
