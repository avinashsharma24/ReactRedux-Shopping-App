import React, { useEffect } from "react";
import { useState } from "react";
import './SearchBar.css'

const SearchBar = ({handelOnSearch , searchString}) => {
  const [search, setSearch] = useState("");
  

  const searchApi = async (val) => {
    const data = await fetch("http://localhost:4000/Product");
    const res = await data.json();
  };

  useEffect(() => {
    searchApi();
  });

  const changeSearch = (ev) => {
    setSearch(ev.target.value);

    // console.log(ev.target.value)
  };

  return (
    <>
        <input
          type="text"
          placeholder="Search Product..."
          id="search-bar"
          value={searchString}
          style={{"borderRadius":"5px"}}
          onChange={(ev) => {
            // changeSearch(ev);
            handelOnSearch(ev.target.value);
          
          }}
        />

    </>
  );
};

export default SearchBar;
