import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function Products(){

  const [products,setProducts] = useState([
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/products/talk2-black_1_360x.png?v=1653643544',
      name:"Talk 2",
      model:"BT Calling HR SpO2",
      price:1299,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/products/2_6c1ace42-dfd2-43e3-881a-bd7d7a3eca22_360x.png?v=1679728526',
      name:"Legacy",
      model:"AMOLED | BT Calling",
      price:2499,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/BLS_01_360x.png?v=1721109206',
      name:"Arc",
      model:"AMOLED | BT Calling",
      price:1699,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_360x.png?v=1720530551',
      name:"Maveric",
      model:"51.33 mm Display BT Calling",
      price:2799,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/onyx-black_1_360x.png?v=1715246252',
      name:"Onyx",
      model:"AMOLED | BT Calling",
      price:2999,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/4_c1cc18b6-bae2-4bf9-a50d-99f2f79cf593_360x.png?v=1721199740',
      name:"Dapper",
      model:" BT Calling",
      price:1999,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/brillia-black_1_360x.png?v=1715327162',
      name:"Brillia",
      model:"51.3mm AMOLED BT Calling",
      price:1699,
      isCart:false
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/Black_01_3e8c1628-8bf0-4d1e-a565-cf86b4f404b4_360x.png?v=1720597864',
      name:"Spacewatch",
      model:"AMOLED | BT Calling",
      price:2299,
      isCart:false
    },
    
    
    
  ])
  const [searchQuery,setSearchQuery]=useState("")
  const [filterProduct,setFilterProduct]=useState([])
  let cart=[];
  let timer;
  useEffect(()=>{
    setFilterProduct(products)
    if(localStorage.getItem("cart-items")){
      cart=JSON.parse(localStorage.getItem("cart-items"))
      const temp=products.map((product,index)=>{
        const isExist=cart.find(cartitem=> product.name === cartitem.name)
        if(isExist){
          product.isCart=true
          return product
        }
        return product
      });
      setProducts(temp)
     
     }
  },[]);
  const navigate=useNavigate();
  const addTocart=(index)=>{
   if(localStorage.getItem("cart-items")){
    cart=JSON.parse(localStorage.getItem("cart-items"))
   }
   cart=[...cart,{...products[index],quantity:1,cartPrice:products[index].price}]
   setProducts(cart)
   localStorage.setItem("cart-items",JSON.stringify(cart))
   navigate("/cart")
  }
  const goTocart = ()=>{
    navigate("/cart")
  }
  useEffect((e)=>{
    timer =setTimeout(()=>{
      const _filterProduct=products.filter(product=> product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilterProduct(_filterProduct);
    },2000)
    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])
  return (

    <div className="Container container-fluid">
      <img className="img-fluid main" src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_75947040-8b3e-459b-a70c-7b29ea9ae08f.jpg?v=7386078340980814741" alt="alt"></img>
      <div className="row">
              <div className="col-sm mb-3">
                  <input style={{width:"50%"}} type="text" className="form-control" id="serchQuery" onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Serach for Product.."/>
              </div>
          </div>
          <div className="pro-sec">
          {filterProduct.map((product,index)=>(
            <div className="pad">
              <div className="mx">
                <img src={product.imgSrc} alt="" className="img-fluid"/>
                <h5 className="gap">{product.name}</h5>
                <p className="gap">{product.model}</p>
                <h5 className="gap">{product.price}</h5>
                <button className="btn btn-warning"><Link className="remove" to={`/product-details/${product.name}`}>View Product</Link></button>
                {product.isCart ?
                (<button className="btn btn-success" onClick={()=> goTocart()}>Go to cart</button>):
                (<button className="btn btn-primary" onClick={()=> addTocart(index)}>Add to cart</button>)
                }
              </div>
            </div>
          ))}
          </div>
        </div>
  )
}

export default Products;
