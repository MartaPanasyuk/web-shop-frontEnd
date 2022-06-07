import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { ProductPage } from "./pages/ProductPage";
import { AboutUs } from "./pages/AboutUs";
import { ProductDetailPage } from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <h1>NavBar</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/details/:id" element={<ProductDetailPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
