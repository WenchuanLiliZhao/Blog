import Template_Author from "./Template_AuthorInPost";

interface Template_Page {
  info: {
    title: string;
    key: string;
    brief: string;
    latest_update: [number, number, number];

    cover: string;

    label?: string;
    front?: JSX.Element;

    showHeader?: boolean;
    title_display?: JSX.Element;
    authors?: Template_Author[];

    tags?: Template_Page[];
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

export default Template_Page;
