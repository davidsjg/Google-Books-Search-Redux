import { createSlice } from "@reduxjs/toolkit";
import { bookData } from "../../bookData";

const initialState = {
  selectedBook: {
    title: "Harry Potter",
    subtitle: "Becoming a Noob",
    author: "Noob MaGee",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  allBooks: bookData,
  savedBooks: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        title: state.selectedBook.title,
        subtitle: state.selectedBook.subtitle,
        author: state.selectedBook.author,
        img: state.selectedBook.author,
        description: state.selectedBook.description,
      };

      // state.selectedBook = action.payload;
    },
    setAllBooks: (state, action) => {
      // console.log(action.payload);
      state.allBooks = action.payload;
    },
    setRead: (state) => {
      state.selectedBook.read = true;
    },
    setUnread: (state) => {
      state.selectedBook.read = false;
    },
    saveBook: (state, action) => {
      state.savedBooks.push(action.payload);
    },
  },
});

export const { setBook, setRead, setAllBooks, setUnread, saveBook } =
  bookSlice.actions;

export const selectBook = (state) => state.book;

export default bookSlice.reducer;
