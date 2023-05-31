import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'; 

const store = createStore(reducer); // Configura el store con reducer

export default store;