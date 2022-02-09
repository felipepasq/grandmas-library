import styled from "styled-components";
import { GlobalStyle } from "./styles/global";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LogoImage = styled.img`
  height: 200px;
  margin-top: 20px;
`

export function App() {
  return (
    <MainContainer>
      <GlobalStyle/>
      <LogoImage src="assets/logo.svg" alt="logoImage"/>
    </MainContainer>
  );
}
