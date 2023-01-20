import React from "react";
import "./styles/ProductInfoListing.css";
import { GoNote } from "react-icons/go";
import { BiSortUp, BiCategoryAlt } from "react-icons/bi";

export default function ProductInfoListing() {
  return (
    <div className="products_listing_info_mother_container">
      {/* this div given only for adjust flex category */}
      <div className="flex_props">
        <div className="total_products_count_div">
          <span>showing {"123"} products </span>
        </div>
        <div className="product_category_div">
          <span className="icons">
            <BiCategoryAlt size="18px" />
          </span>
          <span>All Eyeglasses</span>
        </div>
      </div>
      <div className="sort_price_review_div">
        <span className="icons">
          <BiSortUp size="18px" />{" "}
        </span>
        <span> Sort</span>
        <select>
          <option value="default">default -</option>
          <option value="price_HtL">Price:Hight to Low</option>
          <option value="price_LtT">Price:Low to Hight</option>
        </select>
      </div>
    </div>
  );
}
