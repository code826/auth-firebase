import { NavLink } from "react-router-dom";
import { useAuth } from "../useAuth";
import { useState } from "react";
const SignIn = (props) =>{
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const {signin} = useAuth();
    const handleSignIn =async  (e) =>{
        try {
            e.preventDefault();
            await signin(email,password);
            alert("User Login");
            
        } catch (error) {
            console.log('error',error);
        }
        
    }
    return (
        <>
            <h2> Sign In </h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value = {email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) =>{
                        setPassword(e.target.value);
                    }} id="exampleInputPassword1" />
                </div>
                <button onClick = {(e) =>{
                    handleSignIn(e);
                }} type="submit" className="btn btn-primary">Submit</button>
                <span>
                    <NavLink className={({ isActive }) =>  isActive ? "active" : ""} to="/signup">Sign Up</NavLink>
                </span>
            </form>
        </>
        
    )
}

export default SignIn;