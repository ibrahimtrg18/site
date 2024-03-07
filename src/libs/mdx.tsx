import { evaluateSync as _evaluateSync, Fragment, Jsx } from "@mdx-js/mdx";
import * as providers from "@mdx-js/react";
import * as runtime_ from "react/jsx-runtime";

import { isProd } from "../constants";

// @ts-expect-error: the automatic react runtime is untyped.
const runtime: { Fragment: Fragment; jsx: Jsx; jsxs: Jsx } = runtime_;

export const evaluateSync = (markdown: string) => {
  return _evaluateSync(markdown, {
    development: isProd,
    ...runtime,
    ...providers,
  }).default;
};
