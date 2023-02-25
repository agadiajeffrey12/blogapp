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
import { AiTwotoneLike } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { useState } from "react";

export default function Bloggin({ item, arrays, set, show, personal }) {
  const handle = (e) => {
    set(() => e);
    show(true);
  };

  return (
    <Bloggers onClick={() => handle(item)}>
      <Images src={item.image} />
      <Author>{item.name}</Author>
      <LikesAndPages>
        <Secs>
          <AiTwotoneLike /> {item.likes}K likes
        </Secs>
        <Secs>
          {item.pages}
          <BiBookContent />
        </Secs>
      </LikesAndPages>
    </Bloggers>
  );
}
