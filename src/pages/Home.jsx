import React from "react";
import app from "../App.module.scss";
import Card from "../componets/Card/Card";
import ContextApp from "../ContexApp";

const Home = ({

  cCars,
  search,
  addPlusCard,
  searchChange,
  addPlusLike,
  setSearch,
  loading,
}) => {

const { isFavorite } = React.useContext(ContextApp)


  const renderItems = () => {
    const filtrItems = cCars.filter((item) =>
      item.text.toLowerCase().includes(search.toLowerCase())
    );





    return (loading ? [...Array(10)] : filtrItems).map((car, index) => {
   /*    const test = itemDrawCard.some((it) => Number(it.id) === Number(car.id)); */
      return (
        <Card
          {...car}
         /*  cardFavor={isFavorite( car  && car.id)} */
          addPlusLike={addPlusLike}
          key={index}
          addPlusCard={(o) => addPlusCard(o)}
          loading={loading}
        ></Card>
      );
    });
  };

  return (
    <div className={app.container}>
      <div className={app.first__menu}>
        <h2 className={app.menu__zag}>
          {search ? `Поиск по запросу:${search}` : `Все Кроссовки`}
        </h2>
        {console.log(search)}
        <div className={app.search}>
          <img src="/img/lupa.svg" alt="lupa" />
          <img
            className={app.inputClear}
            onClick={() => setSearch("")}
            src={search ? "/img/button.svg" : "/img/button.svg"}
            alt=""
          />
          <input
            onChange={searchChange}
            value={search}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className={app.menu__card}>{renderItems()}</div>
    </div>
  );
};

export default Home;
