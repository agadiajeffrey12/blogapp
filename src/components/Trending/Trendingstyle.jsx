import styled from "styled-components";

export const HeadingText = styled.p`
  font-size: 3rem;
  width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ContentWrapper = styled.div`
  width: 35%;
  //   border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SummaryText = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem;
  background: #ccc;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GridContent = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 1em;
  //   height: 50rem;
  //   border: 1px solid black;
  //   height: 100vh;
  height: fit-content;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  //   border: 1px solid black;
  height: 40rem;
`;

export const Image = styled.img`
  height: 50%;
  width: 100%;
  //   border: 1px solid black;
  object-fit: cover;
`;

export const TextWrap = styled.p`
  font-size: 1.7rem;
  font-family: "Poppins", sans-serif;
  //   border: 1px solid black;
  padding: 1rem 0;
  height: 50%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
