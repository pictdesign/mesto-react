import React, { useState } from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupProfile from "./PopupProfile";
import PopupAvatar from "./PopupAvatar";
import PopupAddPlace from "./PopupAddPlace";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  };

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile ={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        />
      <Footer />
      <PopupProfile 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
      />
      <PopupAvatar 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
      />
      <PopupAddPlace 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;



