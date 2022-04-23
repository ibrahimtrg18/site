/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from "./styles";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
