import { Flag } from "../components/Flag";
import { Asset, RichText } from "..";

export type Project = {
  id: string;
  title: string;
  url: string;
  experience: number;
  type: string;
  description: RichText;
  markdownFile: Asset;
  media: Array<
    Asset & {
      small: string;
    }
  >;
  projectPage: Flag;
  projectDetailPage: Flag;
};

export type Projects = Array<Project>;
