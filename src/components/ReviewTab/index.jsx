import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewTab = () => {
  const params = useParams();
  const [review, setReview] = useState([]);
  const productId = params.productId;

  useEffect(() => {
    const fetchReviewById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/reviews/${productId}`
        );
        console.log("my review", response.data);
        setReview(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchReviewById();
  }, []);

  return (
    <div className="Reviews_section Container">
      <h2>Reviews</h2>

      {!review
        ? "No reviews for this item"
        : review.map((item) => {
            return (
              <div>
                <h3>Name: {item.name}</h3>
                <p className="review_text">{item.description}</p>
              </div>
            );
          })}
    </div>
  );
};

export { ReviewTab };
