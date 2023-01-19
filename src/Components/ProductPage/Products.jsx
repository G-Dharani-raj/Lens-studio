import React, { useState, useEffect } from "react";
import "./styles/products.css";
import { Image } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductFilter from "./ProductFilter";

const getData = async () => {
  return await fetch(
    "https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses"
  );
};

export default function Products() {
  const [data, setData] = useState([]);
  const redirect = useNavigate();
  console.log("run");

  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then((res) => setData(res));
    //  (dataa)
    console.log("inside");
  }, []);
  console.log("outside data", data);
  return (
    <div className="product_page_mother_container">
      {/* very first banner  container */}
      <div className="product_page_banner">
        <Image src="https://static1.lenskart.com/media/desktop/img/Jan23/PLP_WEB.gif" />
      </div>
      <div className="products_and_filter_container">
        <div className="productFilter_container">
           <ProductFilter/>
        </div>
        <div className="products_container">
          <div className="product_listing_count_container">
            <div className="total_products">total products : 95</div>
            <div className="product_category">Eyeglasses</div>
            <div className="sorting_filter_cont">sort by price</div>
          </div>
          {/* next div is for whole products cards */}
          <div className="product_cards_container">
            {data.map((ele) => {
              return (
                <div
                  key={ele.id}
                  onClick={() => {
                    redirect(`/products/${ele.id}`);
                  }}
                >
                  <ProductCard {...ele} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
