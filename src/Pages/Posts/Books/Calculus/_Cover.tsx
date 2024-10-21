import Template_Book from "../../../_Templates/Template_Book";
import Post_3 from "./Docs/Post_3";



const Book_Calculus: Template_Book = {
  coverPage: {
    info: {
      title: "Notes for Calculus",
      key: "Notes for Calculus",
      brief: "",
      latest_update: [2024, 10, 21],
      cover: "",
      type: "",
      authors: [],
      tags: [],
      front: undefined,
      showHeader: undefined,
      title_display: undefined
    },
    content: (<></>)
  },

  published: false,

  toc: {
    "Chapter One": [
      Post_3,
    ],
  },
}

export default Book_Calculus