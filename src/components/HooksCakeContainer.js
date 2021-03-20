import React from 'react';
import {buyCake} from '../redux'
import {useSelector,useDispatch} from 'react-redux'
function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.numOfcakes)
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Number of Cake - {numOfCakes} </h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
 }

 export default HooksCakeContainer;