import { Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/micah-woodard-portfolio/"
        element={<HomePage/>}
      />
      {/* <Route path="/stage" element={<StagesPage config={config} />} /> */}
    </Routes>
  );
};