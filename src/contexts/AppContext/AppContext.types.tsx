import { App } from "@/generated/graphql";

export enum PROJECT_ACTION {}

export type AppAction = {
  type: PROJECT_ACTION;
  payload?: unknown;
};

export type AppState = Partial<App>;

export type AppContext = {
  apps: Partial<App>[];
};

export type AppProviderProps = React.ComponentPropsWithoutRef<"div"> & {
  app?: AppState;
};
