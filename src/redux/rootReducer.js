import {combineReducers} from 'redux'
import iceCreamReducer from './iceCream/iceCreamReducers'
import cakeReducer from './cake/cakeReducers'

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer;