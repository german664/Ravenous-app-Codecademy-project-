import React, { useState } from "react";
import Business from "../business/business";
import BusinessList from "../businessList/BusinessList";
import "./app.css"
import SearchBar from "../searchBar/SearchBar";
import Yelp from "../../util/Yelp"

function App() {

  return (
    <>
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
      </div>

    </>
  )
}

export default App;
