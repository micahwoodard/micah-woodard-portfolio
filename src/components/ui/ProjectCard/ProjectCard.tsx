import { Card } from "@mantine/core";
import type { CardProps } from "@mantine/core";
import { useThemeStore } from "@/stores/themeStore";
import type { ReactNode } from "react";
import classes from "./ProjectCard.module.css";
import { useNavigate } from "react-router-dom";
import { IconBrandGithubFilled } from "@tabler/icons-react";

interface ProjectCardProps extends CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  overlayContent?: ReactNode;
  href: string;
  repoUrl: string;
}
console.log(getComputedStyle(document.body).backgroundColor);
export const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  overlayContent,
  href,
  repoUrl,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  const colorScheme = useThemeStore((state) => state.colorScheme);
  const gradientOverlay =
    colorScheme === "light"
      ? "linear-gradient(to top, #ffffffff 10%, #ffffffbf, #ffffff00)"
      : "linear-gradient(to top, #2c2c2cff 10%, #2c2c2cbf, #2c2c2c00 )";

  return (
    <div className={classes.cardWrapper}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <Card
        p="lg"
        radius="md"
        className={classes.card}
        onClick={() => {
          navigate(href);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img src={imageSrc} alt={imageAlt} style={{ width: "100%" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: gradientOverlay,
            }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>{overlayContent}</div>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <IconBrandGithubFilled />
        </a>
      </Card>
    </div>
  );
};
