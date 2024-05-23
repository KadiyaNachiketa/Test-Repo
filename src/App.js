import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Nevbar } from "./Components/nevbar";
import { Shopcontex, ShopcontexProvider } from "./context/shop-contex";
import { Cart } from "./pages/cart/cart";
import { Form } from "./pages/ProductForm/form";
import { Shop } from "./pages/shop/shop";
import SignIn from "./Login";
import { useContext } from "react";

function App() {
  return (
    <div className="App">
      <ShopcontexProvider>
        <Router>
          <Nevbar />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </ShopcontexProvider>
    </div>
  );
}

export default App;
