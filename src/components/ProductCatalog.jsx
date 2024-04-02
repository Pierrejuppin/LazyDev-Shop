import Product from "./Product.jsx"
function ProductCatalog({productsList}) {


    return (
<div className="catalog">
{productsList.map((p) => (
      <Product 
      key ={p.name}
      name ={p.name}
      image={p.image}
      price={p.price}
      category={p.category}/>
))}
</div>

    );
}




export default ProductCatalog