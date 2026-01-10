import registerWidget from "../assets/filled_register_widget_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BskiBlurb = () => {
  const bulletPoints = [
    "Python app for indexing and retrieving barcode–well associations for the Brain Slice Keeper (BSK) system",
    "Configuration-driven design allows customization of database backend, tissue types, indexer naming, and date formats",
    "Backend manages barcode mappings with validation and fast lookup for production workflows"
  ];

  return (
    <ProjectCard imageSrc={registerWidget} imageAlt="BSKI UI" overlayContent={
    <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Brain Slice Keeper Indexer
        </h3>
        {bulletPoints.map((point, index) => (
          <p
            key={index}
            style={{
              fontSize: 'clamp(14px, 2cqw, 18px)',
              lineHeight: 'clamp(1, 1cqw, 1.6)',
              paddingTop: 5,
            }}
          >
            • {point}
          </p>
        ))}
      </div>
  } />
  );
};