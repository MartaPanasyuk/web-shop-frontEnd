import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer, CategoryPage, NavBarBunner } from "./components";
import { useState } from "react";
import {
  AboutUsPage,
  HomePage,
  ProductPage,
  ProductDetailsPage,
  LoginPage,
} from "./pages";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <div className="header_navbar">
        <NavBar token={token} />
      </div>
      <NavBarBunner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/contacts" element={<AboutUsPage />} />
        <Route
          path="/user/login"
          element={<LoginPage tokenSetter={setToken} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
