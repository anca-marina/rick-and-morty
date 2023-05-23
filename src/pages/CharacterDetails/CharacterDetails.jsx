import React, {useEffect} from 'react';
import './CharacterDetails.css'
import {useParams} from "react-router-dom";
import axios from "axios";

const CharacterDetails = () => {
    // show data for a specific character
    // the id is in the url
    // use hook to retrieve the value
    const {characterId} = useParams();

    //Create state to hold character data
    const [character,setCharacter] = React.useState('');

    // https://rickandmortyapi.com/api/character/10
    // I need to get the data when the page loads
    useEffect(
        ()=>{
            console.log('details')
            // make an api call
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                .then(rez=> {
                    console.log(rez.data)
                    // I have the data, I need to store the data in the state
                    setCharacter(rez.data)
                })
                .catch(err => console.log(err))
        }, [] // run once when the page loads
    )

    return (
        <div className="details-container">
            <img src={character.image}/>
            <div className="container-info">
                <p>Name: {character?.name}</p>
                <p>Gender: {character?.gender}</p>
                <p>Location: {character?.location?.name}</p>
                <p>Species: {character?.species}</p>
            </div>
        </div>
    );
};

export default CharacterDetails;