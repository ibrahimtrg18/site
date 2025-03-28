export enum PROJECT_ACTION {}

export type AppAction = {
  type: PROJECT_ACTION;
  payload?: unknown;
};

type App = {
  icon: string;
  menu: Array<{ pathname: string; label: string }>;
};

export type AppState = Partial<App>;

export type AppContext = {
  apps: Partial<App>[];
};

export type AppProviderProps = React.ComponentPropsWithoutRef<"div"> & {
  app?: AppState;
};
