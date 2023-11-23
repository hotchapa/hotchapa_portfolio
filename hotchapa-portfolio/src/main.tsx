import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./assets/fonts/Font.css";
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/SCommon.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
