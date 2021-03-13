import React, { createContext, useReducer, useContext } from "react";
import {
    SEARCH,
    ADD_BOOK,
    REMOVE_BOOK,
    SAVED_BOOKS
} from "./action";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SEARCH:
    return {
    ...state,
     books:[...action.books],
     loading: false
    };

  case SAVED_BOOKS:
      return {
          ...state,
          savedBooks: [...action.books],
          loading: false
      };

  case ADD_BOOK:
    return {
        ...state,
        savedBooks: [action.books, ...state.savedBooks],
        loading: false
    };

  case REMOVE_BOOK:
    return {
      ...state,
      savedBooks: state.savedBooks.filter((book) => {
        return book._id !== action._id; 
      }),
      loading: false
    };

  default:
    return state;
  }
};

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    savedBooks: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
}; 

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };
