import React, {   useContext } from "react";
import "./styles/products.css";
import { Image } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import Navbar from "../Navbar/Navbar";
import ProductInfoListing from "./ProductInfoListing";
import PhoneTabFilterBar from "./PhoneTabFilterBar";
import { productContext } from "../../Context/PrductContext";
import LoaderSpinner from "../Loader/LoaderSpinner";
import Fotter from "../Fotter/Fotter";

export default function Products() {
  let { isLoading, data, isError } = useContext(productContext);
  let productCount = data.length;

  const redirect = useNavigate();

  if (isLoading) {
  }

  console.log("outside data", data);
  return (
    <>
      <Navbar />

      <div className="product_page_mother_container">
        {/* very first banner  container */}
        <div className="product_page_banner">
          <Image src="https://static1.lenskart.com/media/desktop/img/Dec22/15-Dec/bogo11.gif" />
        </div>
        <div className="products_and_filter_container">
          <div className="productFilter_container">
            <ProductFilter />
          </div>

          <div className="products_container">
            <div className="product_listing_count_container">
              <ProductInfoListing count={productCount} />
            </div>
            {/* next div is for whole products cards */}
            {isLoading ? (
              <LoaderSpinner top={'12%'} left={"39%"} sz={"xl"} />
            ) : (
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
            )}
          </div>
        </div>
      </div>
{/* <Fotter/> */}
      <PhoneTabFilterBar />
    </>
  );
}
