import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import EditProduct from "./pages/Products/EditProduct";
import ProductPreview from "./pages/Products/ProductPreview";
import Users from "./pages/Users/Users";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          {/* Products */}
          <Route element={<Products />} path="/Productos" />
          <Route element={<AddProduct />} path="/AgregarProducto" />
          <Route element={<EditProduct />} path="/EditarProducto/:id" />
          <Route element={<ProductPreview />} path="/:name/:id" />
          {/* Users */}
          <Route element={<Users />} path="/Usuarios" />
          {/* Auth */}
          <Route element={<Login />} path="/IniciarSesion" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
