/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"


export default {
    // Gets all google books
    getBooks: async (title) => {
      return axios.get( `https://www.googleapis.com/books/v1/volumes?q=${title}`);
    },
    getSavedBooks: async () => {
        return axios.get("/api/books");
      },
    // Deletes the books with the given id
    deleteBook: async(id)=> {
      return axios.delete("/api/books/" + id);
    },
    // Saves a books to the database
    saveBook: async(book)=> {
      return axios.post("/api/books", book);
    }
  };

// const formatTitle = (title) =>{
//     const format = title.split(" ");

//     if(!Array.isArray(format)) return title

//     const modTitle = format.reduce((acc,val) => acc + "+"+ val).toLowerCase()

//     return modTitle
// }
