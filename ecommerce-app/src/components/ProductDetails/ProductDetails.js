// import React from 'react'
// import { getProductId } from '../../ApiService/api'

// function ProductDetails() {


// useEffect(() => {

// const fetchProductDetails = async() =>{

// const data = await getProductId()

// }


// fetchProductDetails()
//   }
// }, [])




//   return (
//     <div className='product-details-container'>
//         <img src="" alt="image" className='product-image'/>

//         <div className='product-info'>

// <h2 className='product-title'>
// Sample
// </h2>

// <p className='product-description'>

//     Description
// </p>

// <p  className='product-price'>
// 10
// </p>


// <button className='buy-now-button'>Buy Now</button>
// <button className='go-back-home'>Go back Home</button>

//         </div>

//     </div>
//   )
// }

// export default ProductDetails




import React, { useEffect, useState } from 'react';
import { getProductId } from '../../ApiService/api';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

function ProductDetails() {

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState({})


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const data = await getProductId(id);
                setProductDetails(data)
                console.log(data);
            }
            catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

const handleBuyNow =() =>{
    window.confirm("The product is out of stock!")
}


    return (
        <div className="product-details-container">
            <img src={productDetails.image} alt="image" className="product-image" />

            <div className="product-info">
                <h2 className="product-title">
                    {productDetails.title}
                </h2>
                <p className="product-description">
                    {productDetails.description}
                </p>
                <p className="product-price">
                    ${productDetails.price}
                </p>

                <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>

                <Link to='/'>
                    <button className="go-back-home">Go back Home</button>
                </Link>

            </div>
        </div>
    );
}

export default ProductDetails;

