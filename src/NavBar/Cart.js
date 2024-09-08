import {  useState } from "react";
import { useEffect } from "react";

function Cart(){
  const [carts,setCarts]=useState([])
  const [totalAmount,setTotalAmount]=useState(0)
  useEffect(()=>{
    if(localStorage.getItem("cart-items")){
      const _carts=JSON.parse(localStorage.getItem("cart-items"))
      setCarts(_carts);
      console.log(_carts)
      setTotalAmount(_carts.reduce((acc,cartitem)=> acc + cartitem.cartPrice ,0))
      
    }
  },[]);
  
  const onChangeQuantity = (type,index)=>{
    const temp = carts.map((cartItem, i) => {
      if (index === i) {
          if (type === 'increment') {
            cartItem.quantity += 1;
            cartItem.cartPrice = cartItem.price * cartItem.quantity;
          } else {
              cartItem.quantity -= 1;
              cartItem.cartPrice = cartItem.price * cartItem.quantity;
          }
         
          return cartItem;
      }
      return cartItem;
  });
  setCarts(temp);
  localStorage.setItem("cart-items",JSON.stringify(temp));
  setTotalAmount(temp.reduce((acc,cartitem)=> acc + cartitem.cartPrice ,0))
  
  }
  
  const removeCartItem =(cartName)=>{
    const filteredCart =carts.filter(cart=> cart.name!== cartName)
    setCarts(filteredCart)
    localStorage.setItem("cart-items",JSON.stringify(filteredCart));
    setTotalAmount(filteredCart.reduce((acc,cartitem)=> acc + cartitem.cartPrice ,0))
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {carts.length >0 ?
          (
               <div className="row">
                 <div className="col-sm">
          <div className="col-sm text-end me-5 pe-5">
            <h5>Total Amount : {totalAmount}</h5>
          </div>
        </div>
                {carts.map((cart,index)=>(
                  <div className="row my-4 py-4 border-bottom mobilecol">
                  <div className="col-sm-4">
                  <img src={cart.imgSrc} alt="" className="img-fluid"/>
                 </div>
                 <div className="col-sm-4">
                  <h5>{cart.name}</h5>
        
                  <ul>
                    <li>{cart.specifications}</li>
                  </ul>
                 </div>
                 <div className="col-sm-4">
                  <h5>Price :{cart.cartPrice}</h5>
                  <h5>Quantity : <button className="btn btn-danger me-2" onClick={()=> onChangeQuantity("decrement",index)} disabled={cart.quantity===1}>-</button>{cart.quantity}<button className="btn btn-success ms-2" onClick={()=> onChangeQuantity("increment",index)}>+</button></h5>
                  <button className="btn btn-danger" onClick={()=> removeCartItem(cart.name)}>Remove from cart</button>
                 </div>
                 </div>
                ))}
               </div>
          ):
          (<div>your cart is empty</div>)}
        </div>
      </div>
    </div>
  )
}

export default Cart;