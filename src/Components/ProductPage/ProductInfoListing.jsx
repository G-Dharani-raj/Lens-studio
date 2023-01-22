import React,{useContext} from "react";
import "./styles/ProductInfoListing.css";
import { GoNote } from "react-icons/go";
import { BiSortUp, BiCategoryAlt } from "react-icons/bi";
import {Button} from "@chakra-ui/react"
import { productContext } from "../../Context/PrductContext";

export default function ProductInfoListing({count}) {
  const { sortData ,selectedCategory }=useContext(productContext)
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
          <span className="cat_title">{selectedCategory ||"All Glasses"}</span>
        </div>
      </div>
      <div className="sort_price_review_div">
        <span className="icons">
          <BiSortUp hover={"red"} size="18px" />{" "}
        </span>
        <span> Sort</span>
        <select onChange={({target})=>sortData(target.value)} >
          <option value="default">default -</option>
          <option value="desc">Price:Hight to Low</option>
          <option value="asc">Price:Low to Hight</option>
          <option value="asc">Review:Low to Hight</option>
          <option value="asc">Review:Low to Hight</option>

        </select>
      </div>
    </div>
  );
}
