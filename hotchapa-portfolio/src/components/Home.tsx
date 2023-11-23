import styled from "styled-components";
import { SHeader1, SHeader2, SHeader3, STextColWrapper } from "../style/SCommon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntroWrapper = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "NanumSquareNeoRegular";
 font-size: 2.2vw;
 transition: 0.5s ease-in-out;
 user-select: none;
`

const IntroYear = styled.div`
   font-family: "SCDREAM9";
   font-size: 6.2vh;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
`
const IntroBox = styled.div`
 width: 8vw;
 height: 4vh;
 border: solid 0.1vw var(--dark01);
 font-family: "PretendardRegular";
 font-size: 2.5vh;
 padding: 1vh;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
`

const IntroNameWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 margin-top: 2.5vh;
 cursor: pointer;
 transition: all 0.45s ease;
 &:hover {
   padding: 10vh;
   color: var(--dark30);
 }
 &:active {
   color: var(--dark01);
 }
`

const IntroName = styled.div`
 font-family: "PretendardLight";
 font-size: 5vh;
 line-height: 6vh;
 
`
function Home() {
 const navigation = useNavigate();
 const [position, setPosition] = useState(0);
 const onScroll = () => {
   setPosition(window.scrollY);
 };
 useEffect(() => {
   window.addEventListener("scroll", onScroll);

   return () => {
     window.removeEventListener("scroll", onScroll);
   };
 }, []);


 return (
   <IntroWrapper>

  <STextColWrapper>
     <SHeader1 
      //  style={
      //      { transform: `translateY(${position / 4}px)`, opacity: position / 1000 } // 스크롤 위치에 따라 opacity를 조절
      //    }>
         >안녕하세요
     </SHeader1>
     <SHeader2
      //  style={
      //        { transform: `translateY(${position / 4}px)`, opacity: position / 10000 } // 스크롤 위치에 따라 opacity를 조절
      //      }>
       >000 개발자
     </SHeader2>
     
     <SHeader3
      //  style={
      //        { transform: `translateY(${position / 4}px)`, opacity: position / 5000 } // 스크롤 위치에 따라 opacity를 조절
      //      }>
       >000 개발자
     </SHeader3>
     </STextColWrapper>
   </IntroWrapper>
 )
}

export default Home;