import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import axios from "axios";

const getData = async (id) => {
  return fetch(
    `https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses/${id}`
  );
};

function ProductDetails() {
  const [cart_data, setCartData] = useState({});
  let { id } = useParams();
  useEffect(() => {
    getData(id)
      .then((res) => res.json())
      .then((res) => setCartData(res));
  }, []);
  const handleCartUpdate = () => {
    axios
      .post("https://lazy-red-armadillo-garb.cyclic.app/cart", {
        ...cart_data,
        quantity: 1,
      })
      .then((res) => console.log(res.data)).catch((err)=>console.log("errr :::",err))
  };
  //  console.log(cart_data)
  return (
    <div>
      <h1>product image will be here</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        quisquam nam iure similique quidem aspernatur doloremque cupiditate
        porro quibusdam natus.
      </p>
      <button
        onClick={() => handleCartUpdate()}
        style={{ border: "1px solid red" }}
      >
        add to cart{" "}
      </button>
    </div>
  );
}

export default ProductDetails;
