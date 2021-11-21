import React from "react";
import classNames from "classnames";
import "./style.scss";

const Card = props => {
  const { data, reverse, itemsCenter, imagePadding, imageFull, imageAuto } =
    props;

  const cardClass = classNames({
    card: true,
    reverse: reverse && reverse,
    "card--items-center": itemsCenter && itemsCenter,
  });

  const cardImageClass = classNames({
    card__image: true,
    "card__image--full": imageFull && imageFull,
    "card__image--auto": imageAuto && imageAuto,
  });

  return (
    <article className={cardClass}>
      {data.image && (
        <div
          className={cardImageClass}
          style={{
            padding: imagePadding && `${imagePadding.x}px ${imagePadding.y}px`,
          }}
        >
          <img src={data.image} alt={data.title} />
        </div>
      )}
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
