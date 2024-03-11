import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Route.css"


const Routes = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Card}></Route>
          <Route path="/profile" Component={Profile}></Route>
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
      </BrowserRouter> */}


      {/* <Card/> */}


      <div className="section">
      <Navbar/>
      <Outlet/>
      </div>
       


    </>
  );
};

export default Routes;
