function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="popup__btn popup__btn_action_close"
          type="button"
        />
        <form
          className="popup__form"
          action="#"
          name={props.name}
          id={props.name}
        >
          <h2 className="popup__header">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__btn popup__btn_action_submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
