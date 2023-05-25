import React from 'react';
import "./Episodes.css";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard.jsx";

const Episodes = () => {
    //Create state for the numbers
    const [options, setOptions] = React.useState([])

    //Create state to hold option selected
    const [selectedOption, setSelectedOption] = React.useState(1)

    const [selectedEpisode, setSelectedEpisode] = React.useState()

    const [characterList, setCharacterList] = React.useState([])

    // when the page loads I need ti know the number of episodes
    React.useEffect(
        ()=> {
            axios.get(`https://rickandmortyapi.com/api/episode`)
                .then( result => {console.log(result.data.info.count)

                    const newOptions=[]
                    for (let i=1; i<=result.data.info.count; i++) {
                        newOptions.push(i)
                    }
                    console.log(newOptions)
                    setOptions(newOptions)
                        })
                //I need to create an array with the numbers
                .catch(error=> console.log(error))


        }, []
    )


    const handleSelectChange = (e) =>{
        // console.log('change', e.target.value)
        //store in state
        setSelectedOption(e.target.value)
    }

    const fetchEpisodeData = async () => {
        //make multiple api calls to get data
        //https://rickandmortyapi.com/api/episode
        try {
            //make api call, wait for result
            const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
            console.log(res.data)
            //store the data in state
            setSelectedEpisode(res.data)

            //res.data.characters has all endpoint to get character info
            //need to make all these api calls and gather the results
            const episodeCharacters = await Promise.all(
                res.data.characters.map(url => {
                    return axios.get(url).then(res => res.data)
                })
            )
            console.log(episodeCharacters)
            //store in state
            setCharacterList(episodeCharacters)
        }
        catch (err){
            console.log(err)
        }
    }

    React.useEffect(
        ()=>{
            console.log("get episode", selectedOption)
            fetchEpisodeData()
        }, [selectedOption] // runs anytime selectedOption changes
    )



    return (
        <div className="episode-container">
            <div>
                <label>Select an episode</label>
                <select id="select-episode" onChange={handleSelectChange}>
                    {
                        options.map(num=>
                            <option key={num} value={num}>{`Episode ${num}`}</option>)
                    }
                </select>
            </div>
            <div>
                <div className="episode-info">
                    <p>Episode Name: {selectedEpisode?.name}</p>
                    <p>Air Date: {selectedEpisode?.air_date}</p>
                </div>
                <div className="characters-container">
                    {characterList.map(item=><CharacterCard
                        key={item.id}
                        character={item}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Episodes;