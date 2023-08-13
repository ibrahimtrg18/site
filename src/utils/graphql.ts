export type IData<T> = {
  data: T;
};

export type IAsset = {
  id: string;
  url: string;
};

export type IRichText = {
  html: string;
  markdown: string;
  raw: string;
  text: string;
};
