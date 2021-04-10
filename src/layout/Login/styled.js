import styled from 'styled-components';
import back from "../../images/BackgroundImage.png";

export const StyledLoginWrapper = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url(${back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledError = styled.p`
  color: red;
  font-weight: bold;
`;