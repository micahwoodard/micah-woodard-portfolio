import DynamicForagingArc from "../assests/DynamicForagingArchitecture-Dynamic Foraging Architecture.drawio.png";
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
      overlayContent={
        <div>
          <h3
            style={{
              fontWeight: 600,
              fontSize: "clamp(0.55rem, 2.2vw, 1rem)",
            }}
          >
            Dynamic Foraging Behavior Platform
          </h3>
          <h3
            style={{
              fontSize: "clamp(0.55rem, 2.2vw, 1rem)",
              marginTop: 5,
              lineHeight: 1.25,
            }}
          >
            {bulletPoints.map((point, index) => (
              <p
                key={index}
                style={{
                  marginBottom: 2.5,
                }}
              >
                • {point}
              </p>
            ))}
          </h3>
        </div>
      }
    />
  );
};
