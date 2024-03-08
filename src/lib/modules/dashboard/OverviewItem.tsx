import React from "react";
import { Card } from "@nextui-org/react";
import AnimateCounter from "@/lib/components/elements/AnimateCounter";

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

export default function OverviewItem({
  label,
  value,
  unit = "",
}: Readonly<OverviewItemProps>) {
  return (
    <Card className="flex flex-col self-center rounded-xl py-3 px-4 border border-foreground-200 shadow-sm">
      <span className="text-sm">{label}</span>
      <div>
        <AnimateCounter
          className="text-xl lg:text-2xl text-green-600 font-bold"
          total={value}
        />
        {unit && <span className="text-sm ml-1">{unit}</span>}
      </div>
    </Card>
  );
}
