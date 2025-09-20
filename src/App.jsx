import { useContext } from "react"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Themebttn from "./Themebttn"
import ThemeContext from "./ThemeContext"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Searchpage from "./Searchpage"
import { CoinProvider } from "./CoinContext"
import Singlecoin from "./Singlecoin"


function App() {


  const {themes , theme} = useContext(ThemeContext)


  return (

<Router>

   <CoinProvider>
      <div className= {`w-full min-h-screen ${themes[theme]}`}>

<Navbar/>

<Routes>

<Route path="/" element ={<Home/>}/>
<Route path="/search/:searchQuery" element ={<Searchpage/>}/>
<Route path='/coin/:coinid' element ={<Singlecoin/>}/>


</Routes>

<Footer/>

<Themebttn/>

    </div>
   </CoinProvider>

</Router>


  )
}

export default App
