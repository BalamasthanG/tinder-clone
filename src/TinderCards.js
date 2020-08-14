import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "mastan",
      url: "https://pbs.twimg.com/media/DmgXiMEXgAEbJC8.jpg",
    },
    {
      name: "hameed",
      url: "https://pbs.twimg.com/media/DNAJVIZX0AA4_iz.jpg",
    },
  ]);

  return (
    <div>
      <h1>Swipe left and right Tinder cards</h1>
      <div className="tinderCard__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
