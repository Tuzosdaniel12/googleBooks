import React, { createContext, useReducer, useContext } from "react";
import {
    SEARCH,
    ADD_BOOK,
    REMOVE_BOOK,
} from "./action";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SEARCH:
    return {
     books:[...action.books]
    };

  case ADD_BOOK:
    return {
        ...state,
        savedBooks: action.books
    };


  case REMOVE_BOOK:
    return {
      ...state,
      savedBooks: state.savedBooks.filter((book) => {
        return book._id !== action._id; 
      })
    };

  default:
    return state;
  }
};

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    savedBooks: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };
