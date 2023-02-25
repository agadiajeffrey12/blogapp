import styled from "styled-components";

export const ProfContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  // border: 1px solid black;
  height: 100vh;
  margin: auto;
  padding: 2rem;
`;

export const Header = styled.header`
  width: 100%;
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  // border: 1px solid black;
`;

export const FirstSection = styled.div`
  flex: 0.7;
  height: 90vh;
  // border: 1px solid black;
`;

export const SecondSection = styled.div`
  flex: 1.3;
  height: 90vh;
  // border: 1px solid black;
`;

export const ImageSubSection = styled.div`
  width: 100%;
  // border: 1px solid black;
  // display: flex;
  padding: 1rem 0;
  gap: 2rem;
`;

export const ProfileImage = styled.img`
  height: 30rem;
  width: 70%;
  border: 2px solid black;
  object-fit: contain;
  // border-radius: 50%;
`;

export const NameSection = styled.div``;

export const SpanText = styled.p`
  font-size: 1.5rem;
  font-style: italics;
`;

export const RatingSection = styled.div`
  display: flex;
  width: 100%;
  // border: 1px solid black;
`;

export const Rating = styled.div`
  flex: 1;
`;
export const Following = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonUpdateProfile = styled.button`
  width: 15rem;
  height: 3rem;
  margin-top: 1rem;
  cursor: pointer;
  background: #111;
  color: #fff;
`;

// profile update popper

export const Propopcontainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0.52),
    rgba(0, 0, 0, 0.73)
  );
  top: 0;
  left: 0;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UpdateForm = styled.div`
  height: 60rem;
  width: 80rem;
  background: #fff;
  padding: 1rem;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

export const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem 0;
`;

export const NameInput = styled.input`
  height: 4rem;
  width: 49%;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding-left: 1rem;
`;

export const BirthDiv = styled.div`
  margin-top: 2rem;
`;

export const BirthText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const BirthInput = styled.input``;

export const GenderDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  gap: 2rem;
`;

export const GenderText = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const GenderInput = styled.input``;

export const ProfilePicDiv = styled.div`
  margin-top: 2rem;
`;

export const ProfilePicText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ProfilePicInput = styled.input``;

export const BioText = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const BioInput = styled.textarea`
  resize: none;
  width: 100%;
  height: 15rem;
  padding: 1rem;
  outline:none;s
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Button = styled.button`
  width: 15rem;
  height: 4rem;
  cursor: pointer;
  color: #ccc;
  background: #111;
`;
