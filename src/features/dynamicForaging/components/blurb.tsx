import DynamicForagingArc from "../assests/DynamicForagingArchitecture-Dynamic Foraging Architecture_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const DynamicForagingBlurb = () => {
  const bulletPoints = [
    "Redesigning mouse experiment platform to be modular, maintainable, and scalable",
    "Defining architecture to align with organizational standards, and enable shareable workflows.",
    "Leading and coordinating tasks across teams to implement platform effectively and effiecently",
  ];

  return (
    <ProjectCard
      imageSrc={DynamicForagingArc}
      imageAlt="Dynamic Foraging Arc"
      title="Dynamic Foraging Behavior Platform"
      href="/micah-woodard-portfolio/dynamic_foraging"
      overlayContent={
        <div>
          {bulletPoints.map((point, index) => (
            <p
              key={index}
              style={{
                marginBottom: 10,
                lineHeight: 1.5,
              }}
            >
              • {point}
            </p>
          ))}
        </div>
      }
    />
  );
};
