import sillyBoy from "../../assets/77973107908__07A48151-BFF8-4191-9E75-EF98E9B466E5.jpg";
import { Group, Text, Image, Overlay, Box, Center, Stack } from "@mantine/core";
import { useThemeStore } from "@/stores/themeStore";

export const AboutPage = () => {
  const colorScheme = useThemeStore((state) => state.colorScheme);

  const gradientOverlay =
    colorScheme === "light"
      ? "radial-gradient(circle at center, #ffffff00 40%, #ffffffff 60%)"
      : "radial-gradient(circle at center, #2f2f2f00 40%, #242424ff 60%)";

  return (
    <Center>
      <Group align="center" wrap="wrap" style={{ padding: 10 }}>
        <Box pos="relative" maw={300} w="100%" mx="auto">
          <Image style={{}} src={sillyBoy} alt="Micah" fit="contain" />
          <Overlay gradient={gradientOverlay} />
        </Box>
        <Stack>
          <Text style={{ fontSize: 16, textAlign: "center" }}>ABOUT ME</Text>
          <Box maw={600} w="100%">
            <Stack align="center">
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Hi! I am Micah. I am a software engineer.{" "}
              </Text>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                I studied Biomedical Engineering at Columbia University and
                Mathematics-Physics at the College of Idaho, earning a dual
                degree with minors in Music and Health Psychology.
              </Text>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                I started out as an Optical Engineer, designing control software
                and user interfaces for custom light-sheet microscopes. I loved
                working with the hardware and seeing the microscopes in action.
              </Text>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Over time, I moved into software engineering. Now I build tools
                for behavioral experiments, fluidics systems, and microtome
                control, while still keeping my passion for light-sheet
                microscopy alive.
              </Text>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                I enjoy creating modular, user-friendly software that helps
                researchers collect and analyze data efficiently. Solving
                complex instrumentation problems and making life easier for
                scientists is what drives me.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Group>
    </Center>
  );
};
