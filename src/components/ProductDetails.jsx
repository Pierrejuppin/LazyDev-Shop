function ProductDetails({productList,setArticleIndex}) {

    const handleArticle = (index)=>{
        setArticleIndex(productList[index])
    }

    return (
        
        {productList.map(index) => (
            <div key={name} onClick={() => handleProductClick(index)}>
           
           )}


    
}




export default ProductDetails