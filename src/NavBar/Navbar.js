
import { Link } from "react-router-dom";

function Navbar(){

  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://www.fireboltt.com/cdn/shop/files/Background_150x.png?v=1620478900" alt="boltimg"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Watches</Link>
        </li>
        <Link className="nav-link" to="/mobiles">Mobiles</Link>
        <Link className="nav-link" to="/headphones">Headphones</Link>
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <Link className="nav-link" to="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart</Link>
          
      </ul>
      <Link className="nav-link one" to="/login">Login</Link>
      <Link className="nav-link " to="/register">Register</Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar;