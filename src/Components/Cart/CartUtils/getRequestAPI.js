import axios from "axios";

export const getRequestAPI = async () => {
  let res = await axios.get("https://lazy-red-armadillo-garb.cyclic.app/cart");

  return res.data;
};
