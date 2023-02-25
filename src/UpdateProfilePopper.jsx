import {
  BioInput,
  BioText,
  BirthDiv,
  BirthInput,
  BirthText,
  Button,
  ButtonDiv,
  GenderDiv,
  GenderInput,
  GenderText,
  Heading,
  NameDiv,
  NameInput,
  ProfilePicDiv,
  ProfilePicInput,
  ProfilePicText,
  Propopcontainer,
  UpdateForm,
} from "./Profilepagestyle";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useState, useContext } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { Context } from "./Context";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export default function UpdateProfilePopper({ shows }) {
  const value = useContext(Context);
  const [nameState, setNameState] = useState();
  const [surnameState, setSurnameState] = useState();
  const [birthState, setBirthState] = useState();
  const [genderState, setGenderState] = useState();
  const [picState, setPicState] = useState();
  const [bioState, setBioState] = useState();
  const handleUpdate = async () => {
    await setDoc(doc(db, "users", value.users.uid), {
      name: nameState,
      birth: birthState,
      gender: genderState,
      bio: bioState,
    });

    updateProfile(auth.currentUser, {
      displayName: nameState + " " + surnameState,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
        setPicState(value.users.photoURL);
        console.log(picState);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };
  return (
    <Propopcontainer>
      <UpdateForm>
        <BsFillArrowLeftCircleFill
          size="2rem"
          onClick={() => {
            shows(false);
          }}
        />
        <Heading>Update Profile</Heading>
        <NameDiv>
          <NameInput
            placeholder="Name"
            onChange={(e) => {
              setNameState(e.target.value);
            }}
          ></NameInput>
          <NameInput
            placeholder="surname"
            onChange={(e) => {
              setSurnameState(e.target.value);
            }}
          ></NameInput>
        </NameDiv>
        <BirthDiv>
          <BirthText>Date of birth</BirthText>
          <BirthInput
            type="date"
            onChange={(e) => {
              setBirthState(e.target.value);
            }}
          />
        </BirthDiv>
        <GenderText>Gender</GenderText>
        <GenderDiv>
          <GenderInput
            type="checkbox"
            value="male"
            onChange={(e) => {
              setGenderState(e.target.value);
            }}
          />{" "}
          Male
          <GenderInput
            type="checkbox"
            value="female"
            onChange={(e) => {
              setGenderState(e.target.value);
            }}
          />{" "}
          Female
          <GenderInput
            type="checkbox"
            value="custom"
            onChange={(e) => {
              setGenderState(e.target.value);
            }}
          />{" "}
          Custom
        </GenderDiv>
        <ProfilePicDiv>
          <ProfilePicText>Update your profile picture</ProfilePicText>
          <ProfilePicInput
            type="file"
            onChange={(e) => {
              setPicState(e.target);
            }}
          />
        </ProfilePicDiv>
        <BioText>Tell us about yourself</BioText>
        <BioInput
          onChange={(e) => {
            setBioState(e.target.value);
          }}
        />
        <ButtonDiv>
          <Button onClick={handleUpdate}>Update</Button>
        </ButtonDiv>
      </UpdateForm>
    </Propopcontainer>
  );
}
