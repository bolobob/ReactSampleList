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
      <div className={clsx(["basis-80", "grow"])}>
        <nav>
          <ul className={clsx(["list-none", "list-inside"])}>
            <li>コンテキスト</li>
            <li>コンテキスト（関係ないコンポーネントが混ざってる）</li>
          </ul>
        </nav>
      </div>
      <div
        className={clsx(["flex", "justify-center", "basis-0", "grow-[999]"])}
      >
        {children}
      </div>
    </div>
  );
};
