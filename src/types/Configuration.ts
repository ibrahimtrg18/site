import { About } from "./About";
import { Maintenance } from "./Maintainance";
import { MenuItem } from "./MenuItem";
import { Social } from "./Social";

export type Configuration = {
  id: string;
  about: Partial<About>;
  maintenance: Partial<Maintenance>;
  menu: Partial<MenuItem>[];
  socials: Social[];
};

export type Configurations = Configuration[];

export type ConfigurationsData = {
  configurations: Configurations;
};
