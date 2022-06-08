import "./style.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { SideBar, ProductCard } from "../../components";


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
        const allCategories = await axios.get(`${URL}/categories`);
        setCategories(allCategories.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchCategories();
  }, [])


  return (
    <div className="ProductPage-Container">
      <SideBar categories={categories}/>
      <div className="ProductCards-Container">
        {products.map(product => {
          return (
            <ProductCard key={product.id} title={product.title} price={product.price} description={product.description} rating={product.rating} image={product.mainImage} productId={product.id}/>
          )
        })}
      </div>
    </div>
  )
}
