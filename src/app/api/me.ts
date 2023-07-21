import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: "Ibrahim Tarigan",
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
  });
}
