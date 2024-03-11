import "./App.css";
// import Home from './component/Home/Home'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "./component/Pages/Cart/Cart";
import Routes from "./component/Routes/Routes";
import Card from "./component/Products/ProductCard";
import AddProduct from "./component/Pages/AddProd/AddProduct";
import LogIn from "./component/Pages/LogIn/LogIn";
import OverlayComp from "./component/Pages/Overlay/OverlayComp";
import Profile from "./component/Pages/Profile/Profile";
import { useState } from "react";

function App() {

   
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Routes />}>
        <Route index  element={<LogIn/>}></Route>

        <Route path="/profile" element={<Profile/>}></Route>
        
          <Route path="/card" element={<Card />}></Route>
          <Route path='item/:id' element={<OverlayComp/>} />
         
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/addprod" element={<AddProduct />} />

        </Route>
      </>
    )
  );


  return (
    <>
      <div className="body">
        <RouterProvider router={router}></RouterProvider>
        {/* <Home/> */}
      </div>
    </>
  );
}

export default App;
