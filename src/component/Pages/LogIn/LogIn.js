import React, { useState, createContext } from "react";
import "./LogIn.css";
import imgLogo from '../../../Assets/photos/login-1.jpg';


const LogIn = () => {
  const [isrender,setIsRender] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  
  
  const changeName = (e) => {
    setName(e.target.value);
  };

  const clickbtn = (e) => {
    e.preventDefault();
    setIsRender(true);

  };
  console.log("ooo", isrender);


  return (
    <div className="login-section">

      <div className="login-left">
        <div className="login-up">
          <div >
            <p className="hh">LOGIN</p>
          </div>

          <div>
            <p className="login-p">Get access to your Orders.</p>
          </div>
        </div>

        <div className="down-image">
          {/* <img src={imgLogo} alt=" not found" /> */}
        </div>
      </div>

      <div className="form-div">
        <div className="h11">
          <h1>Kindly Fill Your Creadentials</h1>
        </div>

        <form className="signUp-form">
          <div className="div-inp">
            <div className="label-1">
              <p> Name: </p>
            </div>
            <input
              type="text"
              placeholder="Enter Your Name..."
              id="inp-box"
              onChange={(e) => {
                changeName(e);
              }}
            />
          </div>

          <div className="div-inp">
            <div className="label-1">
              <p> Email ID: </p>
            </div>
            <input type="email" placeholder="Enter Your Email.." id="inp-box" />
          </div>

          <div className="div-inp">
            <div className="label-1">
              <p> Number: </p>
            </div>
            <input
              type="number"
              placeholder="Enter Your Number.."
              id="inp-box"
            />
          </div>

          <div className="div-inp">
            <div className="label-1">
              <p> Password: </p>
            </div>
            <input
              type="password"
              placeholder="Enter Your Number.."
              id="inp-box"
            />
          </div>

          <div className="signup-btn">
            <button
              id="signup-b"
              onClick={(e) => {
                clickbtn(e);
              }}
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
