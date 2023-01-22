import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";

export const productContext = createContext();

const getData = (url, id = "") => {
  return axios.get(url);
};

const initialProductData = {
  isLoading: true,
  data: [],
  isError: false,
  selectedCategory: null,
  cartCount: 0,
  singleProduct: {},
  singleProductLoading: true,
};

export default function PrductContext({ children }) {
  const [productData, setProductData] = useState(initialProductData);
  let baseUrl = `https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses`;
  //   https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?_sort=product_price&_order=desc

  const getCategoryProducts = (category) => {
    let selected_cat = category;
    if (category === "Full Rim") {
      category = "full_rim";
    } else if (category === "Half Rim") {
      category = "half_reem";
    }

    setProductData({
      ...productData,
      selectedCategory: category,
      isLoading: true,
    });

    getData(`${baseUrl}?category=${category.toLowerCase()}`).then((res) =>
      setProductData({
        ...productData,
        data: res.data,
        selectedCategory: selected_cat,
        isLoading: false,
      })
    );
  };

  //function get single product  details
  const getSingleProductDetails = (id) => {
    getData(`${baseUrl}/${id}`)
      .then((res) =>
        setProductData({
          ...productData,
          singleProduct: res.data,
          singleProductLoading: false,
        })
      )
      .catch((err) => alert("something went wrong !!"));
  };

  useEffect(() => {
    getData(`${baseUrl}?category=eyeglasses-mix`).then((res) => {
      setProductData({ ...productData, data: res.data, isLoading: false });
      console.log(res);
    });
   
  }, []);

  // function to add data in cart api

  const handleCartUpdate = (data) => {
    axios
      .post("https://lazy-red-armadillo-garb.cyclic.app/cart", {
        ...data,
        quantity: 1,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("errr :::", err));
  };
  // function to sort data by hight to low & low to high

  const sortData = (sort) => {
    setProductData({ ...productData, isLoading: true });
    getData(`${baseUrl}?_sort=product_price&_order=${sort}`).then((res) =>
      setProductData({ ...productData, data: res.data, isLoading: false })
    );
  };

  // function get all categories from data


  return (
    <productContext.Provider
      value={{
        ...productData,
        getCategoryProducts,
        getSingleProductDetails,
        handleCartUpdate,
        sortData,
      }}
    >
      {children}
    </productContext.Provider>
  );
}
