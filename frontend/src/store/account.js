import axios from "axios";
import { FETCH_ACCOUNT } from "./types";

export const fetchAccount = (accountSub) => async (dispatch) => {
  const { data } = await axios.get(`/api/public/profile/${accountSub}`);
  dispatch({
    type: FETCH_ACCOUNT,
    payload: data,
  });
};

export const reduceAccount = (account = null, { type, payload }) => {
  if (type === FETCH_ACCOUNT) {
    return payload;
  }
  return account;
};
