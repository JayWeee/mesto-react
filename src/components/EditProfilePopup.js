import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <>
        <input
          className="popup__input"
          name="name"
          value={name || ''}
          id="name-input"
          type="text"
          required
          placeholder="Имя профиля"
          onChange={handleChangeName}
        />

        <span className="popup__input-error name-input-error" />

        <input
          className="popup__input"
          name="about"
          value={description || ''}
          id="about-input"
          type="text"
          required
          placeholder="Статус"
          onChange={handleChangeDescription}
        />

        <span className="popup__input-error about-input-error" />
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
