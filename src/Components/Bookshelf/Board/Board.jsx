import styled from "styled-components";

const BoardContainer = styled.div`
background-image: url('/assets/board.svg');
background-size: 320px;
height: 145px;
width: 320px;
position: absolute;
bottom: 10px;
`

const GrandmasImage = styled.img`
    position: absolute;
    top: 30px;
    transform: translateX(-50px);
    z-index: 99;
`

export function Board() {

    return(
    <>
        <BoardContainer>
        </BoardContainer>
        <GrandmasImage src="assets/lady.svg"/>
    </>
    )

}