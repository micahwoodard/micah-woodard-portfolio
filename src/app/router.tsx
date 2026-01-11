import { Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { ResumePage } from "./routes/ResumePage";
import { AboutPage } from "./routes/AboutPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/micah-woodard-portfolio/" element={<HomePage />} />
      <Route path="/micah-woodard-portfolio/resume" element={<ResumePage />} />
      <Route path="/micah-woodard-portfolio/about" element={<AboutPage />} />
    </Routes>
  );
};
