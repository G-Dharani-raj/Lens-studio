import axios from "axios";

export const patchDataAPI = (id, payload) => {
  let res = axios.patch(
    `https://lazy-red-armadillo-garb.cyclic.app/cart/${id}`,
     payload
  );
  return res;
  //   console.log(res);
};
