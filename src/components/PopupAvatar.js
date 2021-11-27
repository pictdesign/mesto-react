import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAvatar({isOpen, onClose, onUpdateAvatar}) {
  
  const avatarRef = React.useRef(0);
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    e.target.reset();
  }
  
  return (
    <PopupWithForm
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
      submitText="Сохранить"
      onSubmit={handleSubmit}
    >
        <> 
          <label className="popup__field">
              <input ref={avatarRef} className="popup__input" type="url" placeholder="Ссылка на картинку" name="change_link" required />
              <span className="popup__input-error" id="change_link-error"></span>
          </label>
        </>
    </PopupWithForm>
  );
}

export default PopupAvatar;