import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Harry Potter",
  subtitle: "Becoming a Noob",
  author: "Noob MaGee",
  img: "https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg",
  description:
    "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
  allBooks: [],
  read: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      // console.log(action.payload);
      let temp = action.payload;
      state.allBooks = temp;
    },
  },
});

export const { setBook } = bookSlice.actions;

export const selectBook = (state) => state.book;

export default bookSlice.reducer;
