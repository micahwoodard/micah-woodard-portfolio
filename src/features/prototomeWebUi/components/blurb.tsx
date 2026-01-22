import prototomeUiImage from "../assests/prototome_home_page_with_brain_slice_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const PrototomeWebUiBlurb = () => {
  return (
    <ProjectCard
      imageSrc={prototomeUiImage}
      imageAlt="Prototome UI"
      title="Prototome Web UI"
      href="/prototome_web_ui"
      repoUrl="https://github.com/AllenNeuralDynamics/prototome-web-ui"
      overlayContent={
        <div>
          A React web application for controlling the Prototome microscope
          system. It was built to enable remote, low-latency monitoring and
          control of the instrument during multiday imaging sessions to ensure
          sample quality. The system uses WebRTC for high-performance video
          streaming and a configuration-driven backend API to expose microscope
          hardware controls. I designed and implemented the frontend, focusing
          on responsiveness and configurability.
        </div>
      }
    />
  );
};
