import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import reducer from './Reducers'; 

const store = createStore(reducer);

export default store;



//store que llama al reducer 
//y almacena el estado al terminar de procesar el pedido