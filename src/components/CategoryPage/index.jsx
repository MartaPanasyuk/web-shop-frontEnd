import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "../ProductCard";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null); // { ... }

  useEffect(() => {
    const fetchById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/categories/${categoryId} `
        );
        //console.log("am I getting a response", response);
        setCategory(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchById();
  }, [categoryId]);

  return (
    <div>{category ? <h1>{category.title}</h1> : <h3>Loading...</h3>}</div>
  );
};

export { CategoryPage };
