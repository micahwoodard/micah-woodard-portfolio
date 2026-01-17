import { Stack } from "@mantine/core";

import { PrototomeWebUiBlurb } from "../../features/prototomeWebUi/components/blurb";
import { BskiBlurb } from "../../features/bski/components/blurb";
import { BrainSlosherBlurb } from "../../features/brainSlosher/components/blurb";
import { DynamicForagingBlurb } from "../../features/dynamicForaging/components/blurb";
import { ExaSpimUi } from "../../features/exaSpimUi/components/blurb";

export const HomePage = () => {
  return (
    <div style={{ position: "relative" }}>
      <Stack
        style={{
          paddingLeft: "clamp(1rem, 5%, 50px)",
          paddingRight: "clamp(1rem, 5%, 50px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            padding: "1.5rem",
          }}
        >
          <PrototomeWebUiBlurb />
          <BskiBlurb />
          <BrainSlosherBlurb />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            padding: "1.5rem",
          }}
        >
          <DynamicForagingBlurb />
          <ExaSpimUi />
        </div>
      </Stack>
    </div>
  );
};
