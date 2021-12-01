const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

const bookSeed = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    subtitle: "Becoming a Noob",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    subtitle: "Closer to a noob",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    subtitle: "Closer to a noob",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    subtitle: "Closer to a noob",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/91gZX7sjnpL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    subtitle: "Closer to a noob",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/91TpLHDnuFL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Half Blood Prince",
    subtitle: "Noob strength STRONG",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    subtitle: "Penultimate noob",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
  {
    title: "Harry Potter and the Cursed Child",
    subtitle: "Noob conversion complete",
    author: "J.K. Rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/81hV7BRj8vL.jpg",
    description:
      "Harry Potter is a book about a boy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, libero non ipsam ullam inodit distinctio officia consequuntur commodi cum accusantium excepturiquibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatemperferendis in deleniti, nemo delectus possimus neque labore velit laudantium fugit consequatur nam minus aperiam harum sapiente nesciuntullam earum autem sequi iste. Ducimus quisquam quod sit autem delenitiaspernatur vitae expedita dolore laudantium tempore eaque excepturi,explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similiquein laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit oditveritatis voluptatem atque aliquam quo recusandae dolorem asperioresautem, illo magnam ad.",
    read: false,
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(lakeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
