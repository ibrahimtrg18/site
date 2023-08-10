import { NextResponse } from "next/server";

import { strapi } from "../../../utils/axios";
import { IResponse } from "../../../utils/strapi";

export type IConfiguration = {
  id: number;
  attributes: {
    maintain: {
      title?: string;
      description?: string;
      farewell?: string;
      signature?: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type IConfigurationData = IResponse<IConfiguration>;

export async function GET() {
  const data = await strapi.get<IConfigurationData>("/api/configuration");

  return NextResponse.json(data);
}
