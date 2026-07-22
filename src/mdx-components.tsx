import type { MDXComponents } from "mdx/types";

import { Heading, Text } from "@/components/ui";

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading as="h1" size="3xl" className="my-3" {...props} />,
    h2: (props) => <Heading as="h2" size="2xl" className="my-2.5" {...props} />,
    h3: (props) => <Heading as="h3" size="xl" className="my-2" {...props} />,
    h4: (props) => <Heading as="h4" size="lg" className="my-2" {...props} />,
    h5: (props) => <Heading as="h5" size="md" className="my-1.5" {...props} />,
    h6: (props) => <Heading as="h6" size="sm" className="my-1.5" {...props} />,
    p: (props) => <Text className="my-0.5" {...props} />,
    a: (props) => (
      <a
        className="text-teal-600 hover:underline dark:text-teal-400"
        {...props}
      />
    ),
    ul: (props) => <ul className="list-disc space-y-2 pl-5" {...props} />,
    ol: (props) => <ol className="list-decimal space-y-2 pl-5" {...props} />,
    li: (props) => <li {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-neutral-200 pl-4 dark:border-neutral-800"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-2 overflow-x-auto rounded-md bg-neutral-100 p-4 dark:bg-neutral-900 [&_code]:bg-transparent [&_code]:p-0"
        {...props}
      />
    ),
    table: (props) => (
      <table className="my-2 w-full border-collapse text-sm" {...props} />
    ),
    thead: (props) => <thead {...props} />,
    tbody: (props) => <tbody {...props} />,
    th: (props) => (
      <th
        className="border border-neutral-200 px-3 py-2 text-left font-semibold dark:border-neutral-800"
        {...props}
      />
    ),
    tr: (props) => <tr {...props} />,
    td: (props) => (
      <td
        className="border border-neutral-200 px-3 py-2 dark:border-neutral-800"
        {...props}
      />
    ),
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    img: (props) => <img className="rounded-md" {...props} />,
  };
}
