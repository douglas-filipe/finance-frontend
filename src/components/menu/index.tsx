import { Container } from "./styles";
import { AiFillHome } from "react-icons/ai"; //home
import { AiFillPlusCircle } from "react-icons/ai"; //plus
import { FaUserCircle } from "react-icons/fa";
import { CustomLink } from "../customLink";

export const Menu = () => {
  return (
    <Container>
      <CustomLink to="/">
        <AiFillHome />
      </CustomLink>

      <AiFillPlusCircle className="Add" />

      <CustomLink to="/user">
        <FaUserCircle />
      </CustomLink>
    </Container>
  );
};
