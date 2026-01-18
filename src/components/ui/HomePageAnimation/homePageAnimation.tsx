"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function UseAnimationFrame() {
  const ref = useRef<HTMLDivElement>(null);
  const orbOne = useRef<HTMLDivElement>(null);
  const orbTwo = useRef<HTMLDivElement>(null);
  const orbThree = useRef<HTMLDivElement>(null);
  const orbFour = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!orbOne.current || !orbTwo.current || !orbThree.current) return;

    // Orb One: slow vertical movement + vertical stretch
    orbOne.current.style.transform = `
      translateY(${Math.sin(t / 1500) * 30}px)
      scaleY(${1 + Math.sin(t / 2000) * 0.1})
    `;

    // Orb Two: slow horizontal movement + horizontal stretch
    orbTwo.current.style.transform = `
      translateX(${Math.sin(t / 1800) * 40}px)
      scaleX(${1 + Math.sin(t / 2200) * 0.4})
    `;

    // Orb Three: slow diagonal movement + independent stretching
    orbThree.current.style.transform = `
      translateX(${Math.sin(t / 2000) * 50}px)
      translateY(${Math.sin(t / 1700) * 70}px)
      scaleX(${1 + Math.sin(t / 2500) * 0.6})
      scaleY(${1 + Math.cos(t / 2800) * 0.7})
    `;
  });

  return (
    <>
      <div
        ref={ref}
        style={{
          width: 300,
          height: 300,
        }}
      >
        <div
          ref={orbOne}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.6)",
            filter: "blur(30px)",
          }}
        />
        <div
          ref={orbTwo}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.6)",
            filter: "blur(30px)",
          }}
        />
        <div
          ref={orbThree}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.6)",
            filter: "blur(30px)",
          }}
        />
        <div
          ref={orbFour}
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(168,85,247,0.6)",
            filter: "blur(30px)",
          }}
        />
      </div>
    </>
  );
}
