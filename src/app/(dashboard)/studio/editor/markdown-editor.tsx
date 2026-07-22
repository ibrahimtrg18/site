"use client";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  codeBlockPlugin,
  codeMirrorPlugin,
  CodeToggle,
  CreateLink,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  headingsPlugin,
  imagePlugin,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";

import { useColorMode } from "@/components/ui/color-mode";

import "@mdxeditor/editor/style.css";

type MarkdownEditorProps = {
  markdown: string;
  onChange: (markdown: string) => void;
  imageUploadHandler: (image: File) => Promise<string>;
};

export default function MarkdownEditor({
  markdown,
  onChange,
  imageUploadHandler,
}: MarkdownEditorProps) {
  const { colorMode } = useColorMode();

  return (
    <MDXEditor
      className={colorMode === "dark" ? "dark-theme" : ""}
      contentEditableClassName="studio-prose"
      markdown={markdown}
      onChange={onChange}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({ imageUploadHandler }),
        tablePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            "": "Plain",
            txt: "Plain text",
            js: "JavaScript",
            jsx: "JSX",
            ts: "TypeScript",
            tsx: "TSX",
            css: "CSS",
            html: "HTML",
            json: "JSON",
            bash: "Bash",
            yaml: "YAML",
            sql: "SQL",
          },
        }),
        diffSourcePlugin({ viewMode: "rich-text" }),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <BlockTypeSelect />
              <ListsToggle />
              <CreateLink />
              <InsertImage />
              <InsertTable />
              <InsertCodeBlock />
              <InsertThematicBreak />
            </DiffSourceToggleWrapper>
          ),
        }),
      ]}
    />
  );
}
