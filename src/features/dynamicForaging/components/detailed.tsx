import {
  Container,
  Title,
  Text,
  Card,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Image,
} from "@mantine/core";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import MouseGif from "../assests/Dynamic ForagingMouse.gif";
import Architecture from "../assests/DynamicForagingArchitecture-Dynamic Foraging Architecture.drawio.png";

export function DynamicForagingDetailed() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="sm">
          <Text size="xl">DYNAMIC FORAGING PLATFORM REFACTOR</Text>
          <Text c="dimmed" size="md" maw={700}>
            A software platform for running live mice experiments that supports
            experimental control, data collection, and interaction with
            institute infrastructure. This project is currently undergoing a
            refactor to improve maintainability, scalability, and cross-team
            collaboration.
          </Text>
          <Group>
            <Button
              color="light-dark(#3c2155, #8047b6)"
              variant="outline"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href="https://github.com/AllenNeuralDynamics/Aind.Behavior.DynamicForaging"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </Button>
            <Button
              color="light-dark(#3c2155, #8047b6)"
              variant="outline"
              leftSection={<IconLink size={18} />}
              component="a"
              href="https://www.allenneuraldynamics.org/platforms/behavior"
              target="_blank"
              rel="noreferrer"
            >
              View on Allen Institute
            </Button>
          </Group>
        </Stack>
        <Card
          withBorder
          radius="md"
          p="md"
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={MouseGif}
            alt="Dynamic foraging task."
            radius="sm"
            fit="contain"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
          <Text size="sm" c="dimmed" mt="sm">
            Dynamic foraging demo.
          </Text>
        </Card>
        <Stack gap="sm">
          <Text size="xl">PROBLEM</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              The Dynamic Foraging Platform coordinates live mouse experiments,
              manages hardware control, data collection, and interaction with
              institute infrastructure. As the system has grown, its current
              architecture has made maintaining and extending the codebase
              increasingly difficult. This is problematic because new tools and
              infrastructure at the institute cannot be easily integrated, and
              updating the platform to align with current standards is
              cumbersome.
            </Text>
          </Card>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">REQUIREMENTS</Text>
          <Card withBorder radius="md" p="lg">
            <Text mb="sm">
              The refactored Dynamic Foraging Platform must support modular code
              that can evolve with new experimental needs. The system should be
              designed to separate concerns between experiment control, data
              collection, and institute infrastructure. It should allow
              independent components to be developed, tested, and updated
              without affecting other parts of the platform. The platform should
              be reusable and distributable across different teams and labs, and
              ensure repeatability and maintainability so that long-running
              experiments can be executed reliably and the codebase can be
              safely updated over time.
            </Text>
          </Card>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">DESIGN & ARCHITECTURE</Text>
          <Card withBorder radius="md" p="lg">
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="lg">
              <Stack gap="xs">
                <Title order={4}>Component-Based Architecture</Title>
                <Text size="sm" c="dimmed">
                  Subsystems for experiment control, data collection, and
                  hardware communication will be implemented as independent
                  modules with clear APIs. Institute infastrucute should be
                  seperated from acquisition software. The system architecture
                  can be seen below.
                </Text>
              </Stack>
            </SimpleGrid>
          </Card>
        </Stack>
<Card
                withBorder
                radius="md"
                p="md"
                style={{
                  height: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={Architecture}
                  alt="Dynamic foraging architecture."
                  radius="sm"
                  fit="contain"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <Text size="sm" c="dimmed" mt="sm">
                  Dynamic foraging architecture.
                </Text>
              </Card>
        {/* Role */}
        <Stack gap="sm">
          <Text size="xl">MY ROLE</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              I am leading the refactor of the Dynamic Foraging Platform,
              focusing on modularity, standards compliance, and reusability. I
              am coordinating cross-team contributions, make architectural
              decisions, and ensuring the platform can scale safely as new
              experiments, hardware, and features are added over time.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
