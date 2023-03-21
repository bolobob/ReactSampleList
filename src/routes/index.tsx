import { Outlet, useRoutes } from "react-router-dom";
import { ContextRoutes } from "../features/context/routes";
import { MainLayout } from "../components/Layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
export const AppRoutes = () => {
  const element = useRoutes([
    {
      path:
        import.meta.env.VITE_GITHUB_PAGES === "true"
          ? "/react-sample-list"
          : "/",
      element: <App />,
      children: [{ path: "context/*", element: <ContextRoutes /> }],
    },
  ]);

  return <>{element}</>;
};
