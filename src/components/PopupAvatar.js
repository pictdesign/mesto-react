import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAvatar({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
      submitText="Сохранить"
      children={
        <> 
          <label className="popup__field">
              <input className="popup__input" type="url" placeholder="Ссылка на картинку" name="change_link" required />
              <span className="popup__input-error" id="change_link-error"></span>
          </label>
        </>
      }
          
      >
    </PopupWithForm>
  );
}

export default PopupAvatar;