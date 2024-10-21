import Template_Book from "../../../_Templates/Template_Book";
import Page_1 from "./Docs/Page_1";
import Page_2 from "./Docs/Page_2";
import Page_3 from "./Docs/Page_3";



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
    "" : [
      Page_1,
    ],

    "Lorem Ipsum": [
      Page_2,
      Page_3,
    ],
  },
}

export default Book_Calculus