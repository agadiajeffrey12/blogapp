import { Display, Image, Wrap, Text } from "./Popupstyle";
import load from "../../assets/load.gif";

export default function Popup() {
  return (
    <Wrap>
      <Display>
        <Image src={load} />
        <Text>Loading...</Text>
      </Display>
    </Wrap>
  );
}
