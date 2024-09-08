import { useParams } from "react-router-dom";

function HeadphoneDetails(){
  const params=useParams();
  console.log(params.headphoneName);
  const headphones=[
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/o/n/modish-ombre-bassbeat-tune-c-in-ear-type-c-wired-earphones-with-original-imah2snvtjyymbae.jpeg?q=70",
      name:" Modish Ombre Bassbeat C Wired Earphones",
      price:"₹299"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/s/y/turner-20hrs-playtime-headphones-hybrid-wireless-calling-noise-original-imah2gjgvthmcqfq.jpeg?q=70",
      name:"TXOR TURNER, 20hrs Playtime Headphones",
      price:"₹809"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/d/8/o/-original-imagz5qagzek7tjz.jpeg?q=70",
      name:"boAt Rockerz 550 with 50mm Drivers",
      price:"₹1,798"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/2/j/l/-original-imah28h4mwkywgfu.jpeg?q=70",
      name:"SONY WH-1000XM4 Bluetooth Headset  (Black, On the Ear)",
      price:"₹19,989"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/p/k/-original-imahfgfk7rffntqf.jpeg?q=70",
      name:"SONY WH-CH720N Active Noise Cancelling (White, On the Ear)",
      price:"₹7,989"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/kvsfhjk0/headphone/2/t/x/-original-imag8mf8qga9z6ny.jpeg?q=70",
      name:"boAt Rockerz 450 Pro (Luscious Black, On the Ear)",
      price:"₹1,999"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/0/c/-original-imah28h3qdnerykz.jpeg?q=70",
      name:"SONY WH-1000XM4 Bluetooth Gaming Headset  (Silver, On the Ear)",
      price:"₹19,989"
    },
    {
      imgSrc:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/o/m/turner-20hrs-playtime-headphones-hybrid-wireless-calling-noise-original-imah2gjhxfwqmgqt.jpeg?q=70",
      name:"TXOR TURNER, 20hrs Playtime Headphones (White, On the Ear)",
      price:"₹809"
    },
  ]
  const FilterHeadphone=headphones.find(headphone=> headphone.name===params.headphoneName);
  console.log(FilterHeadphone);
  return(
    <div className="container">
    <div className="row">
      <div className="col-sm">
          <div className="row">
            <div className="col-sm-4">
              <img src={FilterHeadphone.imgSrc} alt="" className="img-fluid"/>
            </div>
                    
            <div className="col-sm-8">
                   <h5>{FilterHeadphone.name}</h5>
                    <h5>{FilterHeadphone.price}</h5>
                    <button className="btn btn-primary">Add to cart</button>
              </div>

        </div>
        
      </div>
    </div>
  </div>
  )
}
export default HeadphoneDetails;

