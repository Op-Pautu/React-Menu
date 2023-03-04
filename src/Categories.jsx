import React from "react";

const Categories = () => {
  return (
    <nav>
      <div className="btn-container">
        <button className="filter-btn">all</button>
        <button className="filter-btn">breakfast</button>
        <button className="filter-btn">lunch</button>
        <button className="filter-btn">shakes</button>
      </div>
    </nav>
  );
};

export default Categories;
