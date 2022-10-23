import axios from "axios";
import React from "react";
import ContextApp from "../../ContexApp";
import { useCard } from "../../hooks/useCard";
import CardDraw from "./CardDraw/CardDraw";

import drawer from "./Drawer.module.scss";
import DrawerEmpty from "./DrawerEmpty/DrawerEmpty";

const daley = () => {
  new Promise((rec) => setTimeout(rec, 1000));
};

const Drawer = ({ setDrawerClose, addRemoveCart }) => {
  const { setItemDrawCard, cCars } = React.useContext(ContextApp);
  const [isOn, setOn] = React.useState(false);
  const [isId, setId] = React.useState(null);

  const {itemDrawCard,setCard,totalPrise} = useCard();

  const onClick = async () => {
    
    try {
      const { data } = await axios.post(
        "https://63331f25433198e79dbfcd6d.mockapi.io/saveZakaz",
        {
          item: itemDrawCard,
        }
      );

      setId(data.id);
      setOn(true);
      setItemDrawCard([]);
 
      /*   axios.delete(
        "https://63331f25433198e79dbfcd6d.mockapi.io/Cart",itemDrawCard.id
      ); 
 */

  

      for (let i = 0; i < itemDrawCard.length; i++) {
        const element = itemDrawCard[i];
        axios.delete( "https://63331f25433198e79dbfcd6d.mockapi.io/Cart" +  Number(element.id )  );
        daley();
      } 
    }
     catch (error) {
      alert("psd");
    }
  };

  return (
    <div className={drawer.drawerWrapper}>
      <div className={drawer.drawer}>
        <div className={drawer.header__wraper}>
          <h2>Корзина</h2>
          <img
            className={drawer.click}
            onClick={setDrawerClose}
            src="/img/button.svg"
            alt="фыв"
          />
        </div>
        {itemDrawCard.length > 0 ? (
          <div className={drawer.cart__wrappen}>
            <div className={drawer.cart__item}>
              {itemDrawCard.map((obj) => (
                <CardDraw
                  key={obj.id}
                  text={obj.text}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  id={obj.id}
                  addRemoveCart={addRemoveCart}
                />
              ))}
            </div>
            <ul className={drawer.drawer__footer}>
              <li>
                <span> Итого:</span>
                <div className={drawer.border}></div>
                <b>{totalPrise} грн.</b>
              </li>
              <li>
                <span>Налог 5%:</span>


                <div className={drawer.border}></div>  <b> {( totalPrise/100*5).toFixed(2)}  грн</b>
              </li>
              <li>
                <div className={drawer.button__drawer} onClick={onClick}>
                  Оформить заказ
                </div>{" "}
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <DrawerEmpty
              setDrawerClose={setDrawerClose}
              title={isOn ? "Заказ оформлен!" : "Корзина пустая"}
              description={
                isOn
                  ? `Ваш заказ ${isId} скоро будет передан курьерской доставке`
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
              image={isOn ? "/img/oformlen.jpg" : "/img/korzina.png"}
            />
          </div>
        )}
      </div>
    </div>



  );
};
export default Drawer;
