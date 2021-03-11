import axios from "axios"
const api = {
    async getBooks() {
        return axios.get( "")
    }
}

export default api