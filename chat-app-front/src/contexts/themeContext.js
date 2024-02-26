import { Children } from 'react';
import {createContext , useState , useContext} from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme , setTheme ] = useState("right")
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}