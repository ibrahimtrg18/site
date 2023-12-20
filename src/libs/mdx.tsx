import { Box } from "@chakra-ui/react";
import { evaluateSync as _evaluateSync } from "@mdx-js/mdx";
import * as providers from "@mdx-js/react";
import * as runtime from "react/jsx-runtime";

export const evaluateSync = (markdown: string) => {
  return _evaluateSync(markdown, {
    Fragment: Box,
    development: false,
    ...providers,
    ...runtime,
  }).default;
};
