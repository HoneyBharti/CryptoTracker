import { Link } from "react-router-dom"

const Coinitem =({coin})=>{
    return(
                       <Link to={`/coin/${coin.id || coin?.item?.id}`} className="hover:scale-105 duration-200 cursor-pointer hover:border-2 border border-gray-300 p-4  flex space-x-2 relative rounded-md">
          <img className="h-22 bg-white rounded-full rotate-x-15 -rotate-y-30" src={coin?.item?.large || coin?.large} alt="" />
          <div>
            <h1 className="font-bold text-xl  text-white">Name : {coin?.item?.name || coin?.name}</h1>
            <p className="font-semibold text-md  text-white">Symbol : {coin?.item?.symbol || coin?.symbol}</p>
          </div>
          <div className="bg-white p-1.5 font-bold text-md rounded-sm absolute bottom-2 right-1">Rank : #{coin?.item?.market_cap_rank || coin?.market_cap_rank}</div>
        </Link>
    )
}

export default Coinitem