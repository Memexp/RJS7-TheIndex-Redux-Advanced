import * as actionType from "./actionTypes";
import axios from "axios";

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      const authors = res.data;
      dispatch({
        type: actionType.FETCH_AUTHORS,
        payload: authors
      });
    } catch (err) {}
  };
};

export const filterAuthors = query => {
  return {
    type: actionType.FILTER_AUTHORS,
    payload: query
  };
};
