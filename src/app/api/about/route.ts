import { NextResponse } from "next/server";

import { strapi } from "../../../utils/axios";
import { IResponse } from "../../../utils/strapi";

export type IAbout = {
  id: number;
  attributes: {
    fullName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    firstName: string;
    lastName: string;
    shortName: string;
    initialName: string;
    greeting: string;
    whoiam: string;
    description: string;
    email: string;
    phoneNumber: string;
    lat: string;
    lng: string;
    location: string;
    cv: string;
  };
};

export type IAboutData = IResponse<IAbout>;

export async function GET() {
  const data = await strapi.get<IAboutData>("/api/about");

  return NextResponse.json(data);
}
