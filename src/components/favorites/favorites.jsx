import {
  FavoriteContainer,
  Div,
  Heading,
  Input,
  FavDiv,
  FavImage,
  DivText,
} from "./favoritestyle";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import im from "../../assets/dg.png";

export default function Favorite() {
  return (
    <FavoriteContainer>
      <Div>
        <Heading>
          {" "}
          <AiOutlineStar />
          Favorites
        </Heading>
        <Input />
        <BiSearchAlt
          style={{
            position: "absolute",
            fontSize: "3rem",
            right: "1rem",
            cursor: "pointer",
          }}
        />
      </Div>
      <FavDiv>
        <FavImage src={im} />
        <DivText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt
          iste alias?
        </DivText>
        <BsFillSuitHeartFill size="3rem" />
      </FavDiv>
      <FavDiv>
        <FavImage src={im} />
        <DivText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt
          iste alias?
        </DivText>
        <BsFillSuitHeartFill size="3rem" />
      </FavDiv>
      <FavDiv>
        <FavImage src={im} />
        <DivText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt
          iste alias?
        </DivText>
        <BsFillSuitHeartFill size="3rem" />
      </FavDiv>
    </FavoriteContainer>
  );
}
