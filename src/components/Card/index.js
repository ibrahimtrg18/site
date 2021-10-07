import React from "react";
import "./style.scss";

const Card = ({ data }) => {
  return (
    <article className="card">
      <div className="card__image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="card__content">
        <div className="card__title">{data.title}</div>
        <div className="card__description">{data.description}</div>
        <div className="card__time"></div>
        <div className="card__stack">
          {data.stacks.map(stack => (
            <div className="badge">{stack}</div>
          ))}
        </div>
        <div className="card__link">
          <a href={data.link}>Preview</a>
        </div>
      </div>
    </article>
  );
};

export default Card;
