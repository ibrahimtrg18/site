import { App } from "@/types/Hygraph/models/App";

export enum PROJECT_ACTION {}

export type AppAction = {
  type: PROJECT_ACTION;
  payload?: unknown;
};

export type AppState = App;

export type AppContext = {
  apps: Array<App>;
};

export type AppProviderProps = React.ComponentPropsWithoutRef<"div"> & {
  app: AppState | null;
};
