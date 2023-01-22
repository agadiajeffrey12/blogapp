import styled from "styled-components";
import { ViewContainer2 } from "../constant";
import {
  ContentWrapper,
  GridContent,
  HeadingText,
  SummaryText,
  Content,
  Image,
  TextWrap,
} from "./Trendingstyle";
import drive from "../../assets/blog-visuals.jpg";
import un from "../../assets/X-blog.jpg";

const Wrapper = styled.div`
  height: 35rem;
  width: 100%;
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url(${(props) => props.back});
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
  border: none;
  //   filter: blur(2px);
  //   -webkit-filter: blur(2px);
  background-color: rgba(76, 175, 80, 0.3);
  font-family: "Poppins";
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  padding: 2rem 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Trending() {
  const arr = [
    { image: drive, details: "i like egg" },
    { image: un, details: "i like rice" },
    { image: drive, details: "i like plantain" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
  ];

  const arr2 = [
    { image: drive, details: "i like egg" },
    { image: un, details: "i like rice" },
    { image: drive, details: "i like plantain" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
    { image: un, details: "i like fanta" },
    { image: drive, details: "i like fanta" },
  ];
  return (
    <ViewContainer2>
      <ContentWrapper>
        {arr.map((item, i) => (
          <>
            <Wrapper key={i} back={item.image}>
              <HeadingText>{item.details}</HeadingText>
            </Wrapper>
            <SummaryText>
              when you called i came, when i came you called it was just like a
              dream
            </SummaryText>
          </>
        ))}
      </ContentWrapper>
      <GridContent>
        {arr2.map((item, i) => (
          <Content key={i}>
            <Image src={item.image} />
            <TextWrap>{item.details}</TextWrap>
          </Content>
        ))}
      </GridContent>
    </ViewContainer2>
  );
}
