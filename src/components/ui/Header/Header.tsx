import { Container, Group, Text, Menu } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()

  return (
    <Container style={{ paddingTop:50, paddingBottom:50, paddingLeft:100 }} fluid className="flex justify-between p-2 mb-[1rem]">
        <Text
          component={Link}
          to="/micah-woodard-portfolio"
          variant={location.pathname === "/micah-woodard-portfolio" ? "filled" : "outline"}
          style={{ fontSize: 40, textAlign:"left" }} 
        >
          MICAH WOODARD
        </Text>
        <Group>
        <Menu
          trigger="hover"
          openDelay={100}
          closeDelay={200}
        >
          <Menu.Target>
            <Text
              variant={location.pathname === "/about" ? "filled" : "outline"}
            >
              PORTFOLIO
            </Text>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => navigate('/prototome_web_ui')}>PROTOTOME WEB UI</Menu.Item>
            <Menu.Item onClick={() => navigate('/BSKI')}>BSKI</Menu.Item>
            <Menu.Item onClick={() => navigate('/brain_slosher')}>BRAIN SLOSHER</Menu.Item>
            <Menu.Item onClick={() => navigate('/dynamic_foraging')}>DYNAMIC FORAGING</Menu.Item>
            <Menu.Item onClick={() => navigate('/exa_spim_ui')}>EXA-SPIM UI</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Text
          component={Link}
          to="/"
          variant={location.pathname === "/about" ? "filled" : "outline"}
        >
          ABOUT
        </Text>
        <Text
          component={Link}
          to="/"
          variant={location.pathname === "/resume" ? "filled" : "outline"} 
        >
          RESUME
        </Text>
      <ColorSchemeToggle />
      </Group>
    </Container>
  );
}