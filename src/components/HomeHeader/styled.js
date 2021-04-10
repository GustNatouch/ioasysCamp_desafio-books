import styled from "styled-components";

export const StyledHomeHeaderWrapper = styled.div`
    position: absolute;
    width: 1130px;
    height: 40px;
    left: 115px;
    top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledHomeTitleLogoWrapper = styled.div`
    position: flex;
    width: 198px;
    height: 40px;
    left: 115px;
    top: 272px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    display: flex;
`

export const StyledHomeHeaderTitle = styled.h1`
    width: 77px;
    height: 40px;
    left: 236px;
    top: 40px;

    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
`

export const StyledHomeImage = styled.img`    // logo
    left: 8.42%;
    right: 83.94%;
    top: 5.47%;
    bottom: 89.84%;

    width: 104,4px;
    height: 36px;
`

export const StyledHomeWelcomeWrapper = styled.div` // div ao redor do bem vindo e do botão de logout
    display: flex;
    width: 169px;
    height: 32px;
    left: 1076px;
    top: 44px;
    align-items: center;
    justify-content: space-between;
`

export const StyledHomeGreeting = styled.label` // Bem vindo
    width: 121px;
    height: 16px;
    left: 1076px;
    top: 52px;

    font-family: 'Heebo';
    font-weight: 300;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;

    text-align: right;
`

export const StyledNome = styled.label` // nome
    font-family: 'Heebo';
    font-weight: 600;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;

    text-align: right;

`

export const StyledHomeLogOut = styled.img` // imagem de logout = porta com setinha
    left: 89.39%;
    right: 9.44%;
    top: 6.77%;
    bottom: 91.15%;
`

export const StyledHomeButton = styled.button` // botão de logout
    left: 91.14%;
    right: 6.52%;
    top: 5.73%;
    bottom: 90.1%;
    width: 32px;
    height: 32px;

    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    color: white;
    
    border-radius: 50%;
`
