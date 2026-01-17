import registerWidget from "../assets/filled_register_widget_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BskiBlurb = () => {
  const bulletPoints = [
    "PyQt UI for indexing and retrieving barcode–well associations for the Brain Slice Keeper (BSK) system",
    "Config driven database backend, tissue types, indexer naming, and date formats",
    "Python backend manages barcode mappings with validation and fast lookup for production workflows",
  ];

  return (
    <ProjectCard
      imageSrc={registerWidget}
      imageAlt="BSKI UI"
      title="Brain Slice Keeper Indexer"
      href="/micah-woodard-portfolio/BSKI"
      overlayContent={
        <div>
          {bulletPoints.map((point, index) => (
            <p
              key={index}
              style={{
                marginBottom: 10,
                fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
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
