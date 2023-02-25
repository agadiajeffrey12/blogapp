import { Container, SectionContainers, Sections } from "./Togglestyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Toggle({ late, tre, blo, pep, fav, text }) {
  const navigate = useNavigate();
  return (
    <Container>
      <SectionContainers>
        <Sections
          onClick={() => {
            late(true);
            tre(false);
            blo(false);
            pep(false);
            fav(false);
            text(false);
          }}
        >
          Latest
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(true);
            blo(false);
            pep(false);
            fav(false);
            text(false);
          }}
        >
          Trending
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(false);
            blo(true);
            pep(false);
            fav(false);
            text(false);
          }}
        >
          Top Bloggers
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(false);
            blo(false);
            pep(false);
            fav(true);
            text(false);
          }}
        >
          Favorites
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(false);
            blo(false);
            pep(false);
            fav(false);
            text(false);
            navigate("/Profile");
          }}
        >
          Profile
        </Sections>
      </SectionContainers>
    </Container>
  );
}
