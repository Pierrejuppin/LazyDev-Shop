import { useState } from 'react'
import './App.css'

import Product from "Product.jsx"
import ProductCatalog from "ProductCatalog.jsx"
import ProductFilter from "ProductFilter.jsx"
import ProductDetails from "ProductDetails.jsx"

const products = [
  {
      name: "WC portatif",
      image: "./assets/",
      price: "1900€",
      category: "Coup de coeur"
  },
  {
    name: "Livre: Web pour les Nulls",
    image: "./assets/",
    price: "9,90€",
    category: "utile"
},
{
  name: "Correcteur de posture",
  image: "./assets/",
  price: "19,90€",
  category: "utile"
},
{
  name: "Pince attrape tout",
  image: "./assets/",
  price: "75€",
  category: "indispensable"
},
{
  name: "Canapé Desk",
  image: "./assets/",
  price: "47,50€",
  category: "utile"
},
{
  name: "Tapis sans fil",
  image: "./assets/",
  price: "39,99€",
  category: "indispensable"
},
  
]



function App() {


  return (
    <>
      <div>
        <ProductFilter />
      </div>
      <div>
        <ProductCatalog />
      </div>
      <div>
        <ProductDetails />
      </div>
        <div>
          <Product />
        </div>
    </>
  )
}

export default App
