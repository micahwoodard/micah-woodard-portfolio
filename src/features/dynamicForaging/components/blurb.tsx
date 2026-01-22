import DynamicForagingArc from "../assests/DynamicForagingArchitecture-Dynamic Foraging Architecture_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const DynamicForagingBlurb = () => {
  return (
    <ProjectCard
      imageSrc={DynamicForagingArc}
      imageAlt="Dynamic Foraging Arc"
      title="Dynamic Foraging Behavior Platform"
      href="/dynamic_foraging"
      repoUrl="https://github.com/AllenNeuralDynamics/Aind.Behavior.DynamicForaging"
      overlayContent={
        <div>
          A software platform for runnning live mice experiments that supports
          experimental control, data collection, and interaction with institute
          infrastructure. This project is an ongoing refactor aimed at improving
          maintainability and scalability as the platform continues to evolve. I
          am leading the redesign, focusing on modularity, adherence to
          institute standards, and reusability, while coordinating cross-team
          contributions to the project.
        </div>
      }
    />
  );
};
