import { Container, Icon } from "../constant";
import { NavContainer, NavSections, NavText, Button } from "./navbarstyle";
import { RiMenu4Fill } from "react-icons/ri";

export default function Navbar({ setSm }) {
  return (
    <NavContainer>
      <NavSections>
        <RiMenu4Fill
          size="2.5rem"
          style={{ cursor: "pointer" }}
          className="icon"
          onClick={() => {
            setSm((curr) => {
              curr === "-45rem" ? "0" : "-45rem";
            });
          }}
        />
        <NavText>This is where we tell stories</NavText>
      </NavSections>
      <NavSections>
        <Button>Register</Button>
        <Button>Contact</Button>
      </NavSections>
    </NavContainer>
  );
}
