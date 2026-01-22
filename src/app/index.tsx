import { AppProvider } from "./provider.tsx";
import { HashRouter  } from "react-router-dom";
import { AppRouter } from "./router.tsx";
import MainLayout from "../components/layouts/MainLayouts.tsx";

const App = () => {
  return (
    <AppProvider>
      <HashRouter >
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </HashRouter >
    </AppProvider>
  );
};

export default App;
