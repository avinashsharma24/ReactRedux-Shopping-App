import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import {useSelector} from "react-redux"

const Navbar = (props) => {

  const[menuOpenner, setMenuOpenner] = useState(false);
  const[userLogin, setUserLogin] = useState(false);

  const count = useSelector(state => state);

 const clickMenu = ()=>{
      setMenuOpenner(!menuOpenner) 
   }

  return (
    <>
     
        <div className="navbar">
          <div className="right"> </div>

       
       {!userLogin?<>

        <div className="left">
            <div className="home">
              <NavLink className= "a-nav" to='/card'>Home</NavLink>
            </div>

            <div className="add-prod">
              <NavLink className= 'a-nav' to= '/addprod'>Add</NavLink>
            </div>

            <div className="login">
            <NavLink className= "a-nav" >LogIn</NavLink>
           </div>

            <div className="add-to-Cart">
            <NavLink className= 'a-nav' to='/cart'> Cart {count}</NavLink>
            </div>
          </div>

       </>:<>
       <div className="left">
            <div className="home">
              <NavLink className= "a-nav" to='/card'>Home</NavLink>
            </div>

             <div className="add-prod">
              <NavLink className= 'a-nav' to= '/addprod'>Add</NavLink>
            </div>
            
            <div className="profile">
            <NavLink className= "a-nav" to="/profile" >Profile</NavLink>
           </div>

            <div className="add-to-Cart">
            <NavLink className= 'a-nav' to='/cart'> Cart</NavLink>
            </div>
          </div>
       </>}
    
             
          <div className="right-lines">
           <IoMdMenu style={{"fontSize":"xx-large"}} onClick={clickMenu} />
           </div> 
           {menuOpenner?
            <>
         
          <div className="menu-icons">
           <div className="a-menu-nav"><NavLink className='a-menu-nav1' to='/card'>Home</NavLink></div>
           <div className= "a-menu-nav"> <NavLink className='a-menu-nav1'  >LogIn</NavLink></div>
            {/* <div className= "a-menu-nav"><NavLink className='a-menu-nav1' to= '/addprod'>Add</NavLink></div> */}
           <div className= "a-menu-nav"> <NavLink className='a-menu-nav1'  to='/cart'> Cart</NavLink></div>
           </div>
           </>:''}
           
        </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;



          
