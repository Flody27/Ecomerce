import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Products
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import EditProduct from "./pages/Products/EditProduct";
import ProductPreview from "./pages/Products/ProductPreview";
// Customers
import Customers from "./pages/Customers/Customers";
import AddCustomer from "./pages/Customers/AddCustomer";
import EditCustomer from "./pages/Customers/EditCustomer";
import InfoCustomer from "./pages/Customers/InfoCustomer";
// Employees
import Employees from "./pages/Employees/Employees";
import AddEmployee from "./pages/Employees/AddEmployee";
import EditEmployee from "./pages/Employees/EditEmployee";
import InfoEmployee from "./pages/Employees/InfoEmployee";
// Roles
import Roles from "./pages/Roles/Roles";
import AddRole from "./pages/Roles/AddRole";
import EditRole from "./pages/Roles/EditRole";
import Role from "./pages/Roles/Role";
// Orders
import Orders from "./pages/Orders/Orders";
import AddOrder from "./pages/Orders/AddOrder";
import EditOrder from "./pages/Orders/EditOder";
import Order from "./pages/Orders/Order";
// Refunds
import Refunds from "./pages/Refunds/Refunds";
import AddRefund from "./pages/Refunds/AddRefund";
import EditRefund from "./pages/Refunds/EditRefund";
import Refund from "./pages/Refunds/Refund";
// Sales
import Sales from "./pages/Sales/Sales";
import AddSale from "./pages/Sales/AddSale";
import EditSale from "./pages/Sales/EditSale";
import Sale from "./pages/Sales/Sale";

// Auth
import Login from "./pages/Auth/Login";

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
          <Route element={<Role />} path="/Role/:id" />

          {/* Orders */}
          <Route element={<Orders />} path="/Orders" />
          <Route element={<AddOrder />} path="/AddOrder" />
          <Route element={<EditOrder />} path="/EditOrder/:id" />
          <Route element={<Order />} path="/Order/:id" />

          {/* Refunds */}
          <Route element={<Refunds />} path="/Refunds" />
          <Route element={<AddRefund />} path="/AddRefund" />
          <Route element={<EditRefund />} path="/EditRefund/:id" />
          <Route element={<Refund />} path="/Refund/:id" />

          {/* Sales */}
          <Route element={<Sales />} path="/Sales" />
          <Route element={<AddSale />} path="/AddSale" />
          <Route element={<EditSale />} path="/EditSale/:id" />
          <Route element={<Sale />} path="/Sale/:id" />

          {/* Auth */}
          <Route element={<Login />} path="/Login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
