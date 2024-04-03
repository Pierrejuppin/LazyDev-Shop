
import Product from "./Product.jsx";

function ProductCatalog({ productsList, productClick, filterProduct }) {
  const filterCategory = productsList.filter((p) => p.category.includes({filterProduct}));


  return (
    <div className="catalog">
      {productsList.map((p) => (
          <Product
          key={p.name}
          name={p.name}
          image={p.image}
          price={p.price}
          category={p.category}
          selectedClick={() => productClick(p)}
        />
      ))}
    </div>
  );
}

export default ProductCatalog;