import styled from "styled-components";

export const NavContainer = styled.section`
  width: 100%;
  height: 4.5rem;
  display: flex;
`;

export const NavSections = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;

  &:nth-child(2) {
    justify-content: flex-end;
  }
`;

export const NavText = styled.p`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 9rem;
  height: 4rem;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  transition: all 1s ease-in-out;

  &:hover {
    background: transparent;
    border: 1px solid black;
    border-radius: 10px;
    color: #000;
  }
`;
