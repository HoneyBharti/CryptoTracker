import { useContext } from "react"
import { FaPalette } from "react-icons/fa"
import ThemeContext from "./ThemeContext"

const Themebttn=()=>{

    const {theme ,themes, dispatch} = useContext(ThemeContext)


    const changetheme=()=>{

        dispatch({
            type : "SWITCH_THEME"
        })

            localStorage.setItem('theme_value' , JSON.stringify(theme >=4 ? 0 : theme+1))

    }


    return(
<button onClick={changetheme} className={`fixed bottom-2 left-3 text-2xl cursor-pointer border-3 rounded-full text-white flex items-center justify-center h-10 w-10 hover:scale-110 ${themes[theme]} `}> <FaPalette/> </button>
    )
}

export default Themebttn