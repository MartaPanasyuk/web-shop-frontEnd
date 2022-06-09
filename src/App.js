import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer, CategoryPage, NavBarBunner } from "./components";

import {
  AboutUsPage,
  HomePage,
  ProductPage,
  ProductDetailsPage,
  LoginPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <div className="header_navbar">
        <NavBar />
      </div>
      <NavBarBunner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/contacts" element={<AboutUsPage />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
