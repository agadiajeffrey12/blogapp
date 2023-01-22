import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionContainers = styled.div`
  width: 90%;
  border-top: 1px solid black;
  display: flex;
`;

export const Sections = styled.button`
  height: 3rem;
  width: auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  //   &:focus {
  //     border-top: 3px solid black;
  //   }
`;
