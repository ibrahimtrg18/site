import { Loader } from "@googlemaps/js-api-loader";
import React, { FC, useEffect, useRef } from "react";

interface GoogleMapsProps {
  lat: number;
  lng: number;
}

const GoogleMaps: FC<GoogleMapsProps> = ({ lat, lng }) => {
  const googleMapsRef = useRef<HTMLDivElement>(null);

  const loader = new Loader({
    apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY || "",
    version: "weekly",
    libraries: ["places"],
  });

  const mapOptions = {
    center: {
      lat,
      lng,
    },
    zoom: 12,
  };

  useEffect(() => {
    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(googleMapsRef.current!, mapOptions);
        new google.maps.Marker({
          map,
          position: {
            lat: -6.208963,
            lng: 106.826216,
          },
          title: "Hello World!",
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div
      ref={googleMapsRef}
      className="google-maps"
      style={{ width: "100%", height: "260px" }}
    />
  );
};

export default GoogleMaps;
