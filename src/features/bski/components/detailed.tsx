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
import BskiCad from "../assets/bski_cad.jpg";
import RegisterWidget from "../assets/filled_register_widget_cropped.png";
import RecieverWidget from "../assets/receiver_widget.png";
import Arc from "../assets/bski_arcitecture_diagram.png";

export function BskiDetailed() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="sm">
          <Text size="xl"> BSK INDEXER UI</Text>
          <Text c="dimmed" size="md" maw={700}>
            A configuration-driven PyQt desktop application for indexing and
            retrieving barcode–tissue associations in the Brain Slice Keeper
            (BSK) system. Built to minimize human error in high-throughput
            neuroscience lab workflows.
          </Text>
          <Group>
            <Button
              color="light-dark(#3c2155, #8047b6)"
              variant="outline"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href="https://github.com/AllenNeuralDynamics/BSK-Indexer"
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
            src={BskiCad}
            alt="BSK Indexer main UI screenshot"
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
            BSK Indexer used tissue processing.
          </Text>
        </Card>
        <Stack gap="sm">
          <Text size="xl">PROBLEM</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              Allen Institute labs process large volumes of tissue samples using
              the Brain Slice Keeper Indexer shown above. Each tissue in the BSK
              Indexer is tracked by barcodes. Manual entering of barcodes was
              causing mis-indexed samples, poor traceability, and costly
              downstream experimental errors.
            </Text>
          </Card>
        </Stack>

        <Stack gap="sm">
          <Text size="xl">SOFTWARE REQUIREMENTS</Text>
          <Card withBorder radius="md" p="lg">
            <Text mb="sm">
              The solution needed to provide an automated way to generate and
              save barcode–tissue associations per indexer, while allowing users
              to select relevant tissue metadata incorporated into standardized
              naming conventions. When a user scanned a barcode, the UI needed to
              retrieve the tissue name associated with it.
            </Text>
          </Card>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder radius="md" p="md">
              <Image
                src={RegisterWidget}
                alt="Registration widget screenshot"
                radius="sm"
              />
              <Text size="sm" c="dimmed" mt="sm">
                Barcode and tissue registration workflow.
              </Text>
            </Card>
            <Card
              withBorder
              radius="md"
              p="md"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={RecieverWidget}
                alt="Lookup widget screenshot"
                radius="sm"
                mx="auto"
              />
              <Text size="sm" c="dimmed" mt="sm">
                Retrieval and validation of existing barcode–tissue records.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">DESIGN AND ARCHITECTURE</Text>
          <Card withBorder radius="md" p="lg">
            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg">
              <Stack gap="xs">
                <Title order={4}>Configuration-Driven</Title>
                <Text size="sm" c="dimmed">
                  To ensure scalability across labs, tissue metadata selections,
                  database backends, and indexer naming conventions are defined
                  via configuration files.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Modular UI</Title>
                <Text size="sm" c="dimmed">
                  Widgets are isolated and composable, allowing individual
                  components to evolve independently without destabilizing the
                  application.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Separation of Concerns</Title>
                <Text size="sm" c="dimmed">
                  Clear boundaries between UI logic, backend/database access,
                  and configuration models improve maintainability and
                  testability.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Documentation and Testing</Title>
                <Text size="sm" c="dimmed">
                  Documentation and testing were implemented to support ease of
                  readability, usability, and future iteration. Clear guides
                  help new users understand interface, while unit and
                  integration tests ensure that changes do not break existing
                  functionality.
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
              src={Arc}
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
          </Card>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">IMPACT</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              {" "}
              The system has been used across six distinct production workflows
              with no recorded erroneous barcode–tissue associations. Its
              configuration-driven design has allowed multiple labs to adapt the same software to
              their specific processes without requiring code changes,
              supporting reliable scaling in active lab environments.
            </Text>
          </Card>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">ROLE</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              I designed and implemented the full application, including the UI,
              backend logic, and configuration architecture. I worked closely
              with lab users to refine workflows and focused on building a
              maintainable, adaptable system suitable for long-term production
              use.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
