import {
  Container,
  ContentContainer,
  Image,
  ProfileContainer,
  SmallText,
  Text,
  Div,
  DivItem,
  BookWrapper,
  BookItem,
  BookText,
} from "./personalBlogstyle";
import load from "../../assets/X-blog.jpg";
import { SubmitButton } from "../constant";
import { RiUserFollowLine } from "react-icons/ri";
import { useState } from "react";

export default function PersonalBlog({ items }) {
  const [count, setCount] = useState(items.likes);
  const [follow, setFollow] = useState(true);
  const [unfollow, setUnfollow] = useState(false);
  const [colorState, setColorState] = useState("black");
  // if (items.likes.toString().length > 3) {
  //   const first = Array.from(items.likes.toString()).slice(0, -3);
  //   // setCount(Array.from(items.likes.toString()).slice(0, -3));
  // } else {
  //   setCount(items.likes);
  // }
  console.log(count);
  return (
    <Container>
      <ProfileContainer>
        <Text>{items.name}</Text>
        <SmallText>@{items.name}</SmallText>
        <Image src={items.image} />
        {follow && (
          <SubmitButton
            onClick={() => {
              setCount(count + 1);
              setColorState("green");
              setFollow(false);
              setUnfollow(true);
            }}
          >
            Follow {items.name}
          </SubmitButton>
        )}
        {unfollow && (
          <SubmitButton
            onClick={() => {
              setCount(count - 1);
              setColorState("black");
              setFollow(true);
              setUnfollow(false);
              console.log(count.toString().length);
              if (count.toString().length == 4) {
              }
            }}
          >
            unfollow {items.name}
          </SubmitButton>
        )}
      </ProfileContainer>
      <ContentContainer>
        <Text>About {items.name}</Text>
        <SmallText>{items.description}</SmallText>
        <Div>
          <DivItem>{items.pages} Books</DivItem>
          <DivItem>
            {count} followers{" "}
            <RiUserFollowLine style={{ color: `${colorState}` }} />
          </DivItem>
        </Div>
        <Text>Some of {items.name}'s books</Text>
        <BookWrapper>
          <BookItem>
            <BookText>my name is maro</BookText>
          </BookItem>
          <BookItem>item</BookItem>
          <BookItem>item</BookItem>
          <BookItem>item</BookItem>
        </BookWrapper>
      </ContentContainer>
    </Container>
  );
}
