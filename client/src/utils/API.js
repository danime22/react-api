import axios from "axios";
const booksAPI = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    getBooks: () => {
        return axios.get("/api/savings");
    },
    search: query => {
        const newQuery = query.replace(" ", " + ");
        return axios.get(booksAPI + newQuery);
    },
    saveBook: data => {
        return axios.post("/api/savings", data);
    },
    deleteBook: id => {
        return axios.delete("/api/savings" + id);
    }
};