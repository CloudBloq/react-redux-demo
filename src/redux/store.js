import {createStore} from 'redux';

// import cakeReducer from './cake/cakeReducers';
import rootReducer from './rootReducer';

const store= createStore(rootReducer);

export default store;