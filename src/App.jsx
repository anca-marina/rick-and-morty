import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

function App() {

  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
