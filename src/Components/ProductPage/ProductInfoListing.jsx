import React from "react";
import "./styles/ProductInfoListing.css";
import { GoNote } from "react-icons/go";
import { BiSortUp, BiCategoryAlt } from "react-icons/bi";
import {Button} from "@chakra-ui/react"

export default function ProductInfoListing({count}) {
  return (
    <div className="products_listing_info_mother_container">
      {/* this div given only for adjust flex category */}
      <div className="flex_props">
        <div className="total_products_count_div">
          <span className="product_count">showing {count} products </span>
        </div>
        <div className="product_category_div">
          <span className="icons">
            <BiCategoryAlt className="icon_cat" size="18px" />
          </span>
          <span className="cat_title">All Eyeglasses</span>
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
