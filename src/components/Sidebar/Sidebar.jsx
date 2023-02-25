// import { Container } from "./Sidebarstyle";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import { Navigs } from "./Sidebarstyle";

const ContainerSide = styled.div`
  width: 25rem;
  height: 100%;
  position: absolute;
  background: #000;
  color: #fff;
  left: ${(props) => props.control};
  transition: all 2s ease-in-out;
  padding: 1rem;
`;

export default function Sidebar({ sm, setSm, tre, late, re, set }) {
  return (
    <ContainerSide control={sm}>
      <GiCancel
        size="3rem"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setSm("-45rem");
        }}
      />
      <Navigs
        onClick={() => {
          late(true);
          tre(false);
          re(false);
          set(true);
        }}
      >
        Home
      </Navigs>
      <Navigs>Favorites</Navigs>
      <Navigs>Profile</Navigs>
      <Navigs>Log out</Navigs>
    </ContainerSide>
  );
}
