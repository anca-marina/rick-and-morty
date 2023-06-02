import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/About/About.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import FavoritesContextProvider from "./contexts/FavoritesContext.jsx";


function App() {

  return (
    <BrowserRouter>
        <ThemeContextProvider>
            <FavoritesContextProvider>
                <Header />

                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/details/:characterId' element={<CharacterDetails />} />
                    <Route path='/episodes' element={<Episodes />} />
                </Routes>

                <Footer />
            </FavoritesContextProvider>
        </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
