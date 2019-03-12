import * as actionType from "./actionTypes";
import axios from "axios";

export const fetchAuthorDetail = authorID => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/" + authorID
      );
      const author = res.data;
      dispatch({
        type: actionType.FETCH_AUTHOR_DETAIL,
        payload: author
      });
    } catch (err) {}
  };
};
