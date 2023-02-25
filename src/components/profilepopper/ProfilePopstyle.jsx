import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0.52),
    rgba(0, 0, 0, 0.73)
  );
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Display = styled.div`
  height: 50rem;
  width: 50rem;
  background: #fff;
  border-radius: 10px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  padding: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Image = styled.img`
  // border: 1px solid black;
  overflow: hidden;
  object-fit: cover;
  width: 20rem;
  height: 20rem;
`;

export const Div = styled.div``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
