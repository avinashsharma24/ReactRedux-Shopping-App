
import { addToCart , removeToCart} from "../Constants";

export const ADD_To_Cart = (data)=>{
    console.log("dataattaatatata",data)
    return{
        type : addToCart,
        payload :  data
    }
}

export const REMOVE_TO_CART = (data)=>{
  return{
    type : removeToCart,
    payload: data
  }
}