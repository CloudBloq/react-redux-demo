import React from 'react';
import {useSelector} from 'react-redux'
function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.numOfcakes)
    return (
        <div>
            <h2>Number of Cake = {numOfCakes} </h2>
            <button >Buy Cake</button>
        </div>
    );
 }

 export default HooksCakeContainer;