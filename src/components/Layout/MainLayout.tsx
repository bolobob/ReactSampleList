import clsx from "clsx";
import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const matchPath = useMatch({ path: location.pathname });

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
          <ul className={clsx(["list-disc", "list-inside"])}>
            <li className={clsx(["px-5"])}>
              {matchPath?.pathname.match(/\/context\/props_headings/) ? (
                <>コンテキスト</>
              ) : (
                <Link
                  className={clsx(["text-blue-500", "hover:underline"])}
                  to="/context/props_headings"
                >
                  コンテキスト
                </Link>
              )}
            </li>
            <li className={clsx(["px-5"])}>
              {matchPath?.pathname.match(/\/context\/my_profile/) ? (
                <>コンテキスト（関係ないコンポーネントが混ざってる）</>
              ) : (
                <Link
                  className={clsx(["text-blue-500", "hover:underline"])}
                  to="/context/my_profile"
                >
                  コンテキスト（関係ないコンポーネントが混ざってる）
                </Link>
              )}
            </li>
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
