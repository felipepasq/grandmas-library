import styled from "styled-components"


const BookShelfContainer = styled.div`
margin-top: 20px;
margin-left:5rem;
background-image: url(/assets/bookcase.svg);
background-size: 400px;
height: 240px;
width: 400px;
z-index:1;

`

export function BookShelf () {
    return(
        <BookShelfContainer>

        </BookShelfContainer>
    )
}