import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Card from "./components/Card";
import products from './config/products.json';
import { useState } from "react"

function App() {
  const [cart, updateCart] = useState([]);

  const updateCardFunc = (name) => {
    updateCart([...cart, name]);
  }

  const removeFromCart = (name) => {
    updateCart(cart.filter((product) => product!== name));
  }



  return (
    <>
      <Nav items={cart}/>
      <Banner />
      <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map(
            (product) => <Card key={product.id} product={product} inCart={cart.includes(product.Title)} updateCart={() => updateCardFunc(product.Title)} removeFromCart={() => removeFromCart(product.Title)}/>
          )}
          
        </div>
      </div>
    </section>
      <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </>
  )
}

export default App
