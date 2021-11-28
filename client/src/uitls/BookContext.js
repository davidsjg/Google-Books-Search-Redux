import React from "react";

const BookContext = React.createContext({
  title: "",
  subtitle: "",
  author: "",
  img: "",
  description: "",
});

export default BookContext;
