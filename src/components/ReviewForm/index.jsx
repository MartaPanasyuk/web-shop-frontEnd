import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ReviewForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState([]);
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  const submitComment = async (event) => {
    event.preventDefault();
    try {
      const postReview = await axios.post("http://localhost:4000/reviews", {
        name: name,
        description: description,
        productId: productId,
      });
      navigate(`/products/${productId}`);
      setName("");
      setDescription("");
      setProductId("");
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <div className="form">
      <form onSubmit={submitComment}>
        <div className="input-container">
          <label>Name </label>
          <input
            type="text"
            name="uname"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Comment </label>
          <input
            type="text"
            name="uname"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <label>ProductId </label>
          <input
            type="number"
            name="uname"
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export { ReviewForm };
