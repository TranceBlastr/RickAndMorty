import styles from "../styles/SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange =(event)=>{
      setId(event.target.value);
      
      // console.log(event.target.value);
   };

   return (
      <div className={styles.search}>
         <input onChange={handleChange} type='search' placeholder="Ingrese numero de tarjeta" />
         <button onClick={()=> {onSearch(id)}}>Agregar</button>
      </div>
   );
}
