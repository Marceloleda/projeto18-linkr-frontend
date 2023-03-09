import { useContext, useState } from "react";
import styled from "styled-components";
import { black, white } from "../constants/colors";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";

export default function Header() {
  const [visible, setVisible] = useState(false);
  //const { user } = useContext(UserContext);

  return (
    <HeaderContainer >
      <Link to={"/"}>Linkr</Link>
      <div>
        {visible ? (
          <MdKeyboardArrowUp size={38} onClick={() => setVisible(!visible)} />
        ) : (
          <MdKeyboardArrowDown size={38} onClick={() => setVisible(!visible)} />
        )}
        <UserImage src="http://tny.im/ufP" />
        {/* <UserImage src={user.image ? user.image : "http://tny.im/ufP"} /> */}
      </div>
      <Logout show={visible} to={"/"}>
        <button>Logout</button>
      </Logout>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: ${black};
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 25px;
  color: white;
  a {
    font-size: 49px;
    font-family: "Passion One", cursive;
    text-decoration: none;
    color: ${white};
  }
`;

const UserImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 98.5px;
  object-fit: contain;
`;

const Logout = styled(Link)`
  width: 11%;
  height: 47px;
  background-color: ${black};
  position: absolute;
  right: 0;
  margin-top: 110px;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  button {
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: white;
    font-size: 19px;
    font-weight: 700;
    font-family: "Passion One", cursive;
    border: none;
    border-radius: 0px 0px 0px 20px;
    cursor: pointer;
  }
`;
