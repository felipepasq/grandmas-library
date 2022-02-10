import styled from "styled-components";
import { Board } from "./Components/Bookshelf/Board/Board";
import { BookShelf } from "./Components/Bookshelf/Bookshelf";
import { GlobalStyle } from "./styles/global";


const Wrapper = styled.div`
  overflow: hidden;
`
const TopContainer = styled.div`
  background-image: url('/assets/bg_stripes.svg');
  display: flex;
  flex-direction: column;
  height: 55%;
  z-index: 0;
  position: relative;
`
const LogoImage = styled.img`
  height: 200px;
  margin-top: 15px;
`
const GroundContainer = styled.div`
background-image: url('/assets/ground.svg');
display: flex;
flex-direction: column;
align-items: center;
height: 45%;
position: relative;

`


export function App() {
  return (
    <Wrapper>
    <GlobalStyle/>
    <TopContainer>
      <LogoImage src="assets/logo.svg" alt="logoImage"/>
    </TopContainer>
    <GroundContainer> 
      <BookShelf/>
      <Board/> 
    </GroundContainer>
    </Wrapper>
    
  );
}
