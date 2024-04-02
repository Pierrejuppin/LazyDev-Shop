import ProductCatalog from "./components/ProductCatalog.jsx"
import ProductDetails from "./components/ProductDetails.jsx";
import "./App.css";



function App() {


  return (
    <>
    <h1>Lazy Dev</h1>
        <div>
          <ProductCatalog 
          productsList = {productsList}/>
          </div>
    </>
  )
}


const productsList = [
  {
      name: "WC portatif",
      image: "src/assets/toilettebureau.jpeg",
      price: "1900€",
      category: "Coup de coeur"
  },
  {
    name: "Livre: Web pour les Nulls",
    image: "src/assets/livre.JPG",
    price: "9,90€",
    category: "utile"
},
{
  name: "Correcteur de posture",
  image: "src/assets/dos.JPG",
  price: "19,90€",
  category: "utile"
},
{
  name: "Pince attrape tout",
  image: "src/assets/pince.jpg",
  price: "75€",
  category: "indispensable"
},
{
  name: "Canapé Desk",
  image: "src/assets/bureau.JPG",
  price: "47,50€",
  category: "utile"
},
{
  name: "Tapis sans fil",
  image: "src/assets/tapis.JPG",
  price: "39,99€",
  category: "indispensable"
},
  
]
export default App
