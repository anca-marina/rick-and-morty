import React, {useEffect, useState} from 'react';
import './Homepage.css'
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard.jsx";
import Search from "../../components/Search/Search.jsx";

function Homepage() {
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
        <div className="home-container">
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