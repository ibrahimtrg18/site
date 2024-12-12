/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Data, DefaultComponentProps, Puck } from "@measured/puck";

import { decodeObjectFromURL, encodeObjectToURL } from "@/utils/convert";

import "@measured/puck/puck.css";

import { config } from ".";

export type EditorProps = {
  path: string;
  isPreview?: boolean;
  data: Partial<Data<DefaultComponentProps>>;
  onPublish: (data: Data<DefaultComponentProps>) => void;
};

// Render Puck editor
export function Editor(props: EditorProps) {
  const router = useRouter();
  const { path, isPreview = false, data = {}, onPublish } = props;

  const [preview, setPreview] = useState<Data<DefaultComponentProps, any>>(
    isPreview ? (decodeObjectFromURL(path + "preview", "preview") as any) : {}
  );

  const handlePreview = () => {
    if (preview) {
      const href = encodeObjectToURL(path + "preview", "data", data);
      router.push(href);
    }
  };

  return (
    <Puck
      config={config}
      data={isPreview ? preview : data}
      onPublish={onPublish}
      onChange={(data) => setPreview(data)}
      overrides={{
        headerActions: ({ children }) => (
          <>
            <Button variant="secondary" onClick={handlePreview}>
              Preview Page
            </Button>

            {children}
          </>
        ),
      }}
    >
      {isPreview && <Puck.Preview />}
    </Puck>
  );
}
