/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from "./config/styled-components";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
