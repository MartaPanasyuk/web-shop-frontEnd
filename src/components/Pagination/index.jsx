import "./style.css"
import { useState } from "react";

const Pagination = ({ productCount }) => {
  const [ pageNumber, setPageNumber ] = useState(1);
  const [ maxPageNumber, setMaxPageNumber ] = useState(4)

// Increases page number 
  const incrementPageNumber = () => {
    if (pageNumber === maxPageNumber) {
      return;
    }
    setPageNumber(pageNumber + 1);
  }

// Decreases page number
  const decrementPageNumber = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1)
  }

  return (
    <div className="Pagination"><p><button onClick={() => setPageNumber(1)}>&lt;&lt;</button> <button onClick={() => decrementPageNumber()}>&lt;</button> Page <b>{pageNumber}</b> out of <b>{maxPageNumber}</b> <button onClick={() => incrementPageNumber()}>&gt;</button> <button onClick={() => setPageNumber(maxPageNumber)}>&gt;&gt;</button></p><p>{productCount} products</p></div>
  )
}
export { Pagination };