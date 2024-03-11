import React from "react";
import { useState } from "react";
import "./ProductItem.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import  {useDispatch} from  "react-redux"
import { ADD_To_Cart } from "../../redux/Action/action";

const Item = ({ item }) => {
  // const [count, setCount] = useState(0)

  const dispatch =useDispatch();

  const cartClick = async(ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    
    dispatch(ADD_To_Cart());


    const data = await fetch(`http://localhost:4000/Cart`,{

     method : 'POST',
     headers : {
      'Accept' : 'application/json',
      'Content-type': 'application/json'
     },
     body: JSON.stringify({"id" : item.id})

    });
    const resp = await data.json();
    console.log(resp);
  }

  return (

    <>

     {/* <NavLink to= {item.id}>hey</NavLink> */}
     
      
     <NavLink to={`/item/${item.id}`} className= "overlay-css">   
     <div className="cards">
     
     <div className="card-img-1">
        <img src={item?.image} alt="" className="img-1" />
      </div>

      <div className="content">

        <div className="title"><h1 className="h1">{item?.title}</h1></div>
        
        <p style={{"color":"black", "textTransform": "capitalize"}}>{item.category}</p>
        <p style={{"fontSize" :"large" ,"color":"black", "fontWeight":"bolder"}}>${item?.price} </p>
        
        <div><p style={{"color":"black"}}>{item?.rating?.rate} <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/> <FaStar style={{"color": "yellow"}}/></p></div>

        <div className="des"> <p>{item.description}</p></div>

        <button className="card-btn" onClick={cartClick}> Add To Cart</button>

        </div>

      <div className="side-price" style={{"color": "black"}}> ${item.price} <p  style={{"color": "black"}}>20% Off</p> </div>
      </div>
      </NavLink>
            <Outlet/>
    </>
  );
};

export default Item;
