import React, { useEffect } from "react";


const ProductFuncion = () =>{

    const [products, name] = React.userState(null);

    React.useEffect(() => {
        // console.log('useEffect')
        GetProduct();
    },[])

    const GetProduct = async() =>{
       const data = await fetch('https://api.kroger.com/v1 /productos');
       const products = await data.json();
       products(name);
    }

    return(
        <div>

            <h1></h1>

        </div>
    )
}

export default ProductFuncion
