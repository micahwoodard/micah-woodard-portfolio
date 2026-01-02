import prototomeUiImage from "../assests/prototome_home_page_with_brain_slice.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const PrototomeWebUiBlurb = () => {
  const bulletPoints = [
    'Web application for controlling the Prototome microscope system at the Allen Institute for Neural Dynamics',
    'Frontend built with React, organized using bulletproof-react architecture',
    'Utilises Web-RTC for low latency video streams',
    'Backend implemented as a configuration-driven service exposing APIs for microscope hardware control',
  ];

  return (
    <ProjectCard imageSrc={prototomeUiImage} imageAlt="Prototome UI" overlayContent={
    <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Prototome Web UI
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