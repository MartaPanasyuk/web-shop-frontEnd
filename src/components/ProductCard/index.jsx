import { IoCartOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import "./style.css";

const ProductCard = ({title, price, description, rating, image}) => {
  return (
    <div className="ProductCard">
        <img src={image} alt="a product" className="ProductCard-Image"/>
        <div className="ProductCard-Description">
            <h3>{title}</h3>
            <ul>
                <li>€{price}</li>
                <li>Rating: {rating}</li>
            </ul>
            <p>{description}</p>
            <div className="ProductCard-Icon-Container">
                <IoCartOutline />
                <AiFillHeart />
                <FaSearchPlus />
            </div>
        </div>


    </div>
  )
}

export { ProductCard }