import styled from 'styled-components';
import back from "../../images/background2.png";

export const StyledHomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  @media(min-width: 770px){
    height: 100vh;
  }
  
`;

export const StyledError = styled.p`
  color: red;
  font-weight: bold;
`;