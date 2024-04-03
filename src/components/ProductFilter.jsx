function ProductFilter({handleFilterProduct}) {
    return (
      <>
        <button onClick={handleFilterProduct}>❤️ Coup de coeur</button>
        <button onClick={handleFilterProduct}>Utile</button>
        <button onClick={handleFilterProduct}>Indispensable</button>

        
      </>
    );
  }
  
  export default ProductFilter;
