import { Navigate } from "react-router-dom";
import { useAuth } from "../useAuth";


const Home = () =>{
    const {currentUser} = useAuth();
    if(!currentUser){
        return <Navigate to="/signin"/>
    }
    return (
        <>
            {currentUser && currentUser.email}
            {!currentUser && "No Login"}
             <h1> Home</h1>
        </>
       
    )
}

export default Home;