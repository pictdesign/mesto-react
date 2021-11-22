import React, { useState, useEffect } from "react";
import Api from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace , onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getUserInfo().then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    Api.getInitialCards().then((data) => {
      setCards(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main className="content">
        <section className="profile">
          <div onClick={onEditAvatar} className="profile__image-container">
            <img  src={userAvatar} alt={userName} className="profile__image" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} className="profile__edit-button" type="button"  aria-label="Edit"></button>
            <p className="profile__status">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
            {cards.map((card) => {
              return (
                <Card key={card._id} card={card} onCardClick={onCardClick}/>
              );
            })}
          </ul>
        </section>
      </main>
      
  )
}

export default Main;