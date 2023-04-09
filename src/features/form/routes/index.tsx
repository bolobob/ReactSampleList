import { Route, Routes } from "react-router-dom";
import { FieldArrayForm } from "../components/FieldArrayForm";

export const FormRoutes = () => {
  return (
    <Routes>
      <Route path="field_array_form" element={<FieldArrayForm />} />
    </Routes>
  );
};
