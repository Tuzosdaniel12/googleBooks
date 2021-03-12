import axios from "axios"
const api = {
    async getBooks(title) {
        //https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        const modTitle = formatTitle(title)
        console.log(modTitle)
        const key = "AIzaSyDUCTWwg8JbEHbtBlgCS-iHLcdy3SS35q4"
        
        return axios.get( `https://www.googleapis.com/books/v1/volumes?q=${title}+intitle:keyes&key=${key}`)
    }
}

const formatTitle = (title) =>{
    const format = title.split(" ");

    if(!Array.isArray(format)) return title

    const modTitle = format.reduce((acc,val) => acc + "+"+ val).toLowerCase()

    return modTitle
}

export default api