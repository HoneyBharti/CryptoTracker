import { createContext, useReducer } from "react";
import { Themereducer } from "./ThemeReducer";


const ThemeContext = createContext()

export const Themeprovider =({children})=>{

    const themes = ['bg-gradient-to-r from-blue-800 to-indigo-900','bg-gradient-to-r from-purple-500 to-purple-900', 'bg-gradient-to-r from-pink-500 to-rose-500' ,'bg-gradient-to-r from-blue-600 to-violet-600','bg-gradient-to-r from-rose-400 to-red-500' ]

    const initialstate ={
        theme: parseInt(localStorage.getItem('theme_value')),
        themes : themes
    }

    const [state , dispatch] = useReducer(Themereducer , initialstate )

    return(
        <ThemeContext.Provider value={{...state , dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext


