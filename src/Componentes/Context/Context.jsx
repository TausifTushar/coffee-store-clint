/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext()

const Context = ({children}) => {

    const [coffee, setCoffee]=useState([])
    const [cart, setCart] = useState([])

    const handelAddToCart = (id) =>{

    }

useEffect(()=>{fetch('http://localhost:5000/coffee')
.then(res=>res.json())
.then(data=>setCoffee(data))}, []
)
console.log(coffee)

// const searchProduct =(e)=>{
//     e.preventDefault();
    
// }
    return (
        <div>
            <dataContext.Provider value={{coffee, handelAddToCart}}>
                {children}
            </dataContext.Provider>
        </div>
    );
};

export default Context;