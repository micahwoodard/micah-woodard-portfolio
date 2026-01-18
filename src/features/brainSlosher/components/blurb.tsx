import BrainSlosherUI from "../assests/brain_slosher_ui_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BrainSlosherBlurb = () => {
  return (
    <ProjectCard
      imageSrc={BrainSlosherUI}
      imageAlt="Brain Slosher UI"
      title="Brain Slosher Software"
      href="/micah-woodard-portfolio/brain_slosher"
      repoUrl="https://github.com/AllenNeuralDynamics/brainslosher-web-ui"
      overlayContent={
        <div>
          Python control software for a fluidics system used to wash stained
          tissue samples, with a React web app for protocol configuration and
          real-time monitoring. It was built to reduce repetitive wash steps,
          freeing up research assistants’ time and minimizing human error. I
          designed and implemented both the control software and frontend,
          focusing on reusability and user-friendliness.
        </div>
      }
    />
  );
};
