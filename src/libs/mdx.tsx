import { evaluateSync as _evaluateSync, Fragment, Jsx } from "@mdx-js/mdx";
import * as providers from "@mdx-js/react";
import * as runtime_ from "react/jsx-runtime";

// @ts-expect-error: the automatic react runtime is untyped.
const runtime: { Fragment: Fragment; jsx: Jsx; jsxs: Jsx } = runtime_;

export const evaluateSync = (markdown: string) => {
  return _evaluateSync(markdown, {
    development: false,
    ...runtime,
    ...providers,
  }).default;
};
