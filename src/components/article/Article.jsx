import { Container, Wrapper, Image, Head, Text } from "./Articlestyle";

export default function Article({ late, cont }) {
  return (
    <Container>
      <Wrapper>
        <Image src={cont.image} />
        <Head>{cont.name}</Head>
        <Text>{cont.text}</Text>
      </Wrapper>
    </Container>
  );
}
