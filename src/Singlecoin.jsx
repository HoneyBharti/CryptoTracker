import { useContext ,useEffect } from "react"
import { FaGithub, FaGlobe } from "react-icons/fa"
import { useParams } from "react-router-dom"
import CoinContext from "./CoinContext"
import { getcoin } from "./Coinservice"

const Singlecoin =()=>{

const {coinid} = useParams()

const {coin , dispatch} = useContext(CoinContext)


const getCoin = async(id)=>{
  const data = await getcoin(id)
  dispatch({
    type: "VIEW_COINS",
    payload: data
  })

}

useEffect(()=>{

 getCoin(coinid)

},[coinid])



    if (!coin) {
        return (
            <div className="p-8 min-h-screen">
                <h1 className="text-center text-gray-500 font-bold text-4xl">Loading....</h1>
            </div>
        )
    }


    return(
               <div className='min-h-screen p-8'>
                   <div className="border border-gray-400 rounded-md p-4 flex flex-col md:flex-row items-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 relative">
                       <img className='shadow-2xl h-52 bg-white rounded-full p-2 rotate-x-15 -rotate-y-30' src={coin?.image?.large} alt="" />
                       <div>
                           <h1 className="text-white text-4xl font-bold">{coin?.name}</h1>
                           <h1 className="text-white text-2xl font-bold my-2">Price : ₹ {coin?.market_data?.current_price?.inr}</h1>
                           <p className="text-white text-lg font-bold my-2">Symbol : {coin?.symbol}</p>
                           <p className="text-white text-sm font-semibold my-2">{coin?.description.en}</p>
                       </div>
                       <div className='bg-white p-1 rounded-lg absolute text-xs font-bold top-[-10px] right-[-10px]'>Rank #{coin?.
                           market_cap_rank
                       }</div>
       
                       <div className="w-full space-x-5 flex items-center justify-center">
                           <a href={coin?.links?.homepage[0]} target='_blank' className='w-full my-2 bg-emerald-500 py-2 px-4 rounded-md text-white font-bold text-center hover:bg-emerald-600 cursor-pointer flex items-center justify-center space-x-2'><FaGlobe /> <h1>Official Website</h1></a>
                           <a href={coin?.links?.repos_url?.github[0]} target='_blank' className='w-full my-2 bg-purple-500 py-2 px-4 rounded-md text-white font-bold text-center hover:bg-purple-600 cursor-pointer flex items-center justify-center space-x-2'><FaGithub /> <h1>Github</h1></a>
                       </div>
       
                   </div>
       
               </div>
    )
}


export default Singlecoin