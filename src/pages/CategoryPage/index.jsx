import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      {category ? (
        <div>
          <div>
            <h1>{category.title}</h1>
            <div>
              {category.products.map((product) => {
                return (
                  <div>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <img src={product.mainImage} alt="product" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export { CategoryPage };
