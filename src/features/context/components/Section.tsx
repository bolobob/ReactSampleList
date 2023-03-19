import { ReactNode, useContext } from "react";
import clsx from "clsx";
import { LevelContext } from "../contexts/LevelContext";

export default function Section({
  children,
  isFancy,
}: {
  children: ReactNode;
  isFancy?: boolean;
}) {
  const level = useContext(LevelContext);
  return (
    <section className={clsx({ section: true, fancy: isFancy })}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
