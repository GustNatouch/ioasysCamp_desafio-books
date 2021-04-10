import React from "react";
import { StyledHeaderTitle, StyledHeaderWrapper, StyledImage } from "./styled";
import logo from "../../images/logo.png";

export const Header = ({ title = "Books", img = logo}, ...props) => {
    return (
        <StyledHeaderWrapper {...props}>
            <StyledImage src= {img} />
            <StyledHeaderTitle>{ title }</StyledHeaderTitle>
        </StyledHeaderWrapper>
    )
}