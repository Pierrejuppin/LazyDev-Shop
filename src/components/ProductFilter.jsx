function ProductFilter({productList,setFilterProduct}) {

    const handleFilterProduct = (category)=>{
        setFilterProduct(productList[category])
    }

    return (
        
        {productList.filter(category) => (
            <div onClick={() => handleFilterProduct()}>
           





export default ProductFilter