import React, { useEffect, useState } from "react";
import { Center, Text } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

export const SplashScreen = ({ onDone }: { onDone: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000); // splash duration
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!visible) onDone();
  };

  const streams = 6;

  // Generate wave-like streams
  const waves = Array.from({ length: streams }).map((_, i) => {
    const color = `rgb(221, 146, 221,${0.2 + Math.random() * 0.3})`;
    const offsetX = Math.random() * 100 - 50;
    const delay = Math.random() * 2;

    return { color, offsetX, delay };
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2} }}
          onAnimationComplete={handleAnimationComplete}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "var(--mantine-color-body)",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <Center style={{ height: "100%" }}>
            {/* Flowing wave streams */}
            {waves.map((wave, i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  width: "2px",
                  height: "100%",
                  background: wave.color,
                  left: `calc(50% + ${wave.offsetX}px)`,
                  top: 0,
                  borderRadius: "50%",
                }}
                animate={{
                  y: ["-100%", "100%"], // moves from top to bottom
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  
                  ease: "easeInOut",
                  delay: wave.delay,
                }}
              />
            ))}
            <motion.div style={{ position: "relative", zIndex: 1 }}>
              <Text
                  style={{ fontSize: 40, textAlign:"left" }} 
                >
                  MICAH WOODARD
              </Text>
            </motion.div>
          </Center>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
