import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-avatar"
        title="Обновить аватар"
      >
        <>
          <input
            className="popup__input"
            name="link"
            id="link-avatar-input"
            type="url"
            required
            placeholder="Ссылка на картинку"
          />

          <span className="popup__input-error link-avatar-input-error" />
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit"
        title="Редактировать профиль"
      >
        <>
          <input
            className="popup__input"
            name="name"
            id="name-input"
            type="text"
            required
            placeholder="Имя профиля"
          />

          <span className="popup__input-error name-input-error" />

          <input
            className="popup__input"
            name="about"
            id="about-input"
            type="text"
            required
            placeholder="Статус"
          />

          <span className="popup__input-error about-input-error" />
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="card"
        title="Новое место"
      >
        <>
          <input
            className="popup__input"
            name="title"
            id="title-input"
            type="text"
            required
            placeholder="Название"
          />

          <span className="popup__input-error title-input-error" />

          <input
            className="popup__input"
            name="link"
            id="link-input"
            type="url"
            required
            placeholder="Ссылка на картинку"
          />

          <span className="popup__input-error link-input-error" />
        </>
      </PopupWithForm>

      <PopupWithForm name="confirm-delite" title="Вы уверены?" />

      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
