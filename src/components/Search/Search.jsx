import React from 'react';
import "./Search.css"
import axios from "axios";

const Search = ({setCharacters}) => {
    //Get the input from the textbox
    // where it will be stored?
    const [query, setQuery] = React.useState('');

    const handleSubmit = (e) =>{
        // Stop the page from refresh when the search is run
        e.preventDefault();
        // Finding the characters that match the search
        // api character filter: https://rickandmortyapi.com/api/character/?name=rick

        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(res =>{
                console.log(res.data.results)
                // What needs to happen to show the data on the page
                // Change Characters to this data
                setCharacters(res.data.results)
            })
            .catch(err=> {
                // Check for not found
                if (err.response.status === 404){
                    alert(`No characters named ${query}`)
                } else {
                    console.log(err)
                }
            })
        // clear textbox
        setQuery('');
    }


    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input onChange={(e)=>setQuery(e.target.value)} value={query}
                   type="text" placeholder="Search all characters"/>
        </form>
    );
};

export default Search;