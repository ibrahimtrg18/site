import { About } from "./About";
import { Maintenance } from "./Maintainance";

export type Configuration = {
  id: string;
  about: Partial<About>;
  maintenance: Partial<Maintenance>;
};

export type Configurations = Configuration[];

export type ResponseConfigurations = {
  configurations: Configurations;
};
