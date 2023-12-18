import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../Components/Addcoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import AllCard from "../Componentes/AllCard/AllCard";
import SingUp from "../Components/Sing Up/SingUp";
import Details from "../Components/DetailsPage/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: ()=> fetch('http://localhost:5000/coffee')
    },
    {
        path: "/AllCard",
        element: <AllCard></AllCard>,
        // loader: ()=> fetch('http://localhost:5000/coffee')
    },
    {
        path: "/Singup",
        element: <SingUp></SingUp>

    },
    {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>
    },
    {
        path:"/details/:id",
        element: <Details></Details>
    },
    {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    },
   
])

export default router;