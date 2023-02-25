import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  //   max-width: 2000px;
  margin: auto;
  height: auto;
  overflow-x: hidden;
  // overflow-y: scroll;
  // border: 1px solid black;
`;

export const Icon = styled.div`
  background-color: #ccc;
  display: none;
`;

export const ViewContainer = styled.section`
  width: 100%;
  max-width: 1700px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  overflow-x: hidden;
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

export const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  height: 4rem;
  width: 30rem;
  border-radius: 10px;
  outline: none;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

export const SubmitButton = styled.button`
  width: 20rem;
  height: 5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 10px;
  font-size: 1.7rem;
  cursor: pointer;
`;
