import { useContext, useState } from "react"
import { searchcoins } from "./Coinservice"
import CoinContext from "./CoinContext"
import { useNavigate } from "react-router-dom"

const Form=()=>{

    const navigate = useNavigate()

  const {dispatch} = useContext(CoinContext)

  const [searchterm , setsearchterm]= useState("") 


  const handlesearch = async(e)=>{
e.preventDefault()
const data = await searchcoins(searchterm)

dispatch({
  type: "SEARCH_COINS",
  payload:data
})

navigate("/search/" + searchterm)


  }

    return(
        <form onSubmit={handlesearch} className="w-full p-6">
          <input value={searchterm} onChange={e =>setsearchterm(e.target.value)} className="my-4 w-full p-2 border border-gray-300 rounded-md" type="text"  placeholder="Search Crypto Coin" />
          <button className=" my-3 p-4 bg-emerald-500 w-full rounded-md text-lg font-bold text-white hover:bg-emerald-600">Search</button>
        </form>
    )
}

export default Form