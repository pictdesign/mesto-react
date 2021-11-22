import React from "react";

function Card({card, onCardClick}) {
  return (
    <li className="element">
      <button className="element__delete-button" type="button"></button>
      <img src={card.link} alt={card.name} onClick={() => {onCardClick(card)}} className="element__image" />
      <div className="element__info">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
        
      </div>
    </li>
  )
}

export default Card;