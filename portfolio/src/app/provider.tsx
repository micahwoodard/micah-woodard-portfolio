import * as React from "react";
import { Loader, MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";

import { MainErrorFallback } from "@/components/errors/main";
import { useThemeStore } from "@/stores/themeStore";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

  const { colorScheme } = useThemeStore();

  // Set root to have "dark" class for tailwind dark mode theming 
  React.useEffect(() => {
    const root = document.documentElement;
    if (colorScheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [colorScheme]);

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Loader color="green" size="xl" />
        </div>
      }
    >
      <MantineProvider
        theme={{
          fontFamily: "DM Sans",
      }}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
            {children}
        </ErrorBoundary>
      </MantineProvider>
    </React.Suspense>
  );
};