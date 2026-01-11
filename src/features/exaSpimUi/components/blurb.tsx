import ExaSpimUiImage from "../assests/exaspim_instrument_control.jpg";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const ExaSpimUi = () => {
  const bulletPoints = [
    "PyQt UI for controlling lightsheet microscopes",
    "Abstracts instrument and acquisition control into separate config driven views",
    "Designed for flexibility and extensibility, supporting widgets for hardware across vendors",
  ];

  return (
    <ProjectCard
      imageSrc={ExaSpimUiImage}
      imageAlt="ExaSpim UI"
      title="ExaSpim UI"
      overlayContent={
        <div>
          {bulletPoints.map((point, index) => (
            <p
              key={index}
              style={{
                marginBottom: 10,
                fontSize: "clamp(.9rem, 2.2vw, 1.2rem)",
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
