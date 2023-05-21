/* eslint-disable no-unused-vars */
import styles from "./Form.module.css"
import { useState } from "react";
import validation from "../../Redux/Validation";

//!----------------------------------------------------------------------------

export default function Form ({login}){
  
//!-----------------ESTADOS----------------------------------------------------
    const [userData, setUserData] = useState({
    email: "",
    password: "",
    })

    const [errors, setErrors] = useState({})
    
//!-----------------HANDLERS----------------------------------------------------
  const handleChange=(event) =>{
        setErrors(validation({...userData,[event.target.name]: event.target.value,}))
        setUserData({...userData,[event.target.name]: event.target.value,})    
};
  const handlerSubmit = (event) =>{
    event.preventDefault();
    login(userData);
};



//!-----------------COMPONENTE 
  return (
<div className={styles.loginContainer}>
    <form className={styles.loginForm} onSubmit={handlerSubmit}>
      
      
      <h1 className={styles.titulo}>Rick & Morty</h1>      
      
      
      <h2 className={styles.subtitulo}>Inicio de sesión</h2>
      
      <label htmlFor="email">Email: </label>
      <input 
      name="email" 
      type="text" 
      placeholder="Ingrese su Email"
      value={userData.email} 
      onChange={handleChange} 
      /> 
      {errors.e1? (<p>{errors.e1}</p>):
        errors.e2 ? (<p>{errors.e2}</p>):
         errors.e3 ?  (<p>{errors.e3}</p>) : null}
      

      <label htmlFor="password">Password: </label>
      <input
      name="password"
      type="password"
      placeholder="Ingrese su contraseña"
      value={userData.password}
      onChange={handleChange}
      />
      {errors.p1? (<p>{errors.p1}</p>):
        errors.p2 ? (<p>{errors.p2}</p>):null}


      <button className={styles.loginButton} onClick={handlerSubmit} type="submit">ENVIAR</button>


    </form>
</div>
  );
}