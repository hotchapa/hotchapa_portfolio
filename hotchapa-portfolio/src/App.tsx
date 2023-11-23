import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Intro from "./components/Intro";

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Suspense><Intro /></Suspense>} />
        </Routes>
        
    </>
  )
}

export default App
