import styled from "styled-components"


const BookShelfContainer = styled.div`
background-image: url(/assets/bookcase.svg);
transform: translateY(-160px);
background-size: 400px;
display: flex;
height: 245px;
width: 400px;
z-index: 1;
margin-left: 70px;
`
const GrandmasImage = styled.img`
    z-index: 999;
`

export function BookShelf () {
    return(
        <>
        <BookShelfContainer>
           
        </BookShelfContainer>
        

        </>
    )
}