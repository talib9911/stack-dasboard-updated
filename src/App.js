import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/404/404";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import OrderPage from "./Pages/OrderPage/OrderPage.js";
import StockPage from "./Pages/StockPage/StockPage.js";
import PricingPage from "./Pages/PricingPage/PricingPage.js";
import ContactPage from "./Pages/ContactPage/ContactPage.js";
import AddContact from "./Pages/ContactPage/AddContact.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardPage />} />
            <Route path="/dashboardpage" element={<DashboardPage />} /> 
            <Route path="/productspage" element={<ProductsPage />} />
            <Route path="/orderpage" element={<OrderPage />} />
            <Route path="/stockpage" element={<StockPage />} />
            <Route path="/pricingpage" element={<PricingPage />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/addcontact" element={<AddContact />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
