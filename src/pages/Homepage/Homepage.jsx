import React, {useContext, useEffect, useState} from 'react';
import './Homepage.css'
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard.jsx";
import Search from "../../components/Search/Search.jsx";
import {ThemeContext} from "../../contexts/ThemeContext.jsx";

function Homepage() {

    // use context for Global state
    // Note: this is {} not []
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    // create state to hold character data
    const [character, setCharacters] = useState([]);
    // show characters when page loads
    // using this api: https://rickandmortyapi.com/api/character
    // set up the useEffect when page loads
    useEffect(
        ()=>{
            console.log("testing useEffect");
            // make the api call to get the data
            axios.get(`https://rickandmortyapi.com/api/character`)
                .then(res => {
                    console.log(res.data.results)
                    // store this data in state
                    setCharacters(res.data.results)
                })
                .catch(err => console.log(err))
        }, [] // empty array means run once when the page loads
    )
    return (
        <div className={darkMode?"home-container home-dark":"home-container"}>
            <Search setCharacters={setCharacters} />
            <h1>Main Characters</h1>
            <div className="characters-container">
                {
                    character.map(item=><CharacterCard
                        key={item.id}
                        character={item}
                    />)
                    // character.map(item=><p key={item.id}>{item.name}</p>)
                }
            </div>
        </div>
    );
}

export default Homepage;