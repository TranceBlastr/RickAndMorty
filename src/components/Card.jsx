import styles from "../styles/Card.module.css"
import { Link } from "react-router-dom";



export default function Card({id,name, status, species, gender, origin, image, onClose}) {
   return (
      <div  className= {styles.card}>
         <Link to={`/detail/${id}`}>
            <div className="face front">
               <img className = {styles.img} src={image} alt='' />
            </div>
         </Link>
         
            <div className="face back">
               <h2 className= {styles.label}>{origin}</h2>
               <h2 className= {styles.label}>{species}</h2>
               <h2 className= {styles.label}>{gender}</h2>
               <h2 className= {styles.label}>{name}</h2>
               <h2 className= {styles.label}>{status}</h2>
               <button onClick={()=>{onClose(id)}}>Close</button>
            </div>
      </div>
   );
}
