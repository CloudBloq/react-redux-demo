import React from 'react'
import {buyIceCream} from '../redux'
import {connect} from 'react-redux'
function IceCreamContainer (props) {
    return (
        <div>
            <h2>Number of Cake - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    );
}


const mapStateToProps=state=>{
    // map the state that came from the redux to the component property
    return{
        numOfIceCream:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps=dispath=>{
    // map the dispatch came from the redux to the component property
    return{
        buyIceCream:()=>dispath(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);