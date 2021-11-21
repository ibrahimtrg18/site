import React from "react";
import "./style.scss";

const Profile = ({ profile }) => {
  return (
    <section id="about" className="profile">
      <div className="profile__content">
        <div className="card__content">
          <div className="card__title">{profile.title}</div>
          <div className="card__description">{profile.description}</div>
          <div className="card__time"></div>
          {profile.stack && (
            <div className="card__stack">
              {profile.stacks.map(stack => (
                <div className="badge">{stack}</div>
              ))}
            </div>
          )}
          {profile.link && (
            <div className="card__link">
              <a href={profile.link}>Preview</a>
            </div>
          )}
        </div>
        <img src={profile.image} alt={profile.title} />
      </div>
    </section>
  );
};

export default Profile;
