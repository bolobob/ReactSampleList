import { ReactNode } from "react";
import clsx from "clsx";
import { LevelContext } from "../contexts/LevelContext";

export default function Section({
  level,
  children,
}: {
  level: number;
  children: ReactNode;
}) {
  return (
    <section className={clsx("section")}>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
