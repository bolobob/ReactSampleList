import { useRoutes } from "react-router-dom";
import PropsHeading from "../features/PropsHeading";

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/props_heading", element: <PropsHeading /> },
  ]);

  return <>{element}</>;
};
