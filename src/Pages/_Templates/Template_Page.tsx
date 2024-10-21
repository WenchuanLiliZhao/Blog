import Template_Author from "./Template_Author";
import Template_Book from "./Template_Book";
interface Template_Page {
  info: {
    title: string;
    key: string;
    brief: string;
    latest_update: [number, number, number];
    cover: string;
    type: string;
    authors: Template_Author[];
    tags: string[];

    front?: JSX.Element;
    showHeader?: boolean;
    title_display?: JSX.Element;

    inBook?: Template_Book;

    theme?: {[key: string] : string;}
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;

  
}

export default Template_Page;
