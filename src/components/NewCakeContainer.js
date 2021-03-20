import React , {useState} from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'
function NewCakeContainer (props) {
    const [number, setNumber]=useState(1);
    return (
        <div>
            <h2>Number of Cake - {props.numOfCake}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    );
}


const mapStateToProps=state=>{
    // map the state that came from the redux to the component property
    return{
        numOfCake:state.cake.numOfcakes
    }
}

const mapDispatchToProps=dispath=>{
    // map the dispatch came from the redux to the component property
    return{
        buyCake:(number)=>dispath(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);