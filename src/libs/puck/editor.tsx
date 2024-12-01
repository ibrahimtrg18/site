"use client";

import { Button, Data, DefaultComponentProps, Puck } from "@measured/puck";

import "@measured/puck/puck.css";

import { config } from ".";

export type EditorProps = {
  data: Partial<Data<DefaultComponentProps>>;
  onPublish: (data: Data<DefaultComponentProps>) => void;
};

// Render Puck editor
export function Editor(props: EditorProps) {
  const { data = {}, onPublish } = props;

  return (
    <Puck
      config={config}
      data={data}
      onPublish={onPublish}
      overrides={{
        headerActions: ({ children }) => (
          <>
            <div>
              <Button href="/" newTab variant="secondary">
                View page
              </Button>
            </div>

            {children}
          </>
        ),
      }}
    />
  );
}
