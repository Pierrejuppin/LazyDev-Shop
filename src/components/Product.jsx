<<<<<<< HEAD
=======
function Product({name, image, price, category}) {


    return (


<div className="card">
      <img className= "img" src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{price} €</p>
        {category}
        <button>GO</button>
         
       
      </div>
    </div>
  );

    
}




export default Product
>>>>>>> 0ba66aedd58c6ee760993aaf2c530341d20d6eec
