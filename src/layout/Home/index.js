import React from "react";
import { StyledHomeWrapper } from "./styled.js";
import { Header } from "../../components/HomeHeader";
import { Card } from "../../components/HomeCard";
import img from "../../images/livroCapa2.png";

export const Home = () => {
    return(
        <StyledHomeWrapper>
            <Header title="Books" />,
            <Card />,
            <Card left = {"130px"} top = {"120px"} title= {"Don’t Make me Think"} img={img} author={"Steve Krug"} paginas={"150 páginas"} editora={"Editora Loyola"} pub={"Publicado em 2020"}/>
        </StyledHomeWrapper>

    )
};