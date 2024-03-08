import { Children, ReactNode } from "react";

interface EachProps {
  of: any[];
  render: (item: any, index: number) => ReactNode;
}

export function Each({ of, render }: Readonly<EachProps>): ReactNode[] {
  return Children.toArray(of.map((item, index) => render(item, index)));
}
