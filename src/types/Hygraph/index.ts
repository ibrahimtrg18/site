export type Data<T> = {
  data: T;
};

export type Asset = {
  id: string;
  url: string;
};

export type RichText = {
  html: string;
  markdown: string;
  raw: string;
  text: string;
};
