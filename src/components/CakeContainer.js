import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'
function CakeContainer (props) {
    return (
        <div>
            <h2>Number of Cake - {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}


const mapStateToProps=state=>{
    // map the state that came from the redux to the component property
    return{
        numOfCake:state.numOfcakes
    }
}

const mapDispatchToProps=dispath=>{
    // map the dispatch came from the redux to the component property
    return{
        buyCake:()=>dispath(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);