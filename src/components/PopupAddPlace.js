import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddPlace({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="image"
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      submitText="Создать"
    >
        <> 
          <label className="popup__field">
              <input className="popup__input" type="text" placeholder="Название" name="image_name" required minLength="2" maxLength="30 " />
              <span className="popup__input-error" id="image_name-error"></span>
          </label>
          <label className="popup__field"> 
            <input className="popup__input" type="url" placeholder="Ссылка на картинку" name="image_link" required />
            <span className="popup__input-error" id="image_link-error"></span>
          </label>
        </>
    </PopupWithForm>
  );
}

export default PopupAddPlace;