import axios from "axios";

export default {
  getBooks: function () {
    return axios.get("/api/books");
  },
  findBook: function (book) {
    return axios.get("/api/books", { params: { q: book } });
  },
};
