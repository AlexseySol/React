import React from "react";
import { Link } from "react-router-dom";
import app from "../App.module.scss";

import Card from "../componets/Card/Card";
import ContextApp from "../ContexApp";


const Like = ({ /* favorite */addPlusCard,addPlusLike }) => {

const  {favorite,isFavorite} = React.useContext(ContextApp)


  return (
    <div className={app.container}>
      <div className={app.first__menu}>
        <h2 className={app.menu__zag}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "black", display: "flex" }}
          >
            <img src="./img/home.svg" alt="" /> <div>Закладки</div>
          </Link>
        </h2>
      </div>
      <div className={app.menu__card}>
        {favorite.map((item) => {
          return (
            <Card 
            addPlusCard={(o) => addPlusCard(o)}
            favorited={true}
            id={item.id}
              key={item.id}
              text={item.text}
              price={item.price}
              imageUrl={item.imageUrl}
              addPlusLike={addPlusLike}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Like;
