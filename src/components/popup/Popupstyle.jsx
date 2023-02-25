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
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
