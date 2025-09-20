import { Link } from "react-router-dom"

const Navbar=()=>{

    return(
              <nav className="w-full shadow-xl p-4 bg-transparent">
<Link to={"/"} > <h1 className="font-bold text-3xl text-center text-white">CryptoTracker</h1>
</Link>

      </nav>
    )
}

export default Navbar