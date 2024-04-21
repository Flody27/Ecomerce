import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/Productos" />
          <Route element={<Users />} path="/Usuarios" />
          <Route element={<Login />} path="/IniciarSesion" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
