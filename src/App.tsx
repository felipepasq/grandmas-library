import styled from "styled-components";
import { Board } from "./Components/Board/Board";
import { BoookProvider } from "./Contexts/BookContext";
import { BookShelf } from "./Components/Bookshelf/Bookshelf";
import { GlobalStyle } from "./styles/global";
import device from './utils/devices'


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

   @media ${device.tablet}{
    flex-direction: row;
    
   }


`
const ClockContainer = styled.div`
  margin: 0 auto 0 10%;
  display: none;
  position: relative;

  @media ${device.tablet} {
    display: block;
    
  }
`
const ClockImage = styled.img`
  height: 200px;
  margin-top: 15px;
  
  @media ${device.tablet} {
    display: block;
    height: 300px;
  }
`
const CLockPointer = styled.div `
  height: 120px;
  width: 80px;
  border-left: 6px solid #9B6DBF;
  border-bottom: 6px solid #9B6DBF;
  position: absolute;
  top: 45px;
  left: 140px;
`


const LogoImage = styled.img`
  height: 200px;
 
  @media ${device.tablet} {
    display: block;
    height: 300px;
    margin-top: 15px;
    margin-right: 10%;
  }
`
const GroundContainer = styled.div`
background-image: url('/assets/ground.svg');
display: flex;
flex-direction: column;
position: relative;
align-items: center;
height: 45%;
position: relative;

`


export function App() {
  return ( 
  
    <Wrapper>
     <BoookProvider>
    <GlobalStyle/>
    <TopContainer>
    <ClockContainer>
      <ClockImage src="assets/clock_base.svg" alt="clockImage"/>
      <CLockPointer/>
    </ClockContainer>
      <LogoImage src="assets/logo.svg" alt="logoImage"/>
    </TopContainer>
    <GroundContainer> 
      <BookShelf/>
      <Board/> 
    </GroundContainer>
    </BoookProvider>
    </Wrapper>
    
    
  );
}
