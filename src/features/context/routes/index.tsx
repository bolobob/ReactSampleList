import { Navigate, Route, Routes } from "react-router-dom";
import { Headings } from "./Headings";

export const ContextRoutes = () => {
  return (
    <Routes>
      <Route path="props_headings" element={<Headings />} />
      <Route path="*" element={<Navigate to="props_headings" />} />
    </Routes>
  );
};
