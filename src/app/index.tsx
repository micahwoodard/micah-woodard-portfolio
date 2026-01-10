import { AppProvider } from "./provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AppRouter } from "./router.tsx";
import MainLayout from "../components/layouts/MainLayouts.tsx";
import { SplashScreen } from "../components/ui/SplashScreen";
import { useState } from "react";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashDone = () => setShowSplash(false);

  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
          <AnimatePresence mode="wait">
            {showSplash && (
              <SplashScreen key="splash" onDone={handleSplashDone} />
            )}
          </AnimatePresence>
        </MainLayout>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
