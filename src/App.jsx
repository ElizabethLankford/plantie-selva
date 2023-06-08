import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
