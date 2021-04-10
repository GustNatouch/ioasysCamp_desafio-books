import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 272px;
    height: 160px;
    left: 115px;
    top: 120px;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
`

export const PlaceholderCapa = styled.div`
    /* Placeholder capa*/

    display: flex;

    justify-content: space-around;
    align-items: center;

    width: 113px;
    height: 160px;
    left: 115px;
    top: 120px;
`

export const ImageCard = styled.img`
    /* Book 1 */

    //position: ab;
    display: flex;
    width: 81px;
    height: 122px;
    left: 131px;
    top: 139px;

    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`

export const BookDetails = styled.div`
    position: absolute;

    width: 159px;
    height: 160px;

    display: flex;

    left: 115px;
    top: 0px;
`

export const TitleAuthorWrapper = styled.div`
    position: relative;
    width: 159px;
    height: 40px;

    //border: 1px solid red;
    display: flex;


    justify-content: space-between;
    align-items:center;
`

export const BookTitle = styled.label`
    /* Title */
    position: relative;

    width: 127px;
    height: 20px;
    top: 10px;

    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 143% */


    color: #333333;
`

export const BookAuthor = styled.label`
    /* Authors */
    position: absolute;

    width: 98px;
    height: 20px;
    top: 40px;

    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */


    color: #AB2680;
`

export const BookDescription = styled.text`
    /* Description */
    position: absolute;

    width: 104px;
    height: 60px;
    left: 0px;
    top: 70px;

    font-family: Heebo;
    font-size: 11px;
    line-height: 20px;
    /* or 167% */


    color: #999999;
`
