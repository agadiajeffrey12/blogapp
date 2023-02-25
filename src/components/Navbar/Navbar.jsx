import { Container, Icon } from "../constant";
import { NavContainer, NavSections, NavText, Button } from "./navbarstyle";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useContext } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar({ setSm, set, late, tre, re, pep, fav, art }) {
  const [regButton, setRegButton] = useState(false);
  const [logOutButton, setLogOutButton] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("m");
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setRegButton(false);
        setLogOutButton(true);
      } else {
        setRegButton(true);
        setLogOutButton(false);
      }
    });
  }, []);
  return (
    <NavContainer>
      <NavSections>
        <RiMenu4Fill
          size="2.5rem"
          style={{ cursor: "pointer" }}
          className="icon"
          onClick={() => {
            setSm((curr) => {
              curr === "-45rem" ? "0" : "-45rem";
            });
          }}
        />
        <NavText>This is where we tell stories</NavText>
      </NavSections>
      <NavSections>
        {regButton && (
          <Button
            onClick={() => {
              set(false);
              late(false);
              tre(false);
              re(true);
              pep(false);
              fav(false);
              art(false);
            }}
          >
            Register
          </Button>
        )}
        {logOutButton && <Button onClick={handleLogout}>Log-out</Button>}
        <Button>Contact</Button>
      </NavSections>
    </NavContainer>
  );
}
