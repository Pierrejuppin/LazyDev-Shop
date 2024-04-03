function ProductFilter({productsList, setfilterProduct}) {
    const handleFilterProduct = (category) => {
        setfilterProduct(category)
    }
    return(
      <>
        <button onClick={()=> handleFilterProduct ("Coup de coeur")}>❤️ Coup de coeur</button>
        <button onClick={()=>handleFilterProduct("Utile")}>Utile</button>
        <button onClick={()=>handleFilterProduct("Indispensable")}>Indispensable</button>
      </>
    );
  }
  
  export default ProductFilter;
