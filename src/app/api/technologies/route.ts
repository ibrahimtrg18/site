import { NextResponse } from "next/server";

import { strapi } from "../../../utils/axios";
import { IMedia, IResponse } from "../../../utils/strapi";

export type ITechnology = {
  id: number;
  attributes: {
    label: string;
    experience: number;
    link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: IMedia;
  };
};

export type ITechnologies = Array<ITechnology>;

export type ITechnologiesData = IResponse<ITechnologies>;

export async function GET() {
  const data = await strapi.get<ITechnologiesData>(
    "/api/technologies?populate=*"
  );

  return NextResponse.json(data);
}
