import styled from "styled-components";
import { black, white } from "../constants/colors";

const StyledDiv = styled.div`
  background-color: ${black};
  color: ${white};
  width: 65%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  padding: 7%;
  padding-bottom: 20%;
  
  h1{
    font-family: 'Passion One', cursive;
    font-size: 106px;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
  }

  h2{
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    line-height: 64px;
    text-align: left;
  }
`;

export default StyledDiv;
