import { useParams } from "react-router-dom";
import { useState } from "react";
function ProductDetails(){
  const params=useParams();
  console.log(params.productName);
  const products =[
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/products/talk2-black_1_360x.png?v=1653643544',
      name:"Talk 2",
      model:"BT Calling HR SpO2",
      price:"₹1,299",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/talk2-black_1_e7bb322d-12a6-486d-a139-4b5a76f91bf0_400x.png?v=1709628939',
        'https://www.fireboltt.com/cdn/shop/files/talk2-black_4_f62e1541-7426-4412-806d-03ead8e14b2a_360x.png?v=1709628939',
        'https://www.fireboltt.com/cdn/shop/files/talk2-blue_1_9555b172-a6ce-4ca2-b0c0-cddf5241d5c2_360x.png?v=1709628940',
        
      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/products/2_6c1ace42-dfd2-43e3-881a-bd7d7a3eca22_360x.png?v=1679728526',
      name:"Legacy",
      model:"AMOLED | BT Calling",
      price:"₹2,499",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/products/2_6c1ace42-dfd2-43e3-881a-bd7d7a3eca22_360x.png?v=1679728526',
        'https://www.fireboltt.com/cdn/shop/products/1_74d3f2d8-8d9d-47f7-80a2-0d555d52f863_360x.png?v=1679728527',
        'https://www.fireboltt.com/cdn/shop/products/3_2c5b4e92-b54d-462d-b84a-4a5231ed6e57_360x.png?v=1679728527',
        'https://www.fireboltt.com/cdn/shop/products/4_b2590d51-d6bb-4448-85fa-2e60ba72351f_360x.png?v=1679728527',

      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/BLS_01_360x.png?v=1721109206',
      name:"Arc",
      model:"AMOLED | BT Calling",
      price:"₹1699",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/BLS_01_400x.png?v=1721109206',
        'https://www.fireboltt.com/cdn/shop/files/BLS_02_360x.png?v=1721109206',
        'https://www.fireboltt.com/cdn/shop/files/BLS_03_360x.png?v=1721109206',
        

      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_360x.png?v=1720530551',
      name:"Maveric",
      model:"51.33 mm Display BT Calling",
      price:"₹2,799 ",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/Black_01_53a058b5-640b-450b-af00-901dff5815e6_360x.png?v=1720530551',
        'https://www.fireboltt.com/cdn/shop/files/BlackGold_03_360x.png?v=1720530552',
        'https://www.fireboltt.com/cdn/shop/files/BlackGold_02_360x.png?v=1720530551',
      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/onyx-black_1_360x.png?v=1715246252',
      name:"Onyx",
      model:"AMOLED | BT Calling",
      price:"₹2,999 ",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/onyx-black_1_400x.png?v=1715246252',
        'https://www.fireboltt.com/cdn/shop/files/onyx-black_2_360x.png?v=1715246259',
        'https://www.fireboltt.com/cdn/shop/files/onyx-black_3_360x.png?v=1715246253',
        'https://www.fireboltt.com/cdn/shop/files/onyx-black_4_360x.png?v=1715246251',
      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/4_c1cc18b6-bae2-4bf9-a50d-99f2f79cf593_360x.png?v=1721199740',
      name:"Dapper",
      model:" BT Calling",
      price:"₹1,999 ",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/4_c1cc18b6-bae2-4bf9-a50d-99f2f79cf593_360x.png?v=1721199740',
        'https://www.fireboltt.com/cdn/shop/files/5_0df3609e-f24c-49c7-946b-edca23475802_360x.png?v=1721199739',
        'https://www.fireboltt.com/cdn/shop/files/19_5d2af015-23ce-4019-ad81-82d020b4a90c_360x.png?v=1721199740',
        'https://www.fireboltt.com/cdn/shop/files/16_fe473eab-1b1a-432e-840a-c1ed190cc261_360x.png?v=1721199739',
      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/brillia-black_1_360x.png?v=1715327162',
      name:"Brillia",
      model:"51.3mm AMOLED BT Calling",
      price:"₹1,699 ",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/brillia-black_1_400x.png?v=1715327162',
        'https://www.fireboltt.com/cdn/shop/files/brillia-black_2_360x.png?v=1715327161',
        'https://www.fireboltt.com/cdn/shop/files/brillia-black_3_360x.png?v=1715327170',
        'https://www.fireboltt.com/cdn/shop/files/brillia-black_4_360x.png?v=1715327150',
        'https://www.fireboltt.com/cdn/shop/files/brillia-black_5_360x.png?v=1715327160'


      ]
    },
    {
      imgSrc:'https://www.fireboltt.com/cdn/shop/files/Black_01_3e8c1628-8bf0-4d1e-a565-cf86b4f404b4_360x.png?v=1720597864',
      name:"Spacewatch",
      model:"AMOLED | BT Calling",
      price:"₹2,299 ",
      thumbnailImages:[
        'https://www.fireboltt.com/cdn/shop/files/Black_01_3e8c1628-8bf0-4d1e-a565-cf86b4f404b4_400x.png?v=1720597864',
        'https://www.fireboltt.com/cdn/shop/files/Black_02_a901881a-ad1a-4569-bdde-3356d617585f_360x.png?v=1720597864',
        'https://www.fireboltt.com/cdn/shop/files/Black_03_37529526-4335-4ad5-b0db-3534992996e3_360x.png?v=1720597864',
      
      ]
    },
    
    
    
  ]
  const FilterProduct=products.find(product => product.name === params.productName);
  console.log(FilterProduct);
 const [selectedImage,setSelectedImage] =useState(FilterProduct.thumbnailImages[0]);
 const updateSelectedImage =(imgSrc)=>{
  setSelectedImage(imgSrc)
 }
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm">
          <div className="row">
            <div className="col-sm-2">
            {FilterProduct.thumbnailImages.map((thumbnailimg,index) =>(
                <div className="updatediv" onClick={()=> updateSelectedImage(thumbnailimg)}>
                  <img src={thumbnailimg} alt="image1" className="updateimg"/>
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              <img src={selectedImage} alt="" className="img-fluid"/>
            </div>
                    
            <div className="col-sm-6">
                   <h5>{FilterProduct.name}</h5>
                    <p>{FilterProduct.model}</p>
                    <h5>{FilterProduct.price}</h5>
                    <button className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-secondary">Buy now</button>
              </div>

        </div>
        
      </div>
    </div>
  </div>
  )
}
export default ProductDetails;