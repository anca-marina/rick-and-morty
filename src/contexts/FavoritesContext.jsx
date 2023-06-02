import {useState, createContext, useEffect} from "react";

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props) {
    // Create my global state to hold the fav characters
    const [favorites, setFavorites] = useState([]);

    useEffect(
        () => {
            console.log('context loaded')
            const storedFavorites = localStorage.getItem('favoritesList')
            //check if something was there and if so use that value
            if(storedFavorites){
                setFavorites(JSON.parse(storedFavorites))
            }
        }, [] //run one time when context loads
    )

    useEffect(
        () => {

            // save the new favorites when there are any changes
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites]
    )

    // function to add character to favorites
    const addCharacter = (charToAdd) => {
        console.log('adding', charToAdd)
        // add this character to state
        let newFavorites=[...favorites, charToAdd];
        console.log(newFavorites);
        // store in state
        setFavorites(newFavorites);
    }

    const removeCharacter = (charId) => {
        //remove this character from state
        let newFavorites = favorites.filter(item=>item.id !== charId)
        //store in state
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}