import ExaSpimUiImage from "../assests/exaspim_instrument_control_cropped.jpg";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const ExaSpimUi = () => {
  return (
    <ProjectCard
      imageSrc={ExaSpimUiImage}
      imageAlt="ExaSpim UI"
      title="ExaSpim UI"
      href="/micah-woodard-portfolio/exa_spim"
      repoUrl="https://github.com/AllenNeuralDynamics/view"
      overlayContent={
        <div>
          A PyQt-based application for controlling lightsheet microscopes used
          in experimental imaging workflows. The system abstracts instrument
          control and acquisition logic into configuration-driven views,
          allowing new hardware and protocols to be added without modifying core
          UI code. This design prioritizes flexibility and long-term
          maintainability across vendors and microscope variants. I led the UI
          architecture and integration of hardware-specific widgets.
        </div>
      }
    />
  );
};
