import {
  Container,
  Title,
  Text,
  Card,
  Button,
  Group,
  SimpleGrid,
  Image,
  Stack,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import BrainSlosher from "../assests/system.png";
import BrainSlosherUI from "../assests/brain_slosher_ui.png";
import BrainSlosherControlArc from "../assests/brain_slosher_architecture.png";

export function BrainSlosherDetailed() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap="sm">
          <Text size="xl">BRAIN SLOSHER SOFTWARE</Text>
          <Text c="dimmed" size="md" maw={700}>
            Python control software for a fluidics system used to wash stained
            tissue samples, with a React web app for protocol configuration and
            real-time monitoring. Built to reduce repetitive wash steps, freeing
            up research assistants’ time and minimizing human error.
          </Text>
          <Group>
            <Button
              variant="outline"
              color="light-dark(#3c2155, #8047b6)"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href="https://github.com/AllenNeuralDynamics/brainslosher-web-ui"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </Button>
          </Group>
        </Stack>

        {/* Hero Screenshot */}
        <Card
          withBorder
          radius="md"
          p="md"
          style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={BrainSlosher}
            alt="Brainslosher"
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
            Brainslosher system.
          </Text>
        </Card>

        {/* Problem */}
        <Stack gap="sm">
          <Text size="xl">PROBLEM</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              Washing stained tissue samples involves repetitive steps that are
              time-consuming and can be prone to human error. Research
              assistants need to make many liquid changes, limiting their time
              for other experiments and reducing overall lab efficiency.
            </Text>
          </Card>
        </Stack>

        {/* Software Requirements */}
        <Stack gap="sm">
          <Text size="xl">SOFTWARE REQUIREMENTS</Text>
          <Card withBorder radius="md" p="lg">
            <Text mb="sm">
              The software needed to control the automated fluidic wash system.
              The control software need an accompanying UI to build protocols
              while providing real-time monitoring of protocol progress. Users
              should be able to intervene or pause and track progress remotely,
              ensuring accuracy and reducing manual workload.
            </Text>
          </Card>
        </Stack>
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="lg">
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
              src={BrainSlosherUI}
              alt="Brainslosher UI"
              radius="sm"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
            <Text size="sm" c="dimmed" mt="sm">
              UI for configuring and monitoring wash protocols.
            </Text>
          </Card>
        </SimpleGrid>

        {/* Design & Architecture */}
        <Stack gap="sm">
          <Text size="xl">DESIGN & ARCHITECTURE</Text>
          <Card withBorder radius="md" p="lg">
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              <Stack gap="xs">
                <Title order={4}>Python Backend</Title>
                <Text size="sm" c="dimmed">
                  Python control software manages the fluidics system,
                  automating wash steps and providing an API for the frontend.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>React Frontend</Title>
                <Text size="sm" c="dimmed">
                  React was used to provide a responsive and user-friendly web
                  UI, allowing protocol configuration, remote monitoring, and
                  step control.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Configurable & Scalable</Title>
                <Text size="sm" c="dimmed">
                  Protocols, timing, and fluidics parameters are defined via
                  configuration files, allowing easy adaptation to different
                  tissue types or lab workflows.
                </Text>
              </Stack>
            </SimpleGrid>
          </Card>
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
              src={BrainSlosherControlArc}
              alt="Brainslosher architecture diagram"
              radius="sm"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
            <Text size="sm" c="dimmed" mt="sm">
              Architecture of control software.
            </Text>
          </Card>
        </Stack>

        {/* Role */}
        <Stack gap="sm">
          <Text size="xl">ROLE</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              I designed and implemented the full Brainslosher system, including
              the Python backend, React frontend, and configuration
              architecture. I leveraged previously written software for a
              different fluidic system to reduce duplicated code and accelerate
              development. I worked closely with lab users to refine protocols,
              ensuring the system was reusable, user-friendly, and reliable for
              long-term production use.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
