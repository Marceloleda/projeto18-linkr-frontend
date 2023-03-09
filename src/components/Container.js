import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;

  img{
    margin-top: 65px;
  }

  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  }
`;

export default Container;