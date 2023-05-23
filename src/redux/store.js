import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'; // Importa tu reducer

const store = createStore(reducer); // Configura el store con tu reducer

export default store;