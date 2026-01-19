import {
  Container,
  Text,
  Card,
  Button,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import BrainImage from "../assests/light_sheet_microscopy_result.jpg";
import Instrument from "../assests/exaspim_instrument_control.jpg";
import Acquisition from "../assests/acquisition_view.jpg";

export function ExaSpimDetailed() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap="sm">
          <Text size="xl">EXASPIM UI</Text>
          <Text c="dimmed" size="md" maw={700}>
            A PyQt-based application for controlling lightsheet microscopes used
            in experimental imaging workflows. The system abstracts instrument
            control and acquisition logic into configuration-driven views,
            allowing new hardware and protocols to be added without modifying
            core UI code. This design prioritizes flexibility for hardware
            across vendors and microscope variants.
          </Text>
          <Group>
            <Button
              color="light-dark(#3c2155, #8047b6)"
              variant="outline"
              leftSection={<IconBrandGithub size={18} />}
              component="a"
              href="https://github.com/AllenNeuralDynamics/view"
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
              href="https://alleninstitute.org/news/a-new-custom-built-microscope-is-capturing-stunning-views-of-the-brain/"
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
            src={BrainImage}
            alt="ExaSPIM Image"
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
            ExaSPIM image.
          </Text>
        </Card>
        <Stack gap="sm">
          <Text size="xl">PROBLEM</Text>
          <Card withBorder radius="md" p="lg">
            <Text size="sm">
              Experimental microscopes often use different hardware across
              instruments, depending on availability or budget constraints. New
              ideas for hardware can also require swapping components or
              integrating novel devices. Updating UIs to accommodate these
              changes is difficult, as each instrument may have slightly
              different control requirements. Additionally, while acquisition
              protocols may be similar across microscopes, they must remain
              configurable to support the specific capabilities of each system,
              making maintainable and flexible UI design critical.
            </Text>
          </Card>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">SOFTWARE REQUIREMENTS</Text>
          <Card withBorder radius="md" p="lg">
            <Text size="sm">
              The UI was designed to be flexible, maintainable, and extensible,
              supporting multiple microscope variants and vendors. It enforces
              separation of concerns between core acquisition logic, hardware
              control, and UI presentation, while maintaining modularity so that
              hardware-specific widgets can be added or updated independently.
              Configuration-driven views ensure that new instruments and
              protocols can be integrated without changing the underlying UI
              code, enabling reusability, extensibility, and long-term
              maintainability.
            </Text>
          </Card>
        </Stack>
        <Stack gap="sm">
          <Text size="xl">DESIGN & ARCHITECTURE</Text>
          <Card withBorder radius="md" p="lg">
            <Text size="sm">
              The ExaSPIM UI separates instrument control and acquisition into
              distinct views to improve clarity and maintainability. The
              instrument UI is organized by hardware type, with widgets
              dynamically generated from properties specified in the hardware
              drivers, allowing new devices to be added without modifying core
              code. Acquisition control is structured into multiple components,
              including volume specification, tile specification, an OpenGL
              visualization of the configured volume, and operation controls.
              This modular design enables flexible configuration, supports
              diverse hardware, and makes it easier to maintain and extend the
              system as experimental needs evolve.
            </Text>
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
              src={Instrument}
              alt="ExaSPIM instrument view"
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
              Instrument view.
            </Text>
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
              src={Acquisition}
              alt="ExaSPIM acquisition view"
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
              Acquisition view.
            </Text>
          </Card>
        </Stack>

        {/* Role */}
        <Stack gap="sm">
          <Text size="xl">ROLE</Text>
          <Card withBorder radius="md" p="lg">
            <Text size="sm">
              I led the UI architecture and integration of hardware-agnostic
              widgets, designing a modular, configuration-driven frontend that
              supports multiple microscope variants. My focus was on
              flexibility, ensuring the UI can evolve as new hardware and
              protocols are added.
            </Text>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
