import Coinitem from "./Coinitem"


const Trendingcoins =({trend})=>{

    

    return(
          <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-4">

{
    trend.map(coin => <Coinitem key={coin?.item?.id || coin?.id} coin={coin} />  )

}

      </div>

    
    )
}

export default Trendingcoins