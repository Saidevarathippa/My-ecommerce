import { useParams,} from "react-router-dom";
import { useState } from "react";

function MobileDetails(){
  const params=useParams();
  console.log(params.mobileName)
  const mobiles=[
    {
        imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/t/n/-original-imah2hn8khvuju8s.jpeg?q=70",
        price:"₹32,999",
        name:"OPPO Reno 12 5G (Sunset Peach, 256 GB)",
        specifications:[
          '8 GB RAM | 256 GB ROM | Expandable Upto 1 TB',
          '17.02 cm (6.7 inch) Full HD+ Display',
          '50MP + 8MP + 2MP | 32MP Front Camera',
          '5000 mAh Battery',
          'Dimensity 7300 Energy Processor',
          '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
        ],
    thumbnailimage:[
      "https://www.reliancedigital.in/medias/Oppo-Reno12-494421812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NjMzNTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2gyNi8xMDE3MDMxMjY1NDg3OC5qcGd8OGQ3NjgzYWUzOTAzNmQ2MDYxZTdkZGUxOTNiNzY4ODJlMTA2Y2ZiNThkODgwNTA5NDMzMjQwZGFkNDVjOTIyOQ",
      "https://www.reliancedigital.in/medias/Oppo-Reno12-494421812-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyOTcyNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGYzL2gyMy8xMDE3MDMxMDY4ODc5OC5qcGd8OWQ2ODJkMGFmOWQ4ZDA2MmE4M2RjOTBkZGViYTIwY2E0MTIxM2E3MDkyMTUzZDQ4ZTczZjE0ZWU3Yjk0ZTcyMA",
      "https://www.reliancedigital.in/medias/Oppo-Reno12-494421812-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjkwNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGU4L2g5Mi8xMDE3MDMxMTAxNjQ3OC5qcGd8Njk2M2M3MWI0ZTA3MDhkZjFmZmYyNWEyYzMxNjgzYmNjMzc0Y2UwN2JlMGVhMWRmMTg1MDlhYjIyYTcyMmMzOQ",
      "https://www.reliancedigital.in/medias/Oppo-Reno12-494421812-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NTU0NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBkL2gzNy8xMDE3MDMxMTk5OTUxOC5qcGd8ZWRjMjJkMzFlYThjMGFhOGYxNWRiMzBhOWFmNjliNjFhNDYyZGFiZGE0N2ZhNDQ2Zjc0MTk5YzcxZmE0MzEwOA"
    ]
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
      price:"₹15,999",
      name:"realme P1 5G (Phoenix Red, 128 GB)",
      specifications:[
        '6 GB RAM | 128 GB ROM | Expandable Upto 2 TB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '50MP + 2MP | 16MP Front Camera',
        '5000 mAh Battery',
        'Dimensity 7050 Processor',
        '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
      ],
    thumbnailimage:[
      "https://image01.realme.net/general/20240409/1712655610552a1a16a2f0ef4433f8a541142361a6802.png.webp?width=1440&height=1440&size=456953",
      "https://image01.realme.net/general/20240409/17126556196146f1d0fbee1a244928e97ce1f69be500f.png.webp?width=1440&height=1440&size=124446",
      "https://image01.realme.net/general/20240409/17126556276833b5c5dbd757f4acdbe8695068ee8fe27.png.webp?width=1440&height=1440&size=70859",
      "https://image01.realme.net/general/20240409/17126556427654472a0e5bd2640ac8396e60adee61df8.png.webp?width=1440&height=1440&size=499460"
    ]
  },
  {
    imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70",
    price:"₹22,999",
    name:"Motorola Edge 50 Fusion (Hot Pink, 128 GB)",
    specifications:[
       '8 GB RAM | 128 GB ROM',
       '17.02 cm (6.7 inch) Full HD+ Display',
       '50MP + 13MP | 32MP Front Camera',
       '5000 mAh Battery',
       '7s Gen 2 Processor',
       '1 Year on Handset and 6 Months on Accessories'
    ],
    thumbnailimage:[
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70&crop=false",
      "https://www.saasna.com/cdn/shop/files/original-imahyxj4zs583ste.jpg?v=1717159791&width=823",
      "https://www.saasna.com/cdn/shop/files/original-imahyxj4st5kzgrd.jpg?v=1717159791&width=823",
      "https://www.saasna.com/cdn/shop/files/original-imahyxj45xg3qpyk.jpg?v=1717159791&width=823"
    ]
},
{
  imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/k/9/g34-5g-pb1v0001in-motorola-original-imagwu4r4xze9jwz.jpeg?q=70",
  price:"₹₹11,999",
  name:"Motorola G34 5G (Ice Blue, 128 GB)",
  specifications:[
             '8 GB RAM | 128 GB ROM',
             '16.51 cm (6.5 inch) HD+ Display',
             '50MP + 2MP | 16MP Front Camera',
             '5000 mAh Battery',
             'Snapdragon 695 5G Processor',
'                1 Year on Handset and 6 Months on Accessories',
  ],
    thumbnailimage:[
      "https://img1.gadgetsnow.com/gd/images/products/additional/large/G504673_View_1/mobiles/smartphones/motorola-moto-g34-5g-128-gb-ice-blue-8-gb-ram-.jpg",
      "https://img2.gadgetsnow.com/gd/images/products/additional/large/G504673_View_2/mobiles/smartphones/motorola-moto-g34-5g-128-gb-ice-blue-8-gb-ram-.jpg",
      "https://img6.gadgetsnow.com/gd/images/products/additional/large/G504673_View_3/mobiles/smartphones/motorola-moto-g34-5g-128-gb-ice-blue-8-gb-ram-.jpg",
      "https://img2.gadgetsnow.com/gd/images/products/additional/large/G504673_View_10/mobiles/smartphones/motorola-moto-g34-5g-128-gb-ice-blue-8-gb-ram-.jpgg"
    ]
},
{
imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
price:"₹65,999",
name:"Apple iPhone 15 (Black, 128 GB)",
specifications:[

  '128 GB ROM',
  '15.49 cm (6.1 inch) Super Retina XDR Display',
  '48MP + 12MP | 12MP Front Camera',
  'A16 Bionic Chip, 6 Core Processor Processor',
  '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
],
    thumbnailimage:[
      "https://d2xamzlzrdbdbn.cloudfront.net/products/510a4dbf-1c36-4d1a-96c0-e12409acc15024061143.jpg",
      "https://d2xamzlzrdbdbn.cloudfront.net/products/90c76e46-080a-4816-8c6d-cdc3524d15d724061143_182x182.jpg",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673187/Croma%20Assets/Communication/Mobiles/Images/300652_4_fuogmz.png?tr=w-360",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673194/Croma%20Assets/Communication/Mobiles/Images/300652_5_lgpprx.png?tr=w-360"
    ]
}
  ];
  const FilterMobile=mobiles.find(phone =>phone.name === params.mobileName);
  console.log(FilterMobile);
  const [selectedImage,setSelectedImage]=useState(FilterMobile.thumbnailimage[0]);
 const updateSelectedimg=(imgSrc)=>{
  setSelectedImage(imgSrc);
  console.log(selectedImage)
 }
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm">
            <div className="row">
              <div className="col-sm-2">
                {FilterMobile.thumbnailimage.map((thumbnailimg,index)=>(
                  <div className="mgh1" style={{border:'2px solid blue'}} onClick={()=> updateSelectedimg(thumbnailimg)}>
                  <img src={thumbnailimg} alt=""  style={{height:"80px"}} className="img-fluid"/>
                  </div>
                ))}
              </div>
              <div className="col-sm-4">
                <img src={selectedImage} alt=""  style={{height:"350px"}}/>
              </div>
                      
              <div className="col-sm-6">
                     <h5>{FilterMobile.name}</h5>
                      <ul>
                        <li>{FilterMobile.specifications[0]}</li>
                        <li>{FilterMobile.specifications[1]}</li>
                        <li>{FilterMobile.specifications[2]}</li>
                        <li>{FilterMobile.specifications[3]}</li>
                        <li>{FilterMobile.specifications[4]}</li>
                        <li>{FilterMobile.specifications[5]}</li>
                      </ul>
                      <button className="btn btn-primary">Add to cart</button>
                      <button className="btn btn-secondary">Buy now</button>
                </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}
export default MobileDetails;



