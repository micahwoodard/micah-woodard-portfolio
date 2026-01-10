import registerWidget from "../assets/filled_register_widget_cropped.png";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const BskiBlurb = () => {
  const bulletPoints = [
    "PyQt UI for indexing and retrieving barcode–well associations for the Brain Slice Keeper (BSK) system",
    "Configuration-driven design allows customization of database backend, tissue types, indexer naming, and date formats",
    "Python Backend manages barcode mappings with validation and fast lookup for production workflows",
  ];

  return (
    <ProjectCard
      imageSrc={registerWidget}
      imageAlt="BSKI UI"
      overlayContent={
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Brain Slice Keeper Indexer
          </h3>
          <h3
            style={{
              fontSize: "clamp(0.75rem, 2.2vw, .8rem)",
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
