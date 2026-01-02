import ExaSpimUiImage from "../assests/exaspim_instrument_control.jpg";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const ExaSpimUi = () => {
  const bulletPoints = [
    'PyQt UI for controlling lightsheet microscopes',
    'Abstracts instrument control and acquisition configuration into separate config driven views',
    'Designed for flexibility and extensibility, supporting widgets for diverse hardware (lasers, cameras, stages, DAQs) with defaults and custom overrides specified in config',
  ];

  return (
    <ProjectCard imageSrc={ExaSpimUiImage} imageAlt="ExaSpim UI" overlayContent={
    <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          ExaSpim UI
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