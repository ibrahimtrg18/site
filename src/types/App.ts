export interface App {
  menu: Menu[];
  socials: Social[];
}

export interface Menu {
  id: string;
  label: string;
  pathname: string;
  slug: string | null;
  href: string;
}

export interface Social {
  id: string;
  label: string;
  link: string;
  icon: string;
  stage: string;
}

export type Apps = App[];

export type ResponseGetApp = {
  apps: Apps;
};
