import React, {useContext} from 'react';
import './CharacterCard.css';
import {Link} from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import {ThemeContext} from "../../contexts/ThemeContext.jsx";
import FavoritesContextProvider, {FavoritesContext} from "../../contexts/FavoritesContext.jsx";


const CharacterCard = ({character}) => {
    // create variable for hearts

    // use context for Global state
    // Note: this is {} not []
    const {favorites, addCharacter, removeCharacter} = useContext(FavoritesContext);

   // const isFavorite = false;
    const [isFavorite, setIsFavorite] = React.useState(false)

    React.useEffect(
        () => {
            //console.log('update')
            // Is this character in favorites?
            setIsFavorite(favorites.find(item => item.id === character.id))
            // not found = undefined

        }, [favorites]
    )

    return (
        <div className="character-card">
            <img src={character?.image}/>
            <p>{character?.name}</p>
            <Link to={`/details/${character?.id}`}>See Details</Link>
            {
                isFavorite?
                    <FaHeart className="heart-icon"
                             onClick={() => removeCharacter(character.id)} />
                    :
                    <FaRegHeart className="heart-icon"
                    onClick={() => addCharacter(character)}/>
            }
        </div>
    );
};

export default CharacterCard;