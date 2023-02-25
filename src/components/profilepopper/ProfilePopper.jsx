import {
  Display,
  Image,
  Wrap,
  Text,
  Flex,
  Div,
  ButtonContainer,
} from "./ProfilePopstyle";
import load from "../../assets/load.gif";
import { SubmitButton } from "../constant";
import { BiArrowBack } from "react-icons/bi";

export default function ProfilePopup({
  items,
  show,
  shows,
  personal,
  remove,
  character,
}) {
  return (
    <Wrap>
      <Display>
        <Div onClick={() => show(false)}>
          <BiArrowBack size="2.5rem" />
        </Div>
        <Flex>
          <Image src={items.image} />
          <Div>
            <Text>{items.name}</Text>
            <Text>{items.likes}k likes</Text>
            <Text>{items.pages} blog posts</Text>
          </Div>
        </Flex>
        <Text>{items.description}kkk</Text>
        <ButtonContainer>
          <SubmitButton
            onClick={() => {
              show(false);
              shows(true);
              character(items);
              setTimeout(() => {
                shows(false);
                personal(true);
                remove(false);
              }, 5000);
            }}
          >
            View profile
          </SubmitButton>
        </ButtonContainer>
      </Display>
    </Wrap>
  );
}
