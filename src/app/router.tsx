import { Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { ResumePage } from "./routes/ResumePage";
import { AboutPage } from "./routes/AboutPage";
import { PrototomeWebUiDetailed } from "@/features/prototomeWebUi";
import { BskiDetailed } from "@/features/bski";
import { BrainSlosherDetailed } from "@/features/brainSlosher";
import { DynamicForagingDetailed } from "@/features/dynamicForaging";
import { ExaSpimDetailed } from "@/features/exaSpimUi";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/micah-woodard-portfolio/" element={<HomePage />} />
      <Route path="/micah-woodard-portfolio/resume" element={<ResumePage />} />
      <Route path="/micah-woodard-portfolio/about" element={<AboutPage />} />
      <Route
        path="/micah-woodard-portfolio/prototome_web_ui"
        element={<PrototomeWebUiDetailed />}
      />
      <Route path="/micah-woodard-portfolio/BSKI" element={<BskiDetailed />} />
      <Route
        path="/micah-woodard-portfolio/brain_slosher"
        element={<BrainSlosherDetailed />}
      />
      <Route
        path="/micah-woodard-portfolio/dynamic_foraging"
        element={<DynamicForagingDetailed />}
      />
      <Route
        path="/micah-woodard-portfolio/exa_spim"
        element={<ExaSpimDetailed />}
      />
    </Routes>
  );
};
