import { useState } from "react";
import { useAuth } from "../useAuth";

const SignUp = (props) =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signup} = useAuth();

    const handleSignup = async (e) =>{
        try {
            e.preventDefault();
            await signup(email,password);
            alert("User Sign Up SuccessFully");
        } catch (error) {
            console.log('error',error);
        }
       
    }

    return (
        <>
            <h2> Sign Up </h2>
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
                <button onClick={(e) =>{
                    handleSignup(e);
                }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
        
    )
}

export default SignUp;