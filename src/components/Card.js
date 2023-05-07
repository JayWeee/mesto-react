function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        onClick={handleClick}
        src={props.card.link}
        alt="Карточка страницы"
        className="card__image"
      />
      <button className="card__btn card__btn_action_remove" />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__btn card__btn_action_like" />
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
