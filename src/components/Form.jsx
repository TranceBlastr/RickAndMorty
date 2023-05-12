/* eslint-disable no-unused-vars */
// import styles from "./styles.form.module.css";
import { useState } from "react";
import validation from "./Validation";
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
<div>
    <form onSubmit={handlerSubmit}>
      
      <h1>Formulario Login</h1>      
      <label htmlFor="email">Email: </label>
      <input 
      onChange={handleChange} 
      value={userData.email} 
      type="text" 
      name="email" 
      placeholder="Ingrese su Email"
      /> 
      {errors.e1? (<p>{errors.e1}</p>):
        errors.e2 ? (<p>{errors.e2}</p>):
         errors.e3 ?  (<p>{errors.e3}</p>) : null}
      <hr />
      
      <label htmlFor="password">Password: </label>
      <input onChange={handleChange} value={userData.password} type="" name="password" placeholder="Ingrese su contraseña" />
      {errors.p1? (<p>{errors.p1}</p>):
        errors.p2 ? (<p>{errors.p2}</p>):null}
      <hr />
      <button onClick={handlerSubmit} type="submit">ENVIAR</button>
      <hr />
    </form>
</div>
  );
}