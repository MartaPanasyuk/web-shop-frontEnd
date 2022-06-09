import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductInfo } from "../../components";
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      const productId = params.productId;
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        setProduct(response.data);
        // console.log("smth", response.data);
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

      {product ? (
        <div className="product_deatils_container">
          <div className="picture_container">
            {" "}
            <img src={product.mainImage} alt="product" />{" "}
          </div>
          <div className="text_container">
            {" "}
            <h2 className="product_title">{product.title}</h2>
            <p className="product_rating">Rating: {product.rating}</p>
            <button className="review_btn">Add Review</button>
            <p className="product_price">€{product.price}</p>
            <p className="product_description">{product.description}</p>
            <div>
              <button className="cart_btn cart">Add to Cart</button>
              <button className="favorite_btn">
                <AiOutlineHeart /> Favorite
              </button>
            </div>
            <p className="product_category">
              {" "}
              Category: {product.category.title}
            </p>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
      <ProductInfo product={product} />
    </div>
  );
};
export { ProductDetailsPage };

//
