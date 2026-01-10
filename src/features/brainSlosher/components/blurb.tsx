import BrainSlosherUI from "../assests/brain_slosher_ui_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BrainSlosherBlurb = () => {
  const bulletPoints = [
    "Python control software for fluidics system used in washing and processing stained tissue samples.",
    "Web application for configuration of protocol and real time progress monitoring",
    "Frontend built with React, organized using bulletproof-react architecture"
  ];

  return (
    <ProjectCard imageSrc={BrainSlosherUI} imageAlt="Brain Slosher UI" overlayContent={
    <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Brain Slosher Software
        </h3>
        {bulletPoints.map((point, index) => (
          <p
            key={index}
            style={{
              fontSize: 'clamp(14px, 2cqw, 18px)',
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