import registerWidget from "../assets/filled_register_widget_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BskiBlurb = () => {
  return (
    <ProjectCard
      imageSrc={registerWidget}
      imageAlt="BSKI UI"
      title="Brain Slice Keeper Indexer"
      href="/micah-woodard-portfolio/BSKI"
      repoUrl="https://github.com/AllenNeuralDynamics/BSK-Indexer"
      overlayContent={
        <div>
          A PyQt application for indexing and retrieving barcode–tissue
          associations in the Brain Slice Keeper (BSK) system. It was built to
          minimize error in barcode management in production lab workflows. The
          design is configuration-driven across the database backend and UI
          components. I designed and implemented the UI and backend with a focus
          on modularity and configurability.
        </div>
      }
    />
  );
};
