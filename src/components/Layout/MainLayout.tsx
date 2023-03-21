import clsx from "clsx";
import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

/**
 * React Router に渡すパスの取得
 * 開発と本番で異なるので出し分ける
 * @param path
 */
const getTo = (path: string) => {
  if (import.meta.env.VITE_GITHUB_PAGES === "false") {
    return path;
  }

  return `/react-sample-list${path}`;
};

const SidebarItem = ({ to, text }: { to: string; text: string }) => {
  const matchPath = useMatch({ path: location.pathname });
  return (
    <>
      {matchPath?.pathname.match(new RegExp(to)) ? (
        <>{text}</>
      ) : (
        <Link
          className={clsx(["text-blue-500", "hover:underline"])}
          to={getTo(to)}
        >
          {text}
        </Link>
      )}
    </>
  );
};

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
          <ul className={clsx(["list-disc", "list-inside"])}>
            <li className={clsx(["px-5"])}>
              <SidebarItem
                to="/context/props_headings"
                text="useContextを使ってみた"
              />
            </li>
            <li className={clsx(["px-5"])}>
              <SidebarItem
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
