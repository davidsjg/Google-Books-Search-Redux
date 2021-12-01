import React from "react";

const BookContext = React.createContext({
  title: "",
  subtitle: "",
  author: "",
  img: "",
  description: "",
  read: false,
});

export default BookContext;
