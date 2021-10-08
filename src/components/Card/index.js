import React from "react";
import classNames from "classnames";
import "./style.scss";

const Card = props => {
  const { data, reverse, itemsCenter, imagePadding } = props;

  const cardClass = classNames({
    card: true,
    reverse: reverse && reverse,
    "card--items-center": itemsCenter && itemsCenter,
  });

  return (
    <article className={cardClass}>
      <div
        className="card__image"
        style={{
          padding: imagePadding && `${imagePadding.x}px ${imagePadding.y}px`,
        }}
      >
        <img src={data.image} alt={data.title} />
      </div>
      <div className="card__content">
        <div className="card__title">{data.title}</div>
        <div className="card__description">{data.description}</div>
        <div className="card__time"></div>
        {data.stack && (
          <div className="card__stack">
            {data.stacks.map(stack => (
              <div className="badge">{stack}</div>
            ))}
          </div>
        )}
        {data.link && (
          <div className="card__link">
            <a href={data.link}>Preview</a>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
