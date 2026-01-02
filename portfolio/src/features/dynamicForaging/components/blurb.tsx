import DynamicForagingArc from "../assests/DynamicForagingArchitecture-Dynamic Foraging Architecture.drawio.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const DynamicForagingBlurb = () => {
  const bulletPoints = [
    "Redesigning a dynamic foraging behavior platform—a system that runs and monitors automated animal behavior experiments—to be modular, maintainable, and scalable, with clean interfaces and reusable components",
    "Defining architecture and standards to separate task logic from the GUI, align with organizational guidelines, and enable shareable workflows.",
    "Improving maintainability and composability by planning reusable modules, clear interfaces, and decoupling from legacy infrastructure."
  ];

  return (
    <ProjectCard imageSrc={DynamicForagingArc} imageAlt="Dynamic Foraging Arc" overlayContent={
    <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Dynamic Foraging Behavior Platform
        </h3>
        {bulletPoints.map((point, index) => (
          <p
            key={index}
            style={{
              fontSize: 'clamp(10px, 2cqw, 18px)',
              lineHeight: '1.6',
              paddingTop:5,
            }}
          >
            • {point}
          </p>
        ))}
      </div>
  } />
  );
};