import { createContext, useReducer } from "react";
import CoinReducer from "./CoinReducer";

const CoinContext = createContext()


export const CoinProvider =({children})=>{



const initialstate ={

    trendingcoins : null,
    searchedcoins:null,
    coin:null

}

const [state, dispatch] = useReducer(CoinReducer , initialstate)    


return(
        <CoinContext.Provider value={{...state , dispatch}}>
        {children}
    </CoinContext.Provider>
)

}

export default CoinContext