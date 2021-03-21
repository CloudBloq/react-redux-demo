import {BUY_CAKE} from './cakeType'

export const buyCake=(number)=>{
    const buyNumber=number!=null? number : 1;
    return {
        type:BUY_CAKE,
        payload:buyNumber
    }
}

