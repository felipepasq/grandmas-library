import styled from "styled-components";
import { Board } from "./Components/Bookshelf/Board/Board";
import { BookShelf } from "./Components/Bookshelf/Bookshelf";
import { GlobalStyle } from "./styles/global";


const TopContainer = styled.div`
  background-image: url('/assets/bg_stripes.svg');
  display: flex;
  flex-direction: column;
  height: 50%;
  

`
const LogoImage = styled.img`
  height: 200px;
  margin-top: 20px;
`
const GroundContainer = styled.div`
background-image: url('/assets/ground.svg');
display: block;
height: 50%;
`


export function App() {
  return (
    <>
    <GlobalStyle/>
    <TopContainer>
      <LogoImage src="assets/logo.svg" alt="logoImage"/>
    </TopContainer>
    <GroundContainer> 
      {/* <BookShelf/>
      <Board/>  */}
    </GroundContainer>
    </>
    
  );
}
