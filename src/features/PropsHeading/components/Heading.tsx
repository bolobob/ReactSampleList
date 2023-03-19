import { ReactNode } from "react";
import clsx from "clsx";

export default function Heading({
  level,
  children,
}: {
  level: number;
  children: ReactNode;
}) {
  switch (level) {
    case 1:
      return <h1 className={clsx("text-2xl")}>{children}</h1>;
    case 2:
      return <h2 className={clsx("text-xl")}>{children}</h2>;
    case 3:
      return <h3 className={clsx("text-lg")}>{children}</h3>;
    case 4:
      return <h4 className={clsx("text-base")}>{children}</h4>;
    case 5:
      return <h5 className={clsx("text-sm")}>{children}</h5>;
    case 6:
      return <h6 className={clsx("text-xs")}>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
