import React from "react";
import "./Cards.css";


function Cards({ title, description, image, items }) {
  return (
    <div className="card">
      <img src={image}  />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {items.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cards;
