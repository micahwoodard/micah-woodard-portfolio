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
      overlayContent={
        <div>
          <h3
            style={{
              fontSize: "clamp(0.5rem, 2.2vw, 1rem)",
              fontWeight: 600,
            }}
          >
            ExaSpim UI
          </h3>
          <h3
            style={{
              fontSize: "clamp(0.5rem, 2.2vw, 1rem)",
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
