import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Products
import {Products,AddProduct,EditProduct,ProductPreview} from "./pages/Products/Index";
// Customers
import {Customers,AddCustomer,EditCustomer,InfoCustomer} from "./pages/Customers/Index";
// Employees
import {Employees,AddEmployee,EditEmployee,InfoEmployee} from "./pages/Employees/Index";
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
import { RequiredAuth } from "./Services/RequiredAuth";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <RequiredAuth>
                  <Home />
                </RequiredAuth>
              }
              path="/"
            />
            {/* Products */}
            <Route
              element={
                <RequiredAuth>
                  <Products />
                </RequiredAuth>
              }
              path="/Products"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddProduct />
                </RequiredAuth>
              }
              path="/AddProduct"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditProduct />
                </RequiredAuth>
              }
              path="/EditProduct/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <ProductPreview />
                </RequiredAuth>
              }
              path="/Product/:id"
            />

            {/* Customers */}
            <Route
              element={
                <RequiredAuth>
                  <Customers />
                </RequiredAuth>
              }
              path="/Customers"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddCustomer />
                </RequiredAuth>
              }
              path="/AddCustomer"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditCustomer />
                </RequiredAuth>
              }
              path="/EditCustomer/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <InfoCustomer />
                </RequiredAuth>
              }
              path="/Customer/:id"
            />

            {/* Employees */}
            <Route
              element={
                <RequiredAuth>
                  <Employees />
                </RequiredAuth>
              }
              path="/Employees"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddEmployee />
                </RequiredAuth>
              }
              path="/AddEmployee"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditEmployee />
                </RequiredAuth>
              }
              path="/EditEmployee/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <InfoEmployee />
                </RequiredAuth>
              }
              path="/Employee/:id"
            />

            {/* Roles */}
            <Route
              element={
                <RequiredAuth>
                  <Roles />
                </RequiredAuth>
              }
              path="/Roles"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddRole />
                </RequiredAuth>
              }
              path="/AddRole"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditRole />
                </RequiredAuth>
              }
              path="/EditRole/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <Role />
                </RequiredAuth>
              }
              path="/Role/:id"
            />

            {/* Orders */}
            <Route
              element={
                <RequiredAuth>
                  <Orders />
                </RequiredAuth>
              }
              path="/Orders"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddOrder />
                </RequiredAuth>
              }
              path="/AddOrder"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditOrder />
                </RequiredAuth>
              }
              path="/EditOrder/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <Order />
                </RequiredAuth>
              }
              path="/Order/:id"
            />

            {/* Refunds */}
            <Route
              element={
                <RequiredAuth>
                  <Refunds />
                </RequiredAuth>
              }
              path="/Refunds"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddRefund />
                </RequiredAuth>
              }
              path="/AddRefund"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditRefund />
                </RequiredAuth>
              }
              path="/EditRefund/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <Refund />
                </RequiredAuth>
              }
              path="/Refund/:id"
            />

            {/* Sales */}
            <Route
              element={
                <RequiredAuth>
                  <Sales />
                </RequiredAuth>
              }
              path="/Sales"
            />
            <Route
              element={
                <RequiredAuth>
                  <AddSale />
                </RequiredAuth>
              }
              path="/AddSale"
            />
            <Route
              element={
                <RequiredAuth>
                  <EditSale />
                </RequiredAuth>
              }
              path="/EditSale/:id"
            />
            <Route
              element={
                <RequiredAuth>
                  <Sale />
                </RequiredAuth>
              }
              path="/Sale/:id"
            />

            {/* Auth */}
            <Route element={<Login />} path="/Login" />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
