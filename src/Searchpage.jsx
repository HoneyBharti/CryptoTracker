import { useContext } from "react"
import CoinContext from "./CoinContext"
import Coinitem from "./Coinitem"

const Searchpage=()=>{


  const {searchedcoins:coins} = useContext(CoinContext)
   
  if(!coins || coins.length===0){
      return(
<div className="p-8" >
      <h1 className="font-bold text-3xl text-center">Searching....</h1>
</div>
      )
}
  
  
  return(


        <div className="p-8">
          <h1 className="text-center font-bold text-white text-3xl"> Searched Coins</h1>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          coins.map(coin => (
            <Coinitem key={coin.id} coin={coin} />
          ))
        }
      </div>
        </div>
    )
}

export default Searchpage