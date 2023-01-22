import { Container, SectionContainers, Sections } from "./Togglestyle";
import { useState } from "react";

export default function Toggle({ late, tre }) {
  const handleBord = (e) => {
    e.target.style.borderTop = "2px solid black";
  };
  return (
    <Container>
      <SectionContainers>
        <Sections
          onClick={() => {
            late(true);
            tre(false);
          }}
        >
          Latest
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(true);
          }}
        >
          Trending
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(false);
          }}
        >
          Top Bloggers
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(false);
          }}
        >
          Favorites
        </Sections>
        <Sections
          onClick={() => {
            late(false);
            tre(false);
          }}
        >
          Profile
        </Sections>
      </SectionContainers>
    </Container>
  );
}
