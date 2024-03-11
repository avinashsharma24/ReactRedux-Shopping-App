import {createStore} from 'redux';
import { addToCart ,removeToCart } from '../Constants';

const initialState ={
     NoOfItems : 0
}
const reducer = (state = initialState.NoOfItems , action) => {
    console.log("sjdhfgjhg",action);

    switch (action.type) {

        case addToCart: 
        return  state + 1
            
    
        case removeToCart :
                   return state -1 

        default:
            return state
    }
}

export const store =  createStore(reducer);