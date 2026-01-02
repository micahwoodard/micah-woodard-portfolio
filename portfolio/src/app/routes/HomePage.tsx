import { Group, Stack } from "@mantine/core";
import "@mantine/core/styles.css";
import { PrototomeWebUiBlurb } from "../../features/prototomeWebUi"
import { BskiBlurb } from "../../features/bski"
import { BrainSlosherBlurb } from "@/features/brainSlosher";
import { DynamicForagingBlurb } from "@/features/dynamicForaging"

export const HomePage = () => {
  return (
    <Stack style={{paddingRight:50, paddingLeft:50}}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        padding: '1.5rem'
      }}
    >
      <PrototomeWebUiBlurb/>
      <BskiBlurb/>
      <BrainSlosherBlurb/>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        padding: '1.5rem'
      }}
    >
      <DynamicForagingBlurb/>
    </div>
    </Stack>
  );
};