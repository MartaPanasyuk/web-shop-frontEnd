import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import {
  AboutUsPage,
  HomePage,
  ProductPage,
  ProductDetailsPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
          <Route path="/contacts" element={<AboutUsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
