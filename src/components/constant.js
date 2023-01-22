import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  //   max-width: 2000px;
  margin: auto;
  height: auto;
  overflow-x: hidden;
`;

export const Icon = styled.div`
  background-color: #ccc;
  display: none;
`;

export const ViewContainer = styled.section`
  width: 100%;
  max-width: 1700px;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  overflow-x: hidden;
  oveflow-y: scroll;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ViewContainer2 = styled.section`
  width: 100%;
  max-width: 1700px;
  margin: auto;
  height: auto;
  display: flex;
  // justify-content: center;
  padding: 0 1rem;
  overflow-x: hidden;
  oveflow-y: scroll;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SectionList = styled.div`
  height: auto;
  width: fit-content;
  overflow-x: hidden;
`;

export const SectionWrapper = styled.div`
  margin-bottom: 2rem;
`;
