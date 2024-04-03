import React from "react";


function Product({ name, image, price, category, selectedClick }) {
  
  
  return (
    
    <div className="card">
      <img className="img" src={image} alt={name} />
      <div className="classBody">
        <h2>{name}</h2>
        <p>{price}</p>
        <button className="boutton"   onClick={selectedClick}>Détails</button>
      </div>
    </div>
  
);}

export default Product;
