import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import EditProduct from "./pages/Products/EditProduct";
import ProductPreview from "./pages/Products/ProductPreview";
import Customers from "./pages/Customers/Customers";
import AddCustomer from "./pages/Customers/AddCustomer";
import EditCustomer from "./pages/Customers/EditCustomer";
import InfoCustomer from "./pages/Customers/InfoCustomer";
import Employees from "./pages/Employees/Employees";
import AddEmployee from "./pages/Employees/AddEmployee";
import EditEmployee from "./pages/Employees/EditEmployee";
import InfoEmployee from "./pages/Employees/InfoEmployee";
import Login from "./pages/Auth/Login";
import Roles from "./pages/Roles/Roles";
import AddRole from "./pages/Roles/AddRole";
import EditRole from "./pages/Roles/EditRole";

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
          <Route element={<ProductPreview />} path="/Producto/:id" />

          {/* Customers */}
          <Route element={<Customers />} path="/Clientes" />
          <Route element={<AddCustomer />} path="/AgregarCliente" />
          <Route element={<EditCustomer />} path="/EditarCliente/:id" />
          <Route element={<InfoCustomer />} path="/Cliente/:id" />

          {/* Employees */}
          <Route element={<Employees />} path="/Empleados" />
          <Route element={<AddEmployee />} path="/AgregarEmpleado" />
          <Route element={<EditEmployee />} path="/EditarEmpleado/:id" />
          <Route element={<InfoEmployee />} path="/Empleado/:id" />

          {/* Roles */}
          <Route element={<Roles />} path="/Roles" />
          <Route element={<AddRole />} path="/AgregarRol" />
          <Route element={<EditRole />} path="/EditarRol/:id" />

          {/* Auth */}
          <Route element={<Login />} path="/IniciarSesion" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
