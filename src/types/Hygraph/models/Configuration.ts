import { About } from "../components/About";
import { Maintenance } from "../components/Maintenance";
import { Asset } from "../hygraph";

export type Configuration = {
  id: string;
  about: Partial<About>;
  maintenance: Partial<Maintenance>;
  avatar: Asset;
};

export type Configurations = Configuration[];
