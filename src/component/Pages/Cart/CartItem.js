import React from 'react'
import { useState ,useEffect } from 'react'
import './CartItem.css'
import { FaStar } from "react-icons/fa";
import { UseSelector, useDispatch } from 'react-redux';
import { REMOVE_TO_CART } from '../../../redux/Action/action';

const CartItem = ({ids,funDel}) => {


    const [cart , setCart] = useState();
    const removeDispatch = useDispatch();
    // console.log(typeof (ids ));
    // console.log(ids)

    const getApi = async()=>{

        const data = await fetch(`http://localhost:4000/Product/${ids}`);
        const res = await data.json();
        setCart(res);
        // console.log(res)
    }
    // console.log("dgfdtd",cart);

    useEffect(()=>{
      getApi();
    },[])

    const removeItems =(e)=>{
      e.preventDefault();
      funDel(cart?.id);
      removeDispatch(REMOVE_TO_CART())
    }

  return (
    <>
      {/* {cart?.id} */}
      
      {/* { cart ? cart.id :"nothing"} */}
     
   <div className="parent-1-card">
             
 <div className="child-1">
          
          <div className="card-img">
           <img src={cart?.image} alt="" id='img-1' />
          </div>
          </div>
       <div className='child-2'>
       
            <div className='card-con'>
             <div className="card-title">
              <p  style={{ "fontSize" :"medium","textTransform": "uppercase" , "fontWeight": "bold"}}>{cart?.title}</p>
             </div>
 
             <div className="card-price">
                <p>${cart?.price}</p>
              </div>
 
               <div className="card-categor">
                 <p  style={{"color":"black", "textTransform": "capitalize" , "fontWeight" : "bold"}}>{cart?.category}</p>
               </div>
 
               <div className="card-desp">
                <p>{cart?.description}</p>
               </div>
 
               <div className='card-ratings'>
               <p> {cart?.rating.rate }  <FaStar style={{"color": "yellow"}}/><FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/></p>
               </div>
 
             </div>
 
            <div className="buttons">
 
               <div className="">
                  <button className='buy-btn'> BuyNow </button>
                 </div>
 
               <div className="remove-btn">
                   <button className='btn-remove' onClick={removeItems}> Remove From Cart</button>
                </div>      
         
               </div>     
  
           </div>
 
</div>
       
 
    </> 
  )
}

export default CartItem
