import {
  BlogHeading,
  Container,
  Bloggers,
  Grid,
  Images,
  Author,
  LikesAndPages,
  Secs,
} from "./Bloggerstyle";
import load from "../../assets/dg.png";
import trys from "../../assets/X-blog.jpg";

import { useState } from "react";
import ProfilePopup from "../profilepopper/ProfilePopper";
import Bloggin from "./Bloggin";

export default function Blog({ showing, pep, blo, person }) {
  const [pop, setPop] = useState(false);
  const [name, setName] = useState([]);
  const [arra, setArr] = useState({});
  const arr = [
    {
      name: "jefferson peters",
      likes: 2000,
      pages: 45,
      image: load,
      description:
        "hi i am a boy i like writing so much, that is why i have so many books as you can you can  support me please don't be stingy. i have 19phd and i am very good at lying and singing",
    },
    {
      name: "peters",
      likes: 270,
      pages: 5,
      image: trys,
      description: "hi i am a boy",
    },
    {
      name: "king",
      likes: 20,
      pages: 17,
      image: load,
      description: "hi i am a boy",
    },
    {
      name: "Jacob",
      likes: 70,
      pages: 30,
      image: trys,
      description: "hi i am a boy",
    },
    {
      name: "philip",
      likes: 20,
      pages: 30,
      image: load,
      description: "hi i am a boy",
    },
    {
      name: "marvel",
      likes: 10,
      pages: 90,
      image: trys,
      description: "hi i am a boy",
    },
    {
      name: "Johnson",
      likes: 5,
      pages: 20,
      image: load,
      description: "hi i am a boy",
    },
    {
      name: "peru",
      likes: 2,
      pages: 3,
      image: trys,
      description: "hi i am a boy",
    },
  ];

  const handleTransfer = (e) => {
    setPop(true);
    // console.log(name);
  };
  return (
    <Container>
      <BlogHeading>Bloggers</BlogHeading>
      <Grid>
        {arr.map((item, i) => (
          <Bloggin
            item={item}
            key={i}
            arrays={arra}
            set={setArr}
            show={setPop}
          />
        ))}
        {pop && (
          <ProfilePopup
            items={arra}
            show={setPop}
            shows={showing}
            personal={pep}
            remove={blo}
            character={person}
          />
        )}
      </Grid>
    </Container>
  );
}
