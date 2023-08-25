import { Asset } from "./Hygraph";

export type Technology = {
  id: number;
  label: string;
  firstUse: string;
  experience: number;
  link: string;
  media: Asset;
};

export type Technologies = Array<Technology>;

export type TechnologiesData = {
  technologies: Technologies;
};
