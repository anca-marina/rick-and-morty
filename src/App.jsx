import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/About/About.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails.jsx";

function App() {

  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/details/:characterId' element={<CharacterDetails />} />
            <Route path='/episodes' element={<Episodes />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App
