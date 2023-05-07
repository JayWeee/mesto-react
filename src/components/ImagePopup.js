function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image popup_opacity ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__image-container">
        <button
          onClick={props.onClose}
          className="popup__btn popup__btn_action_close"
          type="button"
        />
        <img
          src={props.card.link}
          alt="Картинка карточки"
          className="popup__photo"
        />
        <p className="popup__caption">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
