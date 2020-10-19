import React from "react";
import "./BusinessList.css";
import Business from "../business/business";

const BusinessList = (props) => {
  return (
    <>
      <div className="BusinessList">
        {!!props.businesses && props.businesses.length > 0 && props.businesses.map((business) => {
          return <Business business={business} />;
        })}
      </div>
    </>
  );
};

export default BusinessList;
