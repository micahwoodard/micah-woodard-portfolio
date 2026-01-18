import { useRef } from "react";
import { PrototomeWebUiBlurb } from "../../features/prototomeWebUi/components/blurb";
import { BskiBlurb } from "../../features/bski/components/blurb";
import { BrainSlosherBlurb } from "../../features/brainSlosher/components/blurb";
import { DynamicForagingBlurb } from "../../features/dynamicForaging/components/blurb";
import { ExaSpimUi } from "../../features/exaSpimUi/components/blurb";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import fig from "../../assets/homepage_foreground.png";

export const HomePage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
  style={{
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "minmax(160px, 40%) 1fr",
    alignItems: "start",
    padding: "2rem",
    gap: "2rem",
  }}
>
  {/* IMAGE — left */}
  <img
    src={fig}
    alt="Illustration"
    style={{
      width: "100%",
      maxWidth: "360px",
      height: "auto",
      justifySelf: "start",
      alignSelf: "start",
      filter: `
        drop-shadow(0 0 16px rgba(168, 85, 247, 0.6))
        drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))
      `,
    }}
  />

  {/* TEXT — right, top-aligned */}
  <div
    style={{
      alignSelf: "start",
      maxWidth: "520px",
    }}
  >
    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>
      Welcome
    </h1>
    <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
      Check out my projects below
    </p>
    <button
      onClick={scrollToProjects}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "2rem",
        animation: "bounce 2s infinite",
      }}
    >
      <IconArrowNarrowDown />
    </button>
  </div>
</div>

      {/* PROJECTS */}
      <div
        ref={projectsRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
          justifyContent: "center",
          transform: "scale(0.8)",
          transformOrigin: "center",
        }}
      >
        <PrototomeWebUiBlurb />
        <BskiBlurb />
        <BrainSlosherBlurb />
        <DynamicForagingBlurb />
        <ExaSpimUi />
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(10px); }
            60% { transform: translateY(5px); }
          }
        `}
      </style>
    </div>
  );
};
