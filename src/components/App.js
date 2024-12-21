import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingIn from "../pages/SignIn";
import Navbar from "./Navbar";
import Layout from "./Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"signin",
          element:<SignIn/>
        },
        {
          path:"signup",
          element:<SignUp/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}  />      
    </div>
  );
}

export default App;
