import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Mobiles(){
      const navigate=useNavigate()
      const [mobiles,setMobiles]=useState([
        {
            imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/t/n/-original-imah2hn8khvuju8s.jpeg?q=70",
            price:32999,
            isCart:false,
            name:"OPPO Reno 12 5G (Sunset Peach, 256 GB)",
            specifications:[
              '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
              '17.02 cm (6.7 inch) Full HD+ Display',
              '50MP + 8MP + 2MP | 32MP Front Camera',
              '5000 mAh Battery',
              'Dimensity 7300 Energy Processor',
              '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
            ]
        },
        {
          imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
          price:15999,
          isCart:false,
          name:"realme P1 5G (Phoenix Red, 128 GB)",
          specifications:[
            '6 GB RAM | 128 GB ROM | Expandable Upto 2 TB',
            '16.94 cm (6.67 inch) Full HD+ Display',
            '50MP + 2MP | 16MP Front Camera',
            '5000 mAh Battery',
            'Dimensity 7050 Processor',
            '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
          ]
      },
      {
        imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70",
        price:22999,
        isCart:false,
        name:"Motorola Edge 50 Fusion (Hot Pink, 128 GB)",
        specifications:[
           '8 GB RAM | 128 GB ROM',
           '17.02 cm (6.7 inch) Full HD+ Display',
           '50MP + 13MP | 32MP Front Camera',
           '5000 mAh Battery',
           '7s Gen 2 Processor',
           '1 Year on Handset and 6 Months on Accessories'
        ]
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/k/9/g34-5g-pb1v0001in-motorola-original-imagwu4r4xze9jwz.jpeg?q=70",
      price:11999,
      isCart:false,
      name:"Motorola G34 5G (Ice Blue, 128 GB)",
      specifications:[
                 '8 GB RAM | 128 GB ROM',
                 '16.51 cm (6.5 inch) HD+ Display',
                 '50MP + 2MP | 16MP Front Camera',
                 '5000 mAh Battery',
                 'Snapdragon 695 5G Processor',
'                1 Year on Handset and 6 Months on Accessories',
      ]
  },
  {
    imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
    price:65999,
    isCart:false,
    name:"Apple iPhone 15 (Black, 128 GB)",
    specifications:[
  
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48MP + 12MP | 12MP Front Camera',
      'A16 Bionic Chip, 6 Core Processor Processor',
      '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
    ]
}
      ])
      const [filterProduct,setFilterProduct]=useState([]);
      const [searchQuery,setSearchQuery]=useState("")
      let timer;
     let cartItems=[];
     useEffect(()=>{
      setFilterProduct(mobiles);
      if(localStorage.getItem("cart-items")){
        cartItems=JSON.parse(localStorage.getItem("cart-items"))
        const temp=mobiles.map(mobile=>{
          const isExist=cartItems.find(cartItem=> mobile.name === cartItem.name)
          if(isExist){
            mobile.isCart=true;
            return mobile
          }
          return mobile
        })
        setMobiles(temp)
      }
     },[]);
     const addTocart =(index)=>{
      if(localStorage.getItem("cart-items")){
        cartItems=JSON.parse(localStorage.getItem("cart-items"))}
      cartItems=[...cartItems,{...mobiles[index],quantity:1,cartPrice:mobiles[index].price}]
      localStorage.setItem("cart-items",JSON.stringify(cartItems))
      navigate("/cart")
     }
     const goTocart = ()=>{
      navigate("/cart")
     }
     useEffect((e)=>{
      console.log("triggering useEffect...")
      timer =setTimeout(()=>{
         const _filterProduct=mobiles.filter(mobile =>mobile.name.toLowerCase().includes(searchQuery.toLowerCase()))
         setFilterProduct(_filterProduct);
      },1000)
      return()=>{
        clearTimeout(timer)
      }
     },[searchQuery])
  return(
        <div className="container">
          <div className="row">
              <div className="mb-3">
                  <input style={{width:"50%"}} type="text" className="form-control" id="serchQuery" onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Serach for Product.."/>
              </div>
          </div>
          <div className="row">
             <div className="col-sm">
             {filterProduct.map((mobile,index)=>(
                     <div className="row my-4 py-4 border-bottom mobilecol">
                      <div className="col-sm-4">
                      <img src={mobile.imgSrc} alt=""/>
                     </div>
                     <div className="col-sm-4">
                      <h5>{mobile.name}</h5>
            
                      <ul>
                        <li>{mobile.specifications[0]}</li>
                        <li>{mobile.specifications[1]}</li>
                        <li>{mobile.specifications[2]}</li>
                        <li>{mobile.specifications[3]}</li>
                        <li>{mobile.specifications[4]}</li>
                        <li>{mobile.specifications[5]}</li>
                      </ul>
                     </div>
                     <div className="col-sm-4">
                      <h5>{mobile.price}</h5>
                      <button className="btn btn-warning "><Link className="remove" to={`/mobile-details/${mobile.name}`}>View Product</Link></button>
                      {mobile.isCart ? 
                      (<button className="btn btn-success" onClick={()=> goTocart()}>Go to cart</button>):
                      (<button className="btn btn-primary" onClick={()=>addTocart(index)}>Add to cart</button>)
                      }
                     </div>
                     </div>
                  ))}
                </div>
             </div>
          </div>
      
  )
}
export default Mobiles;