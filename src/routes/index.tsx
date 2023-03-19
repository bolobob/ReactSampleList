import { Outlet, useRoutes } from "react-router-dom";
import { ContextRoutes } from "../features/context/routes";

const App = () => {
  return <Outlet />;
};
export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [{ path: "/context/*", element: <ContextRoutes /> }],
    },
  ]);

  return <>{element}</>;
};
