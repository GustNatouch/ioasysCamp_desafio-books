import React from "react";
import examplePic from "../../images/livroCapa.png";
import { BookAuthor, BookDescription, ImageCard, PlaceholderCapa, StyledCardWrapper, BookTitle, BookDetails, TitleAuthorWrapper } from "./styled";

export const Card = ({left = "115px", top = "120px", title = "Crossing the Chasm", img = examplePic, author = "Geoffrey A. Moore", paginas = "150 páginas", editora = "Editora Loyola", pub = "Publicado em 2020"}, ...props) => {
    return (
        <StyledCardWrapper>

            <PlaceholderCapa>
                <ImageCard src = {img} />
            </PlaceholderCapa>

            <BookDetails>
                
                <TitleAuthorWrapper>
                    <BookTitle>{title}</BookTitle>
                    <BookAuthor>{author}</BookAuthor>
                </TitleAuthorWrapper>

                <BookDescription>
                    {paginas}<br />
                    {editora}<br />
                    {pub}
                </BookDescription>

            </BookDetails>

        </StyledCardWrapper>
    )
}