import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }).catch(err => console.log(err))
    api.getInitialCards()
      .then((res) => setCards(res))
      .catch(err => console.log(err))
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <span
              onClick={props.onEditAvatar}
              className="profile__avatar-edit"
            />
            <img
              className="profile__avatar"
              alt="Фото профиля"
              src={userAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__btn profile__btn_action_edit"
                type="button"
              />
            </div>
            <p className="profile__status">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__btn profile__btn_action_add"
          type="button"
        />
      </section>
      <section className="photo-grid" aria-label="Карточки">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
