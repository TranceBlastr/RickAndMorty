//! estado inicial y funcion reducer y exporto funcion

import { AUMENTAR_CONTADOR } from "./Action-types";


const initialState = {

};


function reducer(state= initialState, action) {
switch (action.type) {
  case AUMENTAR_CONTADOR:
    return{
      ...state,
      // lo que quiero que haga 
    }


default: return {...state}
}}
export default reducer;