import React from "react";


function ProductDetails({ product }) {
if (!product) return null;



  return (
    
    <div className="card">
      <img className="img"   src={product.image} alt={product.name} />
      <div className="classBody">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
    </div>
);}




export default ProductDetails;
