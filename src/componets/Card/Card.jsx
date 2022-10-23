import c from "./Card.module.scss";
import React from "react";

import CardLoader from "./CardLoader";
import ContextApp from "../../ContexApp";

const Card = ({
  imageUrl,
  text,
  price,
  addPlusCard,
  addPlusLike,
  favorited,
  id,

  loading,
}) => {
  const { isFavorite ,setCard} = React.useContext(ContextApp);
/*   const [card, cardSave] = React.useState(cardFavor); */

  const [like, likeSave] = React.useState(favorited);

  let clickСard = () => {
    addPlusCard({ imageUrl, text, price, id , parsetId : id   });
    isFavorite(id);
  };

  let clickLike = () => {
    addPlusLike({ imageUrl, text, price, id,parsetId : id });
    likeSave(!like);
  };

  return (
    <div className={c.card}>
      {loading ? (
        <CardLoader />
      ) : (
        <>
          <img
            className={c.like}
            onClick={clickLike}
            src={like ? "/img/like-on.svg" : "/img/like-off.svg"}
            alt="like"
          />
          <img
            className={c.sneakers}
            width={130}
            height={110}
            src={imageUrl}
            alt="card"
          />
          <div className={c.card__text}>{text}</div>
          <div className={c.card__item}>
            <div className={c.card__item__bye}>
              <span>ЦенА:</span>
              <b>{price} грн.</b>
            </div>

            <img
              onClick={clickСard}
              className={c.button}
              width={32}
              height={32}
              src={  isFavorite(id) ? "/img/button-one.svg" : "/img/button-on.svg"}
              alt="button"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
