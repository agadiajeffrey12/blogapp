import {
  ProfContainer,
  Header,
  Container,
  FirstSection,
  SecondSection,
  ImageSubSection,
  ProfileImage,
  NameSection,
  SpanText,
  RatingSection,
  Rating,
  Following,
  ButtonUpdateProfile,
} from "./Profilepagestyle";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState, useContext } from "react";
import { Context } from "./Context";
import UpdateProfilePopper from "./UpdateProfilePopper";

export default function ProfilePage() {
  const [emailState, setEmailState] = useState(null);
  const [dateJoined, setDateJoined] = useState(null);
  const [userNameState, setUserNameState] = useState();
  const [forms, setForms] = useState(false);
  const value = useContext(Context);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        navigate("/");
      } else {
        setEmailState(value.users.email);
        setDateJoined(value.users.metadata.creationTime);
        setUserNameState(value.users.displayName);
      }
    });
  }, []);
  const navigate = useNavigate();
  return (
    <ProfContainer>
      <Header>
        <BsFillArrowLeftCircleFill
          size="3rem"
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </Header>
      <Container>
        <FirstSection>
          <ImageSubSection>
            <ProfileImage />
            <NameSection>
              <SpanText>{userNameState}</SpanText>
              <SpanText>{emailState}</SpanText>
              <SpanText>joined @ {dateJoined}</SpanText>
              <ButtonUpdateProfile
                onClick={() => {
                  setForms(true);
                }}
              >
                Update profile
              </ButtonUpdateProfile>
            </NameSection>
          </ImageSubSection>
        </FirstSection>
        <SecondSection>
          <RatingSection>
            <Rating>
              <AiOutlineStar size="2rem" />
              <AiOutlineStar size="2rem" />
              <AiOutlineStar size="2rem" />
              <AiOutlineStar size="2rem" />
              <AiOutlineStar size="2rem" />
            </Rating>
            <Following>
              <SpanText>maro</SpanText>
              <RiUserFollowLine size="2rem" />
            </Following>
          </RatingSection>
        </SecondSection>
        {forms && <UpdateProfilePopper shows={setForms} />}
      </Container>
    </ProfContainer>
  );
}
