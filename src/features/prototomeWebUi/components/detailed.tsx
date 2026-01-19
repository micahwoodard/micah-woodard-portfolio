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
import Microtome from "../assests/microtome.png";
import Ui from "../assests/prototome_home_page_with_brain_slice.png";

export function PrototomeWebUiDetailed() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="sm">
          <Text size="xl"> PROTOTOME WEB UI</Text>
          <Text c="dimmed" size="md" maw={700}>
            A React web application for controlling the Prototome microscope
            (custom microtome) system with low‑latency monitoring and hardware
            control during long‑running imaging sessions.
          </Text>
          <Group>
            <Button
              color="light-dark(#3c2155, #8047b6)"
              variant="outline"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href="https://github.com/AllenNeuralDynamics/prototome-web-ui"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
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
            src={Microtome}
            alt="Example of microtome."
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
            Example of microtome worklow.
          </Text>
        </Card>
        <Stack gap="sm">
          <Text size="xl">PROBLEM</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              The Prototome is a custom microtome that automates sample cutting
              while imaging the block surface. Imaging sessions can span
              multiple hours or even days, and users must continuously monitor
              each cut to ensure the block is not damaged and the cuts maintain
              high quality. Requiring users to remain in one place for the
              entire session is ineffectual and burdensome.
            </Text>
          </Card>
        </Stack>

        <Stack gap="sm">
          <Text size="xl">SOFTWARE REQUIREMENTS</Text>
          <Card withBorder radius="md" p="lg">
            <Text mb="sm">
              The solution needed to allow users to monitor the Prototome
              remotely in real time and intervene immediately if issues arose.
              Low-latency updates of both imaging and stage positions were
              essential, as delays could result in damage to the sample or
              missed quality issues.
            </Text>
          </Card>

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
                src={Ui}
                alt="Prototome Web Ui"
                radius="sm"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <Text size="sm" c="dimmed" mt="sm">
                Prototome Web UI
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">DESIGN & ARCHITECTURE</Text>
          <Card withBorder radius="md" p="lg">
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              <Stack gap="xs">
                <Title order={4}>React Web UI</Title>
                <Text size="sm" c="dimmed">
                  A React frontend was chosen to enable remote monitoring of the
                  Prototome. The architecture follows the bulletproof
                  architecture for scalable, maintainable, and robust React
                  applications.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Low-Latency Video Streaming</Title>
                <Text size="sm" c="dimmed">
                  WebRTC was used to stream video data from the microscope in
                  real time with minimal latency, ensuring issues can be
                  detected immediately.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Configurable Data Channels</Title>
                <Text size="sm" c="dimmed">
                  HTTP and WebRTC data channels can be enabled or extended via
                  configuration, providing flexibility and scalability across
                  different labs and experiments.
                </Text>
              </Stack>
            </SimpleGrid>
          </Card>
          {/* <Card
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
              //src={Arc}
              alt="BSK Indexer architecture diagram"
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
              High-level architecture showing separation between UI, backend,
              database, and configuration layers.
            </Text>
          </Card> */}
        </Stack>
        {/* <Stack gap="sm">
          <Text size="xl">IMPACT</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              {" "}
              The system has been used across six distinct production workflows
              with no recorded erroneous barcode–tissue associations. Its
              configuration-driven design has allowed multiple labs, internal
              teams, and external collaborators to adapt the same software to
              their specific processes without requiring code changes,
              supporting reliable scaling in active lab environments.
            </Text>
          </Card>
        </Stack> */}
        <Stack gap="sm">
          <Text size="xl">ROLE</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              I designed and implemented application, including the React UI and
              configuration architecture. I worked closely with lab users to
              refine workflows and investigated tools for low‑latency video
              streaming, focusing on building a maintainable, adaptable system
              suitable for long‑term production use.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
