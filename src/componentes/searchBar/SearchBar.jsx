import React, { useState } from "react";
import "./SearchBar.css";
import { Yelp } from "../../util/Yelp.js"
import BusinessList from "../businessList/BusinessList";

const SearchBar = () => {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  const getSortByClass = (sortByOption) => {
    if (state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };
  const [businesses, setBusinesses] = useState([])

  const handleSortByChange = (sortByOption) => {
    setState((prevState) => {
      return { ...prevState, sortBy: sortByOption };
    });
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOption}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };
  const [state, setState] = useState({
    term: "",
    location: "",
    sortBy: "best_match",
  });

  const handleTermChange = (e) => {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState, term: value };
    });
  };
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setState((prevState) => {
      return { ...prevState, location: value };
    });
  };
  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(business => setBusinesses(business))
  };
  const handleSearch = (e) => {
    searchYelp(state.term, state.location, state.sortBy);
    e.preventDefault();

  };
  return (
    <>
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit" onClick={handleSearch}>
        <a href="">Let's Go</a>
      </div>
      </div>
      <BusinessList businesses={businesses} />
      </>
  );
};

export default SearchBar;
