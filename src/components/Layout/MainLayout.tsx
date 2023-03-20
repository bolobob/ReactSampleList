import clsx from "clsx";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={clsx([
        "flex",
        "flex-wrap",
        "items-stretch",
        "w-screen",
        "h-screen",
      ])}
    >
      <div className={clsx(["basis-80", "grow"])}>saidebar</div>
      <div
        className={clsx(["flex", "justify-center", "basis-0", "grow-[999]"])}
      >
        {children}
      </div>
    </div>
  );
};
