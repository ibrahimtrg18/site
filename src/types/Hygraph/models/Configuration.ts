import { About } from "../components/About";
import { Maintenance } from "../components/Maintenance";

export type Configuration = {
  id: string;
  about: Partial<About>;
  maintenance: Partial<Maintenance>;
};

export type Configurations = Configuration[];
