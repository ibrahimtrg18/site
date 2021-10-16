import React from "react";
import Card from "../Card";
import "./style.scss";

const Profile = ({ profile }) => {
  return (
    <section id="about" className="profile">
      <Card
        data={profile}
        reverse
        itemsCenter
        imagePadding={{ x: 16, y: 16 }}
        imageFull
      />
    </section>
  );
};

export default Profile;
