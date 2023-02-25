import styled from "styled-components";
import drive from "../../assets/blog-visuals.jpg";

export const RegisterationContainer = styled.div`
  width: 100%;
  height: 100vh;
  //   border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegForm = styled.form`
  height: 50rem;
  width: 100rem;
  background: #fff;
  display: flex;
`;

export const Div = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 6s ease-in-out;
`;

export const Image = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
  background: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0.52),
    rgba(0, 0, 0, 0.73)
  ),
  url(${drive})});
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  gap: 2rem;
`;

export const LoginText = styled.p`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
`;

export const Button = styled.button`
  padding: 1rem 3rem;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 1s ease-in-out;
  font-family: "Poppins", sans-serif;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
