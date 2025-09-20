import { useContext , useEffect} from "react"
import Form from "./Form"
import Trendingcoins from "./Trendingcoins"
import CoinContext from "./CoinContext"
import { fetchcoins } from "./Coinservice"
const Home=()=>{

const {trendingcoins : trend , dispatch} = useContext(CoinContext)


const gettrendingcoins =async()=>{

      const data = await fetchcoins()
      dispatch({
            type: "GET_COINS",
            payload: data
      })

    
}

useEffect(()=>{
      gettrendingcoins()

},[])


if(!trend || trend.length===0){
      return(
<div className="p-8" >
      <h1 className="font-bold text-3xl text-center">Loading....</h1>
</div>
      )
}



return(

<>

          <div className="p-12">
        <h1 className="my-4 text-center text-4xl text-white font-bold">Track Crypto 24/7</h1>
        <h2 className="text-center text-xl text-gray-300 font-semibold">Search Crypto Coin</h2>

<Form/>
      </div>

            <h1 className="text-center font-bold text-white text-3xl"> Trending Coins</h1>

<Trendingcoins trend={trend} />
</>
)
}

export default Home