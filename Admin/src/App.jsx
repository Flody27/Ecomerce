import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Products
import { Products, AddProduct, EditProduct, ProductPreview } from "./pages/Products/Index";
// Customers
import {Customers,AddCustomer,EditCustomer,InfoCustomer} from "./pages/Customers/Index";
// Employees
import {Employees, AddEmployee, EditEmployee, InfoEmployee} from "./pages/Employees/Index";
// Roles
import { Roles, AddRole, EditRole, Role } from "./pages/Roles/Index";
// Orders
import { Orders, AddOrder, EditOrder, Order } from "./pages/Orders/Index";
// Refunds
import { Refunds, AddRefund, EditRefund, Refund } from "./pages/Refunds/Index";
// Sales
import { Sales, AddSale, EditSale, Sale } from "./pages/Sales/Index";
// Auth
import Login from "./pages/Auth/Login";
// Sesion Context
import { UserProvider } from "./Context/Session";

function App() {
  return (
    <>
      <UserProvider>
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
      </UserProvider>
    </>
  );
}

export default App;
