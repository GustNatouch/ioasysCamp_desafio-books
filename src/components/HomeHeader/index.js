import React from "react";
import { StyledHomeButton, StyledHomeGreeting, StyledHomeHeaderTitle, StyledHomeHeaderWrapper, StyledHomeLogOut, StyledHomeImage, StyledHomeWelcomeWrapper, StyledNome, StyledHomeTitleLogoWrapper} from "./styled";
import logo from "../../images/logo2.png";
import logout from "../../images/logout.png";

export const Header = ({ title = "Books", img = logo, nome = "Guilherme"}, ...props) => {
    return (
        <StyledHomeHeaderWrapper {...props}>
            
            <StyledHomeTitleLogoWrapper>
                <StyledHomeImage src= { img } />
                <StyledHomeHeaderTitle>{ title }</StyledHomeHeaderTitle>
            </StyledHomeTitleLogoWrapper>

            <StyledHomeWelcomeWrapper>
                    <StyledHomeGreeting>Bem vindo, <StyledNome>{nome}!</StyledNome></StyledHomeGreeting>
                    <StyledHomeButton>
                        <a href="/" style={{textDecoration: "none",}}>
                            <StyledHomeLogOut src = {logout} />
                        </a>
                    </StyledHomeButton>
            </StyledHomeWelcomeWrapper>

        </StyledHomeHeaderWrapper>
    )
}