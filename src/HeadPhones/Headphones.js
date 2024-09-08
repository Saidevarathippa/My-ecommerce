import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
function Headphones(){
  const navigate=useNavigate();
  const [headPhones,setHeadphones]=useState([
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/o/n/modish-ombre-bassbeat-tune-c-in-ear-type-c-wired-earphones-with-original-imah2snvtjyymbae.jpeg?q=70",
      name:" Modish Ombre Bassbeat C Wired Earphones",
      price:299,
      isCart:false
      
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/s/y/turner-20hrs-playtime-headphones-hybrid-wireless-calling-noise-original-imah2gjgvthmcqfq.jpeg?q=70",
      name:"TXOR TURNER, 20hrs Playtime Headphones",
      price:809,
      isCart:false
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/d/8/o/-original-imagz5qagzek7tjz.jpeg?q=70",
      name:"boAt Rockerz 550 with 50mm Drivers",
      price:1798,
      isCart:false
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/2/j/l/-original-imah28h4mwkywgfu.jpeg?q=70",
      name:"SONY WH-1000XM4 Bluetooth Headset  (Black, On the Ear)",
      price:19989,
      isCart:false
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/p/k/-original-imahfgfk7rffntqf.jpeg?q=70",
      name:"SONY WH-CH720N Active Noise Cancelling (White, On the Ear)",
      price:7989,
      isCart:false
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/kvsfhjk0/headphone/2/t/x/-original-imag8mf8qga9z6ny.jpeg?q=70",
      name:"boAt Rockerz 450 Pro (Luscious Black, On the Ear)",
      price:1999,
      isCart:false
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/0/c/-original-imah28h3qdnerykz.jpeg?q=70",
      name:"SONY WH-1000XM4 Bluetooth Gaming Headset  (Silver, On the Ear)",
      price:9989,
      isCart:false
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/o/m/turner-20hrs-playtime-headphones-hybrid-wireless-calling-noise-original-imah2gjhxfwqmgqt.jpeg?q=70",
      name:"TXOR TURNER, 20hrs Playtime Headphones (White, On the Ear)",
      price:809,
      isCart:false
    },
  ])
  const [searchQuery,setSearchQuery]=useState("");
  const [filterProduct,setFilterProduct]=useState([]);
  let cart=[];
  useEffect(()=>{
    setFilterProduct(headPhones);
    if(localStorage.getItem("cart-items")){
      cart=JSON.parse(localStorage.getItem("cart-items"))
      const temp=headPhones.map((headphone,index)=>{
        const inCart=cart.find(cartItem => headphone.name === cartItem.name)
        if(inCart){
          headphone.isCart=true;
          return headphone
        }
        return headphone
      })
      setHeadphones(temp);
    }
  },[])

  const addTocart =(index)=>{
    if(localStorage.getItem("cart-items")){
      cart=JSON.parse(localStorage.getItem("cart-items"))
    }
    cart=[...cart,{...headPhones[index],quantity:1,cartPrice:headPhones[index].price}];
    localStorage.setItem("cart-items",JSON.stringify(cart));
    navigate("/cart")
  }
useEffect((e)=>{
const _filterProduct=headPhones.filter(headphone=> headphone.name.toLowerCase().includes(searchQuery.toLowerCase()))
setFilterProduct(_filterProduct)
},[searchQuery])
  
  return(
     <div className="container border-bottom">
      <div className="row">
              <div className="col-sm mb-3">
                  <input style={{width:"50%"}} type="text" className="form-control" id="serchQuery" onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Serach for Product.."/>
              </div>
          </div>
        {filterProduct.map((headphone,index) =>(
          <div className="row hp-img my-3 py-3">
            <div className="col-sm hp-col" >
              <img src={headphone.imgSrc} alt="" className="img-fluid"/>
              <h5>{headphone.name}</h5>
              <h5>{headphone.price}</h5>
              <button className="btn btn-warning"><Link className="remove" to={`/headphones-details/${headphone.name}`}>View Product</Link></button>
              {headphone.isCart ? 
              (<button className="btn btn-success">Go to cart</button>):
              (<button className="btn btn-primary" onClick={()=> addTocart(index)}>Add to cart</button>)}
            </div>
          </div>
        ))}
      </div>
    
  )
}
export default Headphones;