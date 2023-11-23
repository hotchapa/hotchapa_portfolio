 import styled from "styled-components";
 const IntroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NanumSquareNeoRegular";
  font-size: 2.2vw;
 `

 function Intro() {
  return (
    <IntroWrapper>안녕하세요
    </IntroWrapper>
  )
}

export default Intro;