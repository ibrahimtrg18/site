"use client";

import { Data, DefaultComponentProps, Puck } from "@measured/puck";

import "@measured/puck/puck.css";

import { config } from ".";

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data: Data<DefaultComponentProps>) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

// Render Puck editor
export function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
