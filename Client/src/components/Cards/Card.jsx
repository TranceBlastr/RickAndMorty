import styles from "./Cards.module.css"
import { Link } from "react-router-dom";



export default function Card({id,name, status, species, gender, origin, image, onClose}) {
   return (
      <div  className= {styles.card}>
         <Link to={`/detail/${id}`}>
            <div >
               <img className = {styles.img} src={image} alt='' />
            </div>
         </Link>
         
            <div className={styles.data}>
               <h2>Name: {name}</h2>
               <h2>Origin: {origin}</h2>
               <h2>Species: {species}</h2>
               <h2>Gender: {gender}</h2>
               <h2>Status:{status}</h2>
               <button className={styles.button} onClick={()=>{onClose(id)}}>Close</button>
            </div>
      </div>
   );
   
}
