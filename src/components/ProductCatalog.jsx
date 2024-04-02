import Product from "./components/Product.jsx";

function ProductCatalog({productList}) {


    return (
<div className="catalog">

{productList.map((article) =>
<div className="card">        
         <h2>{article.name}</h2>
         <img className= "img" src={article.image}  alt="" />
         <button onClick={() =>handleArticle(index)} key={p.name}> Plus de détails </button>  
        
</div>
 )}

</div>

    );
}




export default ProductCatalog