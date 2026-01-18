import { AppProvider } from "./provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router.tsx";
import MainLayout from "../components/layouts/MainLayouts.tsx";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
