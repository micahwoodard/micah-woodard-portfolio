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
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/prototome_web_ui"
        element={<PrototomeWebUiDetailed />}
      />
      <Route path="/BSKI" element={<BskiDetailed />} />
      <Route
        path="/brain_slosher"
        element={<BrainSlosherDetailed />}
      />
      <Route
        path="/dynamic_foraging"
        element={<DynamicForagingDetailed />}
      />
      <Route
        path="/exa_spim_ui"
        element={<ExaSpimDetailed />}
      />
    </Routes>
  );
};
