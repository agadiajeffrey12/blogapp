import styled from "styled-components";
import ima from "../../assets/tre.jpg";

export const Container = styled.div`
  width: 100vw;
  max-width: 1600px;
  margin: auto;
  //   border: 1px solid black;
  display: flex;
  gap: 5rem;
  padding: 0 3rem;
`;

export const ProfileContainer = styled.div`
  width: 40rem;
  height: 50rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  height: 80rem;
  width: 70rem;
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Image = styled.img`
  // border: 1px solid black;
  overflow: hidden;
  object-fit: cover;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export const Div = styled.div`
  height: 20rem;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  font-size: 3rem;
  font-weight: 600;
  margin: 3rem 0;
`;

export const DivItem = styled.div``;

export const BookWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  // border
`;

export const BookItem = styled.div`
  height: 20rem;
  width: 20rem;
  background: url(${ima});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookText = styled.p`
  text-align: center;
  // white-space: nowrap;
  // overflow: hidden;
  width: 80%;
  text-overflow: ellipsis;

  &:first-letter {
    text-transform: uppercase;
  }
`;

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

export const SmallText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
