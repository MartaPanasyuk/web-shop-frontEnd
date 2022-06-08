import "./style.css"

const SideBar = ({categories}) => {
  return (
    <div className="Container">
      <div className="Categories-Container">
        <h4>Categories</h4>
        <ul>
          {categories.map(category => {
            return (
                <div className="Category">
                  <input type="checkbox"/>
                  <li key={category.id}>{category.title}</li>
                </div>
            )
          })}
        </ul>
      </div>  
      <div className="Ratings-Container">
          <h4>Rating Item</h4>
          <ul>
            <div className="Rating"><input type="checkbox"/><li>*****</li></div>
            <div className="Rating"><input type="checkbox"/><li>****</li></div>
            <div className="Rating"><input type="checkbox"/><li>***</li></div>
            <div className="Rating"><input type="checkbox"/><li>**</li></div>
            <div className="Rating"><input type="checkbox"/><li>*</li></div>
          </ul>
      </div>
      <div className="Filter-Container">
      <h4>Price Filter</h4>
          <ul>
            <div className="Rating"><input type="checkbox"/><li>0.00 - 150.00</li></div>
            <div className="Rating"><input type="checkbox"/><li>150.00 - 350.00</li></div>
            <div className="Rating"><input type="checkbox"/><li>150.00 - 500.00</li></div>
            <div className="Rating"><input type="checkbox"/><li>450.00</li></div>
          </ul>

      </div>
    </div>
  )
}

export { SideBar }