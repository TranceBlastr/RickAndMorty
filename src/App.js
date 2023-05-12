import "./App.css";
import { useState, useEffect } from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

import style from "./styles/App.module.css";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";

const EMAIL = "brian.andrais@gmail.com"
const PASSWORD = "rick123"
 




function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();  
 
  const navigate = useNavigate();
  const [access, setAccess] =useState(false);
  
 function login(userData) {
  if (userData.password === PASSWORD && userData.email === EMAIL) {
    setAccess(true)
    navigate("/home");
 }};

 function logOut(userData) {
    setAccess(false)
    navigate("/");
    // setCharacters([""])
 }

 useEffect(()=>{
  !access && navigate("/");
 }, [access] )
 
 
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }
  
  const onClose = (id)=>{
    setCharacters(
      characters.filter(  (char)=>{
        return char.id!== Number(id)}))
    };

  

  return (
    <div className={style.App}>
    {/* <Cards characters={characters} onClose={onClose}/> */}
    {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
    <Routes>
    <Route path="/" element={<Form login={login}/>}></Route>
      <Route path="/home" element={<Cards characters=   {characters} onClose={onClose} />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
    </Routes>
    
    </div>
    )
};

export default App;
