import { useContext } from "react"
import { AuthContext } from "./context/AuthProvider"

export const useAuth = () =>{
   const {signin,signup,logout,currentUser} =  useContext(AuthContext);
   return {
    signin,
    signup,
    logout,
    currentUser
   }
}