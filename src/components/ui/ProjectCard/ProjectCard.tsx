import { Card } from "@mantine/core";
import type { CardProps } from "@mantine/core";
import { useThemeStore } from "@/stores/themeStore";
import type { ReactNode } from "react";
import classes from "./ProjectCard.module.css";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps extends CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  overlayContent?: ReactNode;
  href: string;
}
console.log(getComputedStyle(document.body).backgroundColor);
export const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  overlayContent,
  href,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  const colorScheme = useThemeStore((state) => state.colorScheme);
  const gradientOverlay =
    colorScheme === "light"
      ? "linear-gradient(to top, #ffffffff 10%, #ffffffbf, #ffffff00)"
      : "linear-gradient(to top, #2c2c2cff 10%, #2c2c2cbf, #2c2c2c1a, #2c2c2c1a )";

  return (
    <div className={classes.cardWrapper}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <Card
        p="lg"
        radius="md"
        className={classes.card}
        onClick={() => {
          navigate(href);
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden", 
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: gradientOverlay
            }}
          />
        </div>
          <div
          >
            {overlayContent}
          </div>
      </Card>
    </div>
  );
};
