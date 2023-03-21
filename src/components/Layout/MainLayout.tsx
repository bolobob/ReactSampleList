import clsx from "clsx";
import { ReactNode } from "react";
import { Link, PathMatch, useMatch } from "react-router-dom";

const SidebarItem = ({
  matchPath,
  to,
  text,
}: {
  matchPath: ReturnType<typeof useMatch>;
  to: string;
  text: string;
}) => (
  <>
    {matchPath?.pathname.match(new RegExp(to)) ? (
      <>{text}</>
    ) : (
      <Link className={clsx(["text-blue-500", "hover:underline"])} to={to}>
        {text}
      </Link>
    )}
  </>
);

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
              <SidebarItem
                matchPath={matchPath}
                to="/context/props_headings"
                text="useContextを使ってみた"
              />
            </li>
            <li className={clsx(["px-5"])}>
              <SidebarItem
                matchPath={matchPath}
                to="/context/my_profile"
                text="useContextを使ってみた（関係ないコンポーネントが混ざってる）"
              />
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
