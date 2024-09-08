
import { Link } from "react-router-dom";

function Navbarnew(){

  return(
<div className="Navbarnew">
<span className="">
<Link className="link" to="/Men">Men</Link>
<Link className="link" to="/Women">Women</Link>
<Link className="link" to="/Kids">Kids</Link>
<Link className="link" to="/Home&Living">Home&Living</Link>
<Link className="link" to="/Beauty">Beauty</Link>
<Link className="link" to="/Studio<">Studio</Link>
</span>
</div>
  )
}
export default Navbarnew;