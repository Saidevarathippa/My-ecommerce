
import React from 'react';
import './App.css'
import Navbar from './NavBar/Navbar'
import Products from './Watches/Products'
import {Routes ,Route} from 'react-router-dom'
import Mobiles from "./MobileFolder/Mobiles";
import Headphones from './HeadPhones/Headphones';
import MobileDetails from './MobileFolder/MobileDetails';
import ProductDetails from './Watches/ProductDetails';
import  HeadphoneDetails from './HeadPhones/HeadphoneDetails'
import Cart from './NavBar/Cart';
import Login from './Login/Login'
import Register from './Register/Register'

function App() {
  
    return(
      <div className='App'>
     <Navbar/> 
      <Routes>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/mobiles" element={<Mobiles/>}></Route>
        <Route path="/headphones" element={<Headphones/>}></Route>
        <Route path="/mobile-details/:mobileName" element={<MobileDetails/>}></Route>
        <Route path="/product-details/:productName" element={<ProductDetails/>}></Route>
        <Route path="/headphones-details/:headphoneName" element={<HeadphoneDetails/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes> 
      
      
    </div>
    )
    
  }

export default App;
