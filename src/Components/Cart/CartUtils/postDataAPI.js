import axios from "axios";

export const postDataAPI = (payload) => {
  let res = axios.post(
    `https://lazy-red-armadillo-garb.cyclic.app/cart`,
    payload
  );
  console.log(res.data);
  return res.data;
};
