import React from "react";
import "./Card.css";
import HeartButton from "./HeartButton";

function Card({ className = "", image, title, price, address }) {
  return (
    <div className={`card ${className}`}>
      <div
        className="card__img"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="card__content">
        <div className="card__price">
          <span>{price}</span>
          <p>/month</p>
        </div>
        <h4 className="card__title">{title}</h4>
        <p className="card__description">{address}</p>

        <HeartButton className="card__heart-button" />
      </div>
    </div>
  );
}

export default Card;
