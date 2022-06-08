import "./style.css"

const SideBar = ({categories}) => {
  return (
    <div className="Container">
      <div>
        <h4>Categories</h4>
        <ul>
          {categories.map(category => {
            return (
                <div className="Category">
                  <input type="checkbox"></input>
                  <li key={category.id}>{category.title}</li>
                </div>
            )
          })}
        </ul>
      </div>  
      
    </div>
  )
}

export { SideBar }