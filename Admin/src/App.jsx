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
          <Route element={<Products />} path="/Products" />
          <Route element={<AddProduct />} path="/AddProduct" />
          <Route element={<EditProduct />} path="/EditProduct/:id" />
          <Route element={<ProductPreview />} path="/Product/:id" />

          {/* Customers */}
          <Route element={<Customers />} path="/Customers" />
          <Route element={<AddCustomer />} path="/AddCustomer" />
          <Route element={<EditCustomer />} path="/EditCustomer/:id" />
          <Route element={<InfoCustomer />} path="/Customer/:id" />

          {/* Employees */}
          <Route element={<Employees />} path="/Employees" />
          <Route element={<AddEmployee />} path="/AddEmployee" />
          <Route element={<EditEmployee />} path="/EditEmployee/:id" />
          <Route element={<InfoEmployee />} path="/Employee/:id" />

          {/* Roles */}
          <Route element={<Roles />} path="/Roles" />
          <Route element={<AddRole />} path="/AddRole" />
          <Route element={<EditRole />} path="/EditRole/:id" />

          {/* Auth */}
          <Route element={<Login />} path="/Login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
