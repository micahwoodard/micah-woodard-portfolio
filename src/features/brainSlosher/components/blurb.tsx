import BrainSlosherUI from "../assests/brain_slosher_ui_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BrainSlosherBlurb = () => {
  const bulletPoints = [
    "Python control software for fluidics system used in washing stained tissue samples.",
    "Web application for configuration of protocol and real time progress monitoring",
    "Frontend built with React, organized using bulletproof-react architecture",
  ];

  return (
    <ProjectCard
      imageSrc={BrainSlosherUI}
      imageAlt="Brain Slosher UI"
      overlayContent={
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Brain Slosher Software
          </h3>
          <h3
            style={{
              fontSize: "clamp(0.88rem, 2.2vw, .95rem)",
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
