import React from "react";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const [resp, setResp] = useState();
  

  const fetchPostApi = async () => {
    const data = await fetch(`http://localhost:4000/Cart`);
    const res = await data.json();
    console.log(res);
    // console.log(res[0].id);
    setResp(res);
  };

  useEffect(() => {
    fetchPostApi();
  }, []);

  const deleteApi = async(id)=>{
      console.log(id)
    const data = await fetch(`http://localhost:4000/Cart/${id}`,{
      method : "Delete"
    })
    const res = await data.json();
    console.log(res);
     
    if(res)
    {
      fetchPostApi();
      // alert(`Record ${res.id} is deleted`)
    }
}



  return (
    <div className="Parent-cart">
      <div className="cart">
      <h1>
        <center>YOU ARE IN CART SECTION!</center>
      </h1>
    
      {resp &&
        resp.map((value) => {
          return <CartItem key={value.id} ids={value?.id} funDel = {deleteApi} />;
        })}
      </div>
      <div className="price-details">
         <h1>Price Details</h1>
      </div>
      </div>
  );
};

export default Cart;
