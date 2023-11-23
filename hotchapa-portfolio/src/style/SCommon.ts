import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
  button {
    background-color: transparent;
    padding: 0;
    &:focus{
      border-color: none;
      outline: none;
    }
  }
  ul {
    margin: 0;
  }

  :root {

/* Colors */
--dark01: #010101;
--dark02: #202020;
--dark10: rgba(1, 1, 1, 0.1);
--dark30: rgba(1, 1, 1, 0.3);
--dark50: rgba(1, 1, 1, 0.5);
--dark70: rgba(1, 1, 1, 0.7);
--white: #ffffff;
--white30: rgba(255, 255, 255, 0.3);
--white50: rgba(255, 255, 255, 0.5);
--white70: rgba(255, 255, 255, 0.7);
--white90: rgba(255, 255, 255, 0.9);
--gray01: #4a4a4a;
--gray02: #6c6c6c;
--gray03: #d9d9d9;
--gray04: #EAEAEA;
--gray05: #6C6C6C;
--gray06: #cfcfcf;
--red: #F33434;
--aqua: #3FD5DE;
--aqua01: #EBFBFC;
--aqua02: #98E3E8;
--emerald: #2deea8;
--maingradient: linear-gradient(100deg, #3fd5de, #2deea8);
--reversegradient: linear-gradient(100deg, #2deea8, #3fd5de);
--transgradient: linear-gradient(100deg, rgba(45, 238, 168, 0.5), rgba(63, 213, 222, 0.5));
--decogradient01: linear-gradient(152.33deg, #cc85f5 6.96%, #ff7171 88.63%);
--decogradient02: linear-gradient(152.33deg, #d46fff 6.96%, #ecff21 88.63%);
--redgradient: linear-gradient(90deg, rgba(255,37,37,1) 0%, rgba(255,97,45,1) 35%, rgba(250,0,60,1) 100%);
  }
`;

export const SHeader1 = styled.h1`
  font-size: 5vh;
  font-family: "PretendardExtraBold";
`;

export const SHeader2 = styled.h2`
  font-size: 4vh;
  font-family: "PretendardBold";
`;

export const SHeader3 = styled.h3`
  font-size: 3vh;
  font-family: "Pretendard";
`;

export const STextColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
