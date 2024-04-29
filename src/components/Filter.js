import React, {useState} from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearchChange(e.target.value); // Callback to parent component
  };

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
