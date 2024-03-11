import React, { useEffect, useState } from "react";
import "./AddProduct.css";
// import CartItem from "./CartItem";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [Categories, setCategories] = useState("");
  const [descp, setDescp] = useState("");


  const changeTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const changeCateg = (e) => {
    setCategories(e.target.value);
  };

  const changeDesp = (e) => {
    setDescp(e.target.value);
  };

  const clickBtn = async(e,id) => {
    e.preventDefault();
    console.log({title,Categories,descp});
    
    const data = {title,Categories,descp} }

  


  useEffect (()=>{
     
  },[])


  return (
    <>
      <div className="add-div">

        <div className="add-h">
          <h1>Add Your Product</h1>
        </div>

        <form className="add-prod-form">

          <div className="div-inp">
            <input type="text" className="inp-1"  placeholder="Enter Product Title.." value={title}  onChange={changeTitle} />
          </div>

          <div className="div-inp">
       <input type="text" className="inp-1"  placeholder="Enter Product Categories.."  value={Categories}  onChange={changeCateg}  />
          </div>

          <div className="div-inp">
            <input type="text"  className="inp-1"   placeholder="Enter Product Price..."  value={descp}  onChange={changeDesp} />
          </div>

          <div className="div-inp">
            <input type="text"  className="inp-1"   placeholder="Enter Product Description.."  value={descp}  onChange={changeDesp} />
          </div>

          <div className="div-inp">
            <input type="file"  className="inp-1"   placeholder="Enter Product Description.."  value={descp}  onChange={changeDesp} />
          </div>
          <div className="btn">
            <button onClick={clickBtn}>Add Product</button>
          </div>

        </form>
 
     
    
      </div>
    </>
  );
};

export default AddProduct;
