import styled from "styled-components"


const BookShelfContainer = styled.div`
margin-top: 20px;
margin-left: 6rem;
background-image: url(/assets/bookcase.svg);
background-size: 450px;
height: 270px;
width: 450px;

`

export function BookShelf () {
    return(
        <BookShelfContainer>
            <h1>ALO</h1>
        </BookShelfContainer>
    )
}