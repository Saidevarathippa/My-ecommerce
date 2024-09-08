import { Link } from "react-router-dom";
import "./login.css"

function Login(){
   return(
    <div className="Login-page">
      <div className="Login-child">
        <h1 className="Login-text">Login Here</h1>
        <input className="Login-child1" placeholder="Email.."/><br/>
        <input className="Login-child1" placeholder="Password.."/><br/>
        <button className="Login-child1">Login</button><br/>
        <Link to="/register" className="link">Dont have an Account? Register</Link>
      </div>
    </div>
   )
}
export default Login;