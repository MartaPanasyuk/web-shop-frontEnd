import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.css";

const ProductCard = ({title, price, description, rating, image, productId}) => {
  return (
    <div className="ProductCard">
        <Link to={`/products/${productId}`} className="Product-Link"><img src={image} alt="a product" className="ProductCard-Image"/></Link>
        <div className="ProductCard-Description">
        <Link to={`/products/${productId}`} className="Product-Link"><h3>{title}</h3></Link>
            <ul className="ProductCard-Price-Rating">
                <li>€{price}</li>
                <li>Rating: {rating}</li>
            </ul>
            <p>{description}</p>
            <div className="Product-Card-Icon-Container">
                  <IoCartOutline />
                  <AiOutlineHeart />
                  <FaSearchPlus />
            </div>
        </div>


    </div>
  )
}

export { ProductCard }