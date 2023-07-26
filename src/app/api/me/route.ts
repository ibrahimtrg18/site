import { NextResponse } from "next/server";

type ResponseType<T> = {
  data: T;
};

export type ResponseDataGetMeType = {
  fullName: string;
  firstName: string;
  shortName: string;
  initialName: string;
  me: {
    title: string;
    body: string;
  };
  description: string;
  profession: string;
  contact: {
    email: string;
    phoneNumber: string;
  };
  location: {
    name: string;
    lat: number | string;
    lng: number | string;
  };
};

export type ResponseGetMe = ResponseType<ResponseDataGetMeType>;

export async function GET() {
  const fullName = "Ibrahim Tarigan";
  const splitName = fullName.split(" ");
  const firstName = splitName?.[0];
  const shortName = "Baim";
  const initialName = fullName
    .split(" ")
    .map((n) => n.substring(0, 1))
    .join("");

  const response: ResponseGetMe = {
    data: {
      fullName,
      firstName,
      shortName,
      initialName,
      me: {
        title: `Hello, ${fullName} 👋`,
        body: `I'm a Software Engineer @ Delman Data Lab, \nand Living in Indonesia, Tangerang.`,
      },
      description:
        "Ibrahim Tarigan, a dude love and passion in development web and mobile application, and want to be a Good Software Engineer",
      profession: "Fullstack Developer, especially using React/Node.",
      contact: {
        email: "ibrahimtarigan@gmail.com",
        phoneNumber: "+62 812 6000 9709",
      },
      location: {
        name: "Tangerang, Indonesia",
        lat: -6.347891,
        lng: 106.741158,
      },
    },
  };

  return NextResponse.json(response);
}
