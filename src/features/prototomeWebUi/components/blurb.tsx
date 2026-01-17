import prototomeUiImage from "../assests/prototome_home_page_with_brain_slice_cropped.png";
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
      href="/micah-woodard-portfolio/prototome_web_ui"
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
