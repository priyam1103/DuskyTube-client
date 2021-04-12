import React from "react";

export default function HomeHeader({filters,handleFilter}) {
  return (
    <div className="filter-bar">
      <span className="option" onClick={()=>handleFilter(null,null)}>All</span>
      {filters.map((item, index) => (
        <span onClick={()=>handleFilter(item.type,item.value)} key={index} className="option">{item.value}</span>

))}
    </div>
  );
}
