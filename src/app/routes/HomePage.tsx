import { Stack } from "@mantine/core";

import { PrototomeWebUiBlurb } from "../../features/prototomeWebUi";
import { BskiBlurb } from "../../features/bski";
import { BrainSlosherBlurb } from "@/features/brainSlosher";
import { DynamicForagingBlurb } from "@/features/dynamicForaging";
import { ExaSpimUi } from "@/features/exaSpimUi";

export const HomePage = () => {

  return (
    <div style={{ position: "relative" }}>
      <Stack style={{ paddingLeft: 50, paddingRight: 50 }}>
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
