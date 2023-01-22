import { ViewContainer, SectionList, SectionWrapper } from "../constant";
import { Image, Heading, Image2, Text } from "./Lateststyle";
// import drive from "../../public/blog-visuals.jpg";

export default function Latest({ setSm }) {
  const arr = [
    "Ecomerce",
    "Understanding life",
    "Finding Peace",
    "The love of God",
  ];
  return (
    <ViewContainer
      onClick={() => {
        setSm("-45rem");
      }}
    >
      <SectionList>
        {arr.map((item, i) => (
          <SectionWrapper key={i}>
            <Image />
            <Heading>{item}</Heading>
            <Text>
              what is the name of the boy that stole the book yesterday
            </Text>
          </SectionWrapper>
        ))}
      </SectionList>
      <SectionList>
        {arr.map((item, i) => (
          <SectionWrapper key={i}>
            <Image2 />
            <Heading> dadfadsfasdfasdfadsf</Heading>
          </SectionWrapper>
        ))}
      </SectionList>
      <SectionList>
        {arr.map((item, i) => (
          <SectionWrapper key={i}>
            <Heading>{item}</Heading>
            <Text>
              Everytime i see the way you look at me i just laugh knowing fully
              well that there were times you disregarded me but now your crave
              for my presence like you crave for water
            </Text>
            <Image />
          </SectionWrapper>
        ))}
      </SectionList>
    </ViewContainer>
  );
}
