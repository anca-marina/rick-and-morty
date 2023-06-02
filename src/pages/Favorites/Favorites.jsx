import React, {useContext} from 'react';
import './Favorites.css';
import {FavoritesContext} from "../../contexts/FavoritesContext.jsx";
import CharacterCard from "../../components/CharacterCard/CharacterCard.jsx";

const Favorites = () => {
    // use context for Global state
    // Note: this is {} not []
    const {favorites} = useContext(FavoritesContext);

    return (
        <div className="favorites-container">
            <h1>My Favorite Characters</h1>
            <div className="favorite-characters">
                {
                    favorites.length > 0?
                    favorites.map(item=><CharacterCard
                        key={item.id}
                        character={item}
                    />)
                        :
                        <p>No favorites selected yet</p>
                    // character.map(item=><p key={item.id}>{item.name}</p>)
                }
            </div>
        </div>
    );
};

export default Favorites;