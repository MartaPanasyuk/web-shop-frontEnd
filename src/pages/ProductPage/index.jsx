import "./style.css"
import axios from "axios";
import { useState, useEffect } from "react";

export const ProductPage = () => {
const [products, setProducts] = useState([]);
const [categories, setCategories ] = useState([]);
const URL = "http://localhost:4000";
// Fetching all products
useEffect(() => {
  const fetchProducts = async (req, res) => {
    try {
      const allProducts = await axios.get(`${URL}/products`);
      // console.log("Products: ", res.data);
      setProducts(allProducts.data)
    } catch (e) {
      console.log(e.message)
    }
  }
  fetchProducts();
}, [])

// Fetching all categories
useEffect(() => {
  const fetchCategories = async (req, res) => {
    try {
      const allCategories = await axios.get(`${URL}/categories`)
      setCategories(allCategories.data);
    } catch (e) {
      console.log(e.message);
    }
  }
  fetchCategories();
}, [])


  return (
    <div className="Container">
      <div>
        <h4>Categories</h4>
        <ul>
          {categories.map(category => {
            return (
              <li key={category.id}>{category.title}</li>
            )
          })}
        </ul>
      </div>  
      
    </div>
  )
}
