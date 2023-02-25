import { Input, SocialContainer, SubmitButton } from "../constant";
import {
  Div,
  Image,
  RegForm,
  RegisterationContainer,
  Button,
  LoginText,
  Text,
} from "./Registerstyle";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register({ show }) {
  const navigate = useNavigate();
  const [contain, setContain] = useState(true);
  const [logs, setLogs] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegisteration = () => {
    console.log("m");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/Profile");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleSignIn = () => {
    console.log("maro");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        navigate("/Profile");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
      });
  };

  const register = (
    <Div>
      <Text>Create Account</Text>
      <br />
      <SocialContainer>
        <FcGoogle size="3rem" style={{ cursor: "pointer" }} />
        <AiFillFacebook size="3rem" style={{ cursor: "pointer" }} />
      </SocialContainer>
      <Input
        type="email"
        placeholder="JohnDoe@gmail.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Input type="password" placeholder="confirm password" />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <SubmitButton type="button" onClick={handleRegisteration}>
        Register
      </SubmitButton>
    </Div>
  );
  const login = (
    <Div>
      <Text>Log in</Text>
      <br />
      <SocialContainer>
        <FcGoogle size="3rem" style={{ cursor: "pointer" }} />
        <AiFillFacebook size="3rem" style={{ cursor: "pointer" }} />
      </SocialContainer>
      <Input
        type="email"
        placeholder="JohnDoe@gmail.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <SubmitButton type="button" onClick={handleSignIn}>
        Login
      </SubmitButton>
    </Div>
  );
  const quest = (
    <>
      <LoginText>Already Have An Account?</LoginText>
      <Button
        type="button"
        onClick={() => {
          setContain(false);
          setLogs(true);
        }}
      >
        Log in
      </Button>
    </>
  );
  const quests = (
    <>
      <LoginText>Don't Have An Account?</LoginText>
      <Button
        type="button"
        onClick={() => {
          setContain(true);
          setLogs(false);
        }}
      >
        Register
      </Button>
    </>
  );
  return (
    <RegisterationContainer>
      <RegForm>
        {contain && register}
        {logs && login}
        <Image>
          {contain && quest}
          {logs && quests}
        </Image>
      </RegForm>
    </RegisterationContainer>
  );
}
