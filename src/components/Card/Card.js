import "./card.scss";



export function Card() {
  return (
    <li className="card">
      <div className="card__img-box">
        <img src="./images/1.png" alt="img" className="card_img" />
        <button className="card__like">
          <img src="./images/like_tover.svg" alt="like" className="card__like-img" />
        </button>
      </div>
      <p className="card__title"> Чоловічі кросівки Nike Blazer Mid Suede</p>
      <div className="card__box">
        <div className="card__price">
          <h4 className="card__price-title">Вартість:</h4>
          <p className="card__price-num">12 999 грн.</p>
        </div>
        <button className="card__addtocard">
          <img src="./images/plus.svg" alt="" className="card__add-img" />
        </button>
      </div>
    </li>
  );
}


