import { Route, Routes } from "react-router-dom";
import { AutocompleteGroupBy } from "./components/AutocompleteGroupBy";

export const AutocompleteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AutocompleteGroupBy />} />
    </Routes>
  );
};
