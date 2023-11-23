import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Intro from "./components/Intro";
import Home from "./components/Home";

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Suspense><Intro /></Suspense>} />
        <Route path="/home" element={<Suspense><Home /></Suspense>} />

        </Routes>
        
    </>
  )
}

export default App
