import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContentHome } from "./components/ContentHome";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentHome />} />
      </Routes>
    </BrowserRouter>
  );
};
