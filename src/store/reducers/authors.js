import * as actionType from "../actions/actionTypes";

const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        filteredAuthors: state.authors.concat(action.payload),
        loading: false
      };
    case actionType.FILTER_AUTHORS:
      return {
        ...state,
        filteredAuthors: state.authors.filter(author => {
          return `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.payload);
        }),
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
