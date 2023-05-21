import Card from './Card';
import styles from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   
   return(
   <div className={styles.home}>
         {characters.map(({id,name,status,species,gender,image,origin}) => {
            return (
            <Card
            id={id}
            key= {id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            />
   )})}
   </div>
   )}
