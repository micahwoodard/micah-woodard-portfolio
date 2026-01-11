import { Card } from "@mantine/core";
import type { CardProps } from "@mantine/core";
import { useThemeStore } from "@/stores/themeStore";
import type { ReactNode } from "react";
import classes from "./ProjectCard.module.css";

interface ProjectCardProps extends CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  overlayContent?: ReactNode;
}
console.log(getComputedStyle(document.body).backgroundColor);
export const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  overlayContent,
}: ProjectCardProps) => {
  const colorScheme = useThemeStore((state) => state.colorScheme);

  const gradientOverlay =
    colorScheme === "light"
      ? "linear-gradient(to top, #ffffffff, #ffffffff, #ffffffb3, #ffffff33, #ffffff00)"
      : "linear-gradient(to top, #2c2c2cff, #2c2c2cff, #2c2c2ce6, #2c2c2c33, #2c2c2c00)";

  return (
    <div className={classes.cardWrapper}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <Card p="lg" radius="md" className={classes.card}>
        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: gradientOverlay,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "45%",
            paddingBottom: "env(safe-area-inset-bottom)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              position: "absolute",
              marginLeft: 10,
              bottom: 0,
            }}
          >
            {overlayContent}
          </div>
        </div>
      </Card>
    </div>
  );
};
