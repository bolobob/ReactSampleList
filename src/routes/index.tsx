import { useRoutes } from "react-router-dom";
import { Headings } from "../features/PropsHeading";

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/props_heading", element: <Headings /> },
  ]);

  return <>{element}</>;
};
