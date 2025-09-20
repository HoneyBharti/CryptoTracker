
export const fetchcoins =async()=>{

    const response = await fetch("https://api.coingecko.com/api/v3/search/trending")

    const data = await response.json()

    return data.coins

}


export const searchcoins =async(searchterm)=>{

    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchterm}`)

    const data = await response.json()

    return data.coins

}


export const getcoin =async(id)=>{

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await response.json()

    return data

}