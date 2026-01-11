import prototomeUiImage from "../assests/prototome_home_page_with_brain_slice.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const PrototomeWebUiBlurb = () => {
  const bulletPoints = [
    "React web application for controlling Prototome microscope system",
    "Utilises Web-RTC for low latency video streams",
    "Config-driven API creation for microscope hardware control",
  ];

  return (
    <ProjectCard
      imageSrc={prototomeUiImage}
      imageAlt="Prototome UI"
      title="Prototome Web UI"
      overlayContent={
        <div>
          {bulletPoints.map((point, index) => (
            <p
              key={index}
              style={{
                marginBottom: 10,
                fontSize: "clamp(1rem,  2.2vw, 1.1rem)",
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
