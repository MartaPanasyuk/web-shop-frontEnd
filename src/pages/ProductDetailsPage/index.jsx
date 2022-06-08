import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Review, ProductInfo } from "../../components";

const ProductDetailsPage = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      const productId = params.productId;
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        setProducts(response.data);
        console.log(response.data.category);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProductById();
  }, []);
  return (
    <div className="Container">
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <Link to="/shop">Products</Link>
      </div>

      {products ? (
        <div className="product_deatils_container">
          <div className="picture_container">
            {" "}
            <img src={products.mainImage} alt="product" />{" "}
          </div>
          <div className="text_container">
            {" "}
            <h2 className="product_title">{products.title}</h2>
            <p className="product_rating">Rating: {products.rating}</p>
            <button className="review_btn">Add Review</button>
            <p className="product_price">€{products.price}</p>
            <p className="product_description">{products.description}</p>
            <button className="cart_btn cart">Add to Cart</button>
            <p className="product_category">
              {" "}
              Category: {products.category.title}
            </p>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
      {/* <Review /> */}
      <ProductInfo product={products} />
    </div>
  );
};
export { ProductDetailsPage };
