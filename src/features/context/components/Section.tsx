import { ReactNode, useContext } from "react";
import clsx from "clsx";
import { LevelContext } from "../contexts/LevelContext";

export default function Section({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);
  return (
    <section className={clsx("section")}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
