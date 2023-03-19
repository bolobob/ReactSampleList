import { Navigate, Route, Routes } from "react-router-dom";
import { Headings } from "./Headings";
import { MyProfile } from "./MyProfile";

export const ContextRoutes = () => {
  return (
    <Routes>
      <Route path="props_headings" element={<Headings />} />
      <Route path="my_profile" element={<MyProfile />} />
      <Route path="*" element={<Navigate to="props_headings" />} />
    </Routes>
  );
};
