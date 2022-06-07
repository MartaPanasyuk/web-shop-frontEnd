import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import {
  AboutUsPage,
  HomePage,
  ProductPage,
  ProductDetailsPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <h1>NavBar</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
