import axios from "axios";
const booksAPI = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    search: query => {
        const newQuery = query.replace(" ", "+");
        console.log("searching");
        return axios.get(booksAPI + newQuery);
    },
    saveBook: data => {
        return axios.post("/api/books", data);
    },
    deleteBook: id => {
        return axios.delete("/api/books/:id" + id);
    }
};