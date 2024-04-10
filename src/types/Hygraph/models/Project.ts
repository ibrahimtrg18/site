import { Flag } from "../components/Flag";
import { Asset, PrivacyPolicy, RichText } from "..";

export type Project = {
  id: string;
  title: string;
  url: string;
  experience: number;
  type: string;
  slug: string;
  description: RichText;
  markdownFile: Asset;
  media: Array<
    Asset & {
      small: string;
    }
  >;
  projectPage: Flag;
  projectDetailPage: Flag;
} & PrivacyPolicy;

export type Projects = Array<Project>;
