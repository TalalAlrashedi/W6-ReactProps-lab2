import React from "react";
import Cards from "./Cards";
import "./Cardscontainer.css";

const cards = [
  {
    title: "title 1",
    description: "pics",
    image:
      "https://images.pexels.com/photos/31449901/pexels-photo-31449901.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    items: ["نوع الصورة", "مكان الصورة", " وقت الصورة"],
  },
  {
    title: "title 2",
    description: "pics",
    image:
      "https://images.pexels.com/photos/31773527/pexels-photo-31773527/free-photo-of-man-in-traditional-attire-in-front-of-intricate-wall.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    items: ["نوع الصورة", "مكان الصورة", " وقت الصورة"],
  },
  {
    title: "title 3",
    description: "pics",
    image:
      "https://images.pexels.com/photos/31701241/pexels-photo-31701241/free-photo-of-colorful-pink-and-beige-mediterranean-architecture.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    items: ["نوع الصورة", "مكان الصورة", " وقت الصورة"],
  },
  {
    title: "title 4",
    description: "pics",
    image:
      "https://images.pexels.com/photos/31830781/pexels-photo-31830781/free-photo-of-woman-relaxing-in-colorful-tulip-garden.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    items: ["نوع الصورة", "مكان الصورة", " وقت الصورة"],
  },
  {
    title: "title 5",
    description: "pics",
    image:
      "https://images.pexels.com/photos/31484084/pexels-photo-31484084/free-photo-of-abstract-blurred-trees-in-bloom-during-spring.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    items: ["نوع الصورة", "مكان الصورة", " وقت الصورة"],
  },
];

function Cardscontainer() {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Cards

          title={card.title}
          description={card.description}
          image={card.image}
          items={card.items}
        />
      ))}
    </div>
  );
}

export default Cardscontainer;
