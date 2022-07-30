import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContentHome } from "./components/ContentHome";
import { ContentDetails } from "./components/ContentDetails";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentHome />} />
        <Route path="/details/:nameCountry" element={<ContentDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
