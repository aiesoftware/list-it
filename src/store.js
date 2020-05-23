import {createStore} from 'redux';
import reducer from './services/tasks/reducer';

const store = createStore(reducer);

export default store;