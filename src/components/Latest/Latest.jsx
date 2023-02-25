import { ViewContainer, SectionList, SectionWrapper } from "../constant";
import { Image, Heading, Image2, Text } from "./Lateststyle";
// import drive from "../../public/blog-visuals.jpg";
import dg from "../../assets/dg.png";

export default function Latest({ setSm, art, late, text }) {
  const arr = [
    { name: "Ecomerce", image: dg, text: "maro maro maro" },
    { name: "Understanding life", image: dg, text: "maro maro maro" },
    { name: "Finding Peace", image: dg, text: "maro maro maro" },
    { name: "The love of God", image: dg, text: "maro maro maro" },
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
            <Image src={item.image} />
            <Heading
              onClick={() => {
                late(false);
                art(true);
                text(item);
              }}
            >
              {item.name}
            </Heading>
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
            <Heading>{item.name}</Heading>
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
