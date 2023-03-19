import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({ children }: { children: ReactNode }) {
  return <section className={clsx("section")}>{children}</section>;
}
