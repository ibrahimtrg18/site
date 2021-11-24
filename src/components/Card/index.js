import React from "react";
import classNames from "classnames";
import Badge from "../Badge";
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
        <div className="card__title">
          <p className="name">{data.title}</p>
          <p className="private">{data.repoPrivate ? "Private" : "Public"}</p>
        </div>
        <p className="card__description">{data.description}</p>
        <div className="card__stack">
          {data.stacks.map(stack => (
            <Badge>{stack}</Badge>
          ))}
        </div>
        <p className="card__time"></p>
        {data.stack && (
          <p className="card__stack">
            {data.stacks.map(stack => (
              <p className="badge">{stack}</p>
            ))}
          </p>
        )}
        {data.link && (
          <p className="card__link">
            <a href={data.link} target="_blank">
              Preview
            </a>
          </p>
        )}
      </div>
    </article>
  );
};

export default Card;
