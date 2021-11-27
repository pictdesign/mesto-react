import React from "react";

function PopupWithForm(props) {
  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" data-btn="close" onClick={props.onClose}></button>
        <form onSubmit={props.onSubmit} className="popup__form" name={props.name}>
          <h2 className="popup__title">{props.title}</h2>
          <fieldset className="popup__input-container">
            {props.children}
          </fieldset>
          <button className="popup__submit-button" type="submit">
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;