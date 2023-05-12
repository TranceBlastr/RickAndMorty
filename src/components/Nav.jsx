import SearchBar from "./SearchBar"
import style from "../styles/Nav.module.css"
import { Link } from "react-router-dom"

export default function Nav ({onSearch, logOut}){
  return(
    <div className={style.nav}>
    <SearchBar onSearch = {onSearch}/>
      
      <Link to="/home">
        <button>Home</button>
      </Link>
      
      <Link to="/about">
        <button>About</button>
      </Link>

      <button onClick={logOut}>LogOut</button>
    </div>)
};
