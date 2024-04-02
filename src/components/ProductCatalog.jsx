function ProductCatalog({products}) {


    return (
<div className="catalog">

{products.map((article) =>
<div className="card">        
         <h2>{article.name}</h2>
         <img className= "img" src={article.image}  alt="" />
         <button> Plus de détails </button>  
        
</div>
 )}

</div>

    );
}




export default ProductCatalog