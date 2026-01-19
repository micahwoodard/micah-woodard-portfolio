"use client";
import { useRef } from "react";
import { PrototomeWebUiBlurb } from "../../features/prototomeWebUi/components/blurb";
import { BskiBlurb } from "../../features/bski/components/blurb";
import { BrainSlosherBlurb } from "../../features/brainSlosher/components/blurb";
import { DynamicForagingBlurb } from "../../features/dynamicForaging/components/blurb";
import { ExaSpimUi } from "../../features/exaSpimUi/components/blurb";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import { Title, Text, Button } from "@mantine/core";
import UseAnimationFrame from "../../components/ui/HomePageAnimation/homePageAnimation";

export const HomePage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="animation-container"
          style={{
            position: "absolute",
            zIndex: 0,
          }}
        >
          <UseAnimationFrame />
        </div>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Title order={1}>Hi!</Title>
          <Text size="md" style={{ maxWidth: "100vh" }}>
            My name is Micah Woodard, a software engineer with expertise in
            instrumentation control and user interfaces. I have worked on a wide
            range of projects, from microscope applications to fluidics systems
            to mouse behavior platforms, with a focus on designing and
            implementing scalable data acquisition systems and accompanying
            frontends. <br /> Check out my projects below and click anything
            that looks cool!
          </Text>
          <Button
            onClick={scrollToProjects}
            style={{
              background: "none",
              fontSize: "2rem",
              animation: "bounce 2s infinite",
            }}
          >
            <IconArrowNarrowDown />
          </Button>
        </div>
      </div>

      <div
        ref={projectsRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          padding: "1.5rem",
        }}
      >
        <PrototomeWebUiBlurb />
        <BskiBlurb />
        <BrainSlosherBlurb />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          padding: "1.5rem",
        }}
      >
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
