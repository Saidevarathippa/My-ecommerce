import { Link } from "react-router-dom";
import"./register.css"
function Register(){

  return (
    <div className="parent">
      <div className="Register-page">
      <div className="Register-child">
        <h1 className="Register-text">Register Here</h1>
        <input type="text" className="Register-child1" placeholder="FirstName.."/><br/>
        <input className="Register-child1" placeholder="LastName.."/><br/>
        <input className="Register-child1" placeholder="Email.."/><br/>
        <input className="Register-child1" placeholder="Mobile.."/><br/>
        <input className="Register-child1" placeholder="Password.."/><br/>
        <input className="Register-child1" placeholder="Repeat password.."/><br/>
        <button className="Register-child1">Register</button><br/>
        <Link to="/login" className="link">Already have an Account? Login</Link>
      </div>
    </div>
    </div>
  )
}

export default Register;