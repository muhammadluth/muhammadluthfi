import React from "react";
import Contributions from "@/lib/modules/dashboard/Contributions";
import { ContributionsData } from "@/lib/types/dashboard";

interface DashboardProps {
  contributions: ContributionsData[];
}

export default function Dashboard({ contributions }: Readonly<DashboardProps>) {
  return (
    <div className="space-y-10">
      {contributions?.map((item) => (
        <Contributions
          key={item.id}
          account={item.account}
          data={item.contribution.data}
        />
      ))}
    </div>
  );
}
