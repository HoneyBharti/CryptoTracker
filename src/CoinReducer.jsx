
const CoinReducer=(state , action)=>{

   if(action.type === "GET_COINS"){
    return{
      ...state,
      trendingcoins:action.payload
    }
   }
else if(action.type === "SEARCH_COINS"){
    return{
        ...state,
        searchedcoins:action.payload
    }
}

else if(action.type=== "VIEW_COINS"){
    return{
        ...state,
        coin:action.payload
    }
}

else{
    return state
}
    



}

export default CoinReducer