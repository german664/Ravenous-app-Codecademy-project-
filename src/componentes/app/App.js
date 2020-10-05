import React from "react";
import Business from "../business/business";
import BusinessList from "../businessList/BusinessList";
import "./app.css"
import SearchBar from "../searchBar/SearchBar";

function App() {
  let business = {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };
  const businesses = [business, business, business, business, business, business]
  return (
    <>
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />

      </div>

    </>
  )
}

export default App;
