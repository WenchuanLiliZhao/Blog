/* eslint-disable @typescript-eslint/no-explicit-any */
import Template_Author from "./Template_Author";
import Template_Book from "./Template_Book";
interface Template_Page {
  info: {
    title: string;
    key: string;
    brief: string;
    latest_update: number[];
    cover: string;
    type: string;
    authors: Template_Author[];

    label: string;
    tags: string[];

    front?: JSX.Element;
    showHeader?: boolean;
    title_display?: JSX.Element;

    theme?: { [key: string]: string };

    inbook?: Template_Book;
  };

  content: any;
}

export default Template_Page;
