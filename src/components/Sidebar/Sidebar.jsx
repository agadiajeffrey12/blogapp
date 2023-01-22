// import { Container } from "./Sidebarstyle";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

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

export default function Sidebar({ sm, setSm }) {
  return (
    <ContainerSide control={sm}>
      <GiCancel
        size="3rem"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setSm("-45rem");
        }}
      />
    </ContainerSide>
  );
}
