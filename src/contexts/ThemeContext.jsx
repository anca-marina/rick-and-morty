import {useState, createContext, useEffect} from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    // Create my global state
    const [darkMode, setDarkMode] = useState(false)

    useEffect(
        () => {
            console.log('context loaded')
            const storedDarkMode = localStorage.getItem('darkMode')
            //check if something was there and if so use that value
            if(storedDarkMode){
                setDarkMode(JSON.parse(storedDarkMode))
            }
        }, [] //run one time when context loads
    )

    useEffect(
        () => {
            console.log('darkMode is ', darkMode)
            // save the new state of darkMode when it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode]
    )

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}