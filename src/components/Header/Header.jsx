import React, {useContext} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {ThemeContext} from "../../contexts/ThemeContext.jsx";
ThemeContext

function Header() {
    // create a variable for dark mode
    // const darkMode = false;
    //const [darkMode, setDarkMode] = React.useState(false);

    // use context for Global state
    // Note: this is {} not []
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    return (
        <div className={darkMode?"header-container header-dark":"header-container"}>
            <div>
                <Link to='/' style={{marginRight:"10px"}}>Home</Link>
                <Link to='/about' style={{marginRight:"10px"}}>About</Link>
                <Link to='/episodes'>Episodes</Link>
            </div>
            <Link to='/favorites'>My Favorites</Link>
            <button className={darkMode?"theme-btn theme-button-dark":"theme-btn"}
            onClick={()=>setDarkMode(!darkMode)}>
                {
                    darkMode?
                        "Light Mode"
                        :
                        "Dark Mode"
                }
            </button>
        </div>
    );
}

export default Header;