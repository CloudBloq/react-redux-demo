import React from 'react'
import {connect} from 'react-redux'
import {buyCake,buyIceCream} from '../redux'

function ItemContainer(props){
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    );
}

const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.cake ? state.cake.numOfcakes : state.iceCream.numOfIceCreams

    return {item:itemState}
}

const mapDispatchToProps=(dispatch,ownProps)=>{

    const  dispathFunction=ownProps.cake ? ()=>dispatch(buyCake(1)) : ()=>dispatch(buyIceCream(1))
 
    return {
        buyItem:dispathFunction
    }
 
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);