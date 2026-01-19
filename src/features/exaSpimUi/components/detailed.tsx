import {
  Container,
  Title,
  Text,
  Card,
  Button,
  Group,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export function DynamicForagingDetailed() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap="sm">
          <Text size="xl">DYNAMIC FORAGING PLATFORM</Text>
          <Text c="dimmed" size="md" maw={700}>
            A software platform for running live mice experiments that supports
            experimental control, data collection, and interaction with institute
            infrastructure. This project is currently undergoing a refactor to improve
            maintainability, scalability, and cross-team collaboration.
          </Text>
          <Group>
            <Button
              variant="outline"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href="https://github.com/AllenNeuralDynamics/Aind.Behavior.DynamicForaging"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </Button>
          </Group>
        </Stack>

        {/* Motivation */}
        <Stack gap="sm">
          <Text size="xl">MOTIVATION</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              The Dynamic Foraging Platform coordinates live mouse experiments,
              managing hardware control, data collection, and integration with
              institute infrastructure. As the system has grown, maintaining and
              extending the existing codebase has become challenging. The ongoing
              refactor aims to improve modularity, reusability, and adherence to
              institute standards, while supporting safe contributions from multiple teams.
            </Text>
          </Card>
        </Stack>

        {/* Refactor Goals */}
        <Stack gap="sm">
          <Text size="xl">REFACTOR GOALS</Text>
          <Card withBorder radius="md" p="lg">
            <Text mb="sm">
              The refactor focuses on the following objectives:
            </Text>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Card withBorder radius="md" p="md">
                <Title order={4}>Modularity</Title>
                <Text size="sm" c="dimmed">
                  Breaking the platform into independent modules for experiment control,
                  data acquisition, and hardware interfaces to improve maintainability
                  and testability.
                </Text>
              </Card>
              <Card withBorder radius="md" p="md">
                <Title order={4}>Scalability</Title>
                <Text size="sm" c="dimmed">
                  Designing components to support additional experiments, hardware,
                  and growing data volumes without introducing unnecessary complexity.
                </Text>
              </Card>
              <Card withBorder radius="md" p="md">
                <Title order={4}>Standards Compliance</Title>
                <Text size="sm" c="dimmed">
                  Aligning with institute coding, documentation, and testing standards
                  to ensure the platform remains maintainable and extensible.
                </Text>
              </Card>
              <Card withBorder radius="md" p="md">
                <Title order={4}>Cross-Team Collaboration</Title>
                <Text size="sm" c="dimmed">
                  Enabling multiple teams to contribute safely through clear module
                  boundaries and reusable interfaces.
                </Text>
              </Card>
            </SimpleGrid>
          </Card>
        </Stack>

        {/* Design Decisions */}
        <Stack gap="sm">
          <Text size="xl">DESIGN DECISIONS</Text>
          <Card withBorder radius="md" p="lg">
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              <Stack gap="xs">
                <Title order={4}>Component-Based Architecture</Title>
                <Text size="sm" c="dimmed">
                  Subsystems for experiment control, data collection, and hardware
                  communication are implemented as independent modules with clear APIs.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Configuration-Driven</Title>
                <Text size="sm" c="dimmed">
                  Experiment parameters, hardware mappings, and workflows are defined
                  via configuration files, reducing hard-coded dependencies and
                  improving reproducibility.
                </Text>
              </Stack>
              <Stack gap="xs">
                <Title order={4}>Refactor Leveraging Existing Code</Title>
                <Text size="sm" c="dimmed">
                  Previously written software from related projects is reused to reduce
                  duplicated code and accelerate development while preserving proven
                  functionality.
                </Text>
              </Stack>
            </SimpleGrid>
          </Card>
        </Stack>

        {/* Role */}
        <Stack gap="sm">
          <Text size="xl">MY ROLE</Text>
          <Card withBorder radius="md" p="lg">
            <Text>
              I am leading the refactor of the Dynamic Foraging Platform, focusing
              on modularity, standards compliance, and reusability. I coordinate
              cross-team contributions, make architectural decisions, and ensure
              the platform can scale safely as new experiments, hardware, and features
              are added over time.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
