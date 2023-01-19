import React from "react";
import "./styles/ProductCard.css";
import { StarIcon, UpDownIcon } from "@chakra-ui/icons";

export default function ProductCard({
  product_name,
  product_price,
  product_offer,
  id,
  product_image,
  rating_count,
  rating_value,
  size,
  tags,
}) {
  return (
    <>
      <div className="card_container divss">
        {/* next div is for product image */}
        <div className="imag_container">
          <img src={product_image} alt="" />
        </div>
        {/* next div is for rating count */}
        <div className="rating_count_container">
          <span className="ratings">{rating_value}</span>
          <span className="star">
            <img
              src="https://static.lenskart.com/media/desktop/prod-assets/in/Star/Star-bc9e9482b9288518d4c6baa521afbf0b.svg"
              alt=""
            />
          </span>
          <span className="rating_count">{rating_count}</span>
        </div>
        <div className="product_name_container">
          <h3>{product_name}</h3>
        </div>
        <div className="product_tags_container">
          <div className="tags_div">
            <span>{size} </span>
            <span className="uppdown_icon">
              <UpDownIcon boxSize={2} />
            </span>
            <span>{tags}</span>
          </div>
          <div className="color_div">
            <div className="colors_sample grey"></div>
            <div className="colors_sample golden"></div>
            <div className="colors_sample blue"></div>
            <div className="color_count">+2</div>
          </div>
        </div>
        <div className="product_price_container">
          <span>₹</span> <span>{product_price}</span>
          <span className="tax">(-tax)</span>
        </div>
        <div className="product_offer_container">
          <p>{product_offer}</p>
        </div>
      </div>
    </>
  );
}
