import Template_Page from "../../_Templates/Template_Page"
import Test_Page_1 from "../Test/Test_Page_1"
import Test_Page_2 from "../Test/Test_Page_2"
import Test_Page_3 from "../Test/Test_Page_3"

const content = [
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus corrupti explicabo reprehenderit nemo! Sequi odio corrupti qui hic quidem veritatis quod aliquam iure aut exercitationem, suscipit sed minima temporibus officiis.`
]

const CoverPage: Template_Page = {
  info: {
    title: "Test Book",
    key: "test book",
    brief: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus corrupti explicabo reprehenderit nemo! Sequi odio corrupti qui hic quidem veritatis quod aliquam iure aut exercitationem, suscipit sed minima temporibus officiis.",
    latest_update: [2024, 1, 2],
    cover: "",
    type: "",
    authors: [],
    label: "",
    tags: [],
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    theme: undefined
  },
  content: content
}

const TestBook = {
  coverPage: CoverPage,
  
  toc: {
    Test_Page_1,
    Test_Page_2,
    Test_Page_3,
  }
}

export default TestBook