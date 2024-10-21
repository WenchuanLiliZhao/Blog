import Template_Page from "./Template_Page";


interface Template_Book {
  coverPage: Template_Page

  published: boolean

  toc: {
    [key: string] : Template_Page[]
  }
}

export default Template_Book