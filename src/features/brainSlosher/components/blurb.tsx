import BrainSlosherUI from "../assests/brain_slosher_ui_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BrainSlosherBlurb = () => {
  const bulletPoints = [
    "Python control software for fluidics system used in washing stained tissue samples.",
    "React web application for configuration of protocol and real time progress monitoring",
    "Frontend built with React, organized using bulletproof-react architecture",
  ];

  return (
    <ProjectCard
      imageSrc={BrainSlosherUI}
      imageAlt="Brain Slosher UI"
      title="Brain Slosher Software"
      href="/micah-woodard-portfolio/brain_slosher"
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
