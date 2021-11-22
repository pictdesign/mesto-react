import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupProfile({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
      submitText="Сохранить"
    >
        <> 
          <label className="popup__field">
            <input className="popup__input" type="text" placeholder="Имя" name="profile_name" required minLength="2" maxLength="40" />
            <span className="popup__input-error" id="profile_name-error"></span> 
          </label>
          <label className="popup__field">
            <input className="popup__input" type="text" placeholder="Профессиональная деятельность" name="profile_status" required minLength="2" maxLength="200" />
            <span className="popup__input-error" id="profile_status-error"></span> 
          </label>
        </>
    </PopupWithForm>
  );
}

export default PopupProfile;