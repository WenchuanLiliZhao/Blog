interface Template_News {
  info: {
    title: string;
    key: string;
    date: [number, number, number];
    publication: string;

    cover?: string;
    brief?: string;
  };
}

export default Template_News;
