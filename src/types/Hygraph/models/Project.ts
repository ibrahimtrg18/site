import { Flag } from "../components/Flag";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Asset, RichText } from "../hygraph";

export type Project = {
  id: string;
  title: string;
  experience: number;
  type: string;
  slug: string;
  description: RichText;
  markdownFile: Asset;
  links: { [key: string]: string };
  media: Array<
    Asset & {
      small: string;
    }
  >;
  projectPage: Flag;
  projectDetailPage: Flag;
} & PrivacyPolicy;

export type Projects = Array<Project>;
