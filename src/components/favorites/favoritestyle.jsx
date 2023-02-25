import styled from "styled-components";

export const FavoriteContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   border: 1px solid black;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20rem;
  position: relative;
  margin-bottom: 5rem;
`;

export const Heading = styled.h2`
  font-size: 3rem;
`;

export const Input = styled.input`
  height: 5rem;
  width: 50rem;
  border-radius: 2rem;
  outline: none;
  border: 1px solid black;
  background: transparent;
  padding-left: 2rem;
  font-size: 1.5rem;
`;

export const FavDiv = styled.div`
  width: 90rem;
  height: 15rem;
  background: #cccccc;
  border-radius: 10px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;

export const FavImage = styled.img`
  height: 11rem;
  width: 11rem;
  // border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const DivText = styled.p`
  font-size: 1.5rem;
  max-width: 50rem;
`;
