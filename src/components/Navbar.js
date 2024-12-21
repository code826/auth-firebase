import { NavLink } from "react-router-dom";
import { useAuth } from "../useAuth";

const Navbar = (props) =>{
    const {currentUser,logout} = useAuth();
    const handleLogout = async () =>{
        try {
            await logout();
            alert('logout');
            
        } catch (error) {
            console.log('error',error);
        }
       
    }

    return (
        <nav>
            <span>
                <NavLink  className={({ isActive }) =>  isActive ? "active" : ""} to="/">Home</NavLink>
            </span>
            <span>
                {!currentUser && <NavLink className={({ isActive }) =>  isActive ? "active" : ""}  to="/signin" >Sign In</NavLink>}
                
            </span>
            <span>
                {currentUser && <button onClick={() =>{
                    logout();
                }} >Log Out</button>}
                
            </span>
          
           
        </nav>
    );
}

export default Navbar;