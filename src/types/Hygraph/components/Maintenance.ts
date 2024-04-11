import { RichText } from "../hygraph";

export type Maintenance = {
  title: string;
  text: string;
  farewell: string;
  signature: string;
  description: RichText;
};
