import { Route, Routes } from "react-router-dom";
import { List } from "../components/List";

export const TransitionRoutes = () => {
  return (
    <Routes>
      <Route path="list" element={<List />} />
    </Routes>
  );
};
