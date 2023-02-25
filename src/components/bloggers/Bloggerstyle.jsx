import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1600px;
  margin: auto;
  //   border: 1px solid black;
`;

export const BlogHeading = styled.h2`
  font-size: 3rem;
  margin-left: 4rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
  padding: 0 1rem;
`;

export const Bloggers = styled.div`
  height: 25rem;
  width: 25rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const Images = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  //   border: 1px solid black;
  object-fit: cover;
`;

export const Author = styled.p`
  font-size: 2rem;
`;

export const LikesAndPages = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
`;

export const Secs = styled.div`
  font-size: 1.5rem;
  //   border: 1px solid black;
  flex: 1;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:nth-child(2) {
    justify-content: flex-end;
  }
`;
