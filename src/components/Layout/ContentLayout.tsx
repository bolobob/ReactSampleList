import { ReactNode } from "react";
import clsx from "clsx";

export const ContentLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className={clsx("container")}>
      <div>
        <h1 className={clsx("text-3xl")}>{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};
