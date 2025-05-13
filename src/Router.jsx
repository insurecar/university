import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Events,
  Alumni,
  Publications,
  Team,
  Partnership,
  Partners,
  ForMedia,
} from "./components/pages";
import { App, Home } from "./components";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/for-media" element={<ForMedia />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
