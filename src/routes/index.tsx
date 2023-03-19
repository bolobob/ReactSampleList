import { useRoutes } from "react-router-dom";
import HeadingList from "../features/PropsHeading/components/HeadingList";

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/props_heading", element: <HeadingList /> },
  ]);

  return <>{element}</>;
};
