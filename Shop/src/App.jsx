import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Paycheck, ShoppingCart } from "./pages/Sales/index.sales";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Paycheck />} path="/Paycheck" />
            <Route element={<ShoppingCart />} path="/ShoppingCart" />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
