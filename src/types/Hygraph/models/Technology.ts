import { Asset } from "..";

export type Technology = {
  id: number;
  label: string;
  firstUse: string;
  experience: number;
  link: string;
  media: Asset;
};

export type Technologies = Array<Technology>;
