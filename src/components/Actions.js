//! funciones que retornan un objeto con el type y sin payload
import {AUMENTAR_CONTADOR} from "./Action-types";

export const aumentarContador = ()=>{
  return {type: AUMENTAR_CONTADOR, };
};