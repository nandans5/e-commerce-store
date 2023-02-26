import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
