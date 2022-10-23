import app from "./App.module.scss";
import React from "react";

import Drawer from "./componets/Drawer/Drawer";
import Header from "./componets/Header/Header";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Like from "./pages/Like";
import ContextApp from "./ContexApp";






function App() {
 
  // информация с сервера
  const [cCars, setCard] = React.useState([]);

  //поисковая строка
  const [search, setSearch] = React.useState("");
  // открытие корзины
  const [drawerCard, drawerOpen] = React.useState(false);
  // заполнение корзины
  const [itemDrawCard, setItemDrawCard] = React.useState([]);

  // Закладка лайк
  const [favorite, setFavorite] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function effectRes() {
    
      const cCarsResponse = await axios.get(
        "https://63331f25433198e79dbfcd6d.mockapi.io/card"
      );
      const itemDrawCardResponse = await axios.get(
        "https://63331f25433198e79dbfcd6d.mockapi.io/Cart"
      );
      const favoriteResponce = await axios.get(
        "https://63331f25433198e79dbfcd6d.mockapi.io/like"
      );
   
      setLoading(false)
      setItemDrawCard(itemDrawCardResponse.data);
      setFavorite(favoriteResponce.data);
      setCard(cCarsResponse.data);
    }
    effectRes();
  }, []);

  /*       .then((res) => {
        setCard(res.data);
      });
    axios
      .get("https://63331f25433198e79dbfcd6d.mockapi.io/Cart")
      .then((res) => {
        setItemDrawCard(res.data);
      });
    axios
      .get("https://63331f25433198e79dbfcd6d.mockapi.io/like")
      .then((res) => {
        setFavorite(res.data);
      });
 */

  /* fetch("https://63331f25433198e79dbfcd6d.mockapi.io/card").then(
      (res) => {
        return res.json();
      }
    )
    .then((json) => {
      setCard(json);
    }) */

  // добавления закладки на сервер

  // кнопка удалить
  const addRemoveCart = (id) => {
    axios.delete(`https://63331f25433198e79dbfcd6d.mockapi.io/Cart/${id}`);
    setItemDrawCard((prev) =>
      prev.filter((item) => Number(id) !== Number(item.id))
    );
  };

  // добавление карточек в дравер
  const addPlusCard = async (obj) => {
const paret = itemDrawCard.find((it) => Number(it.parsetId) === Number(obj.id))
    try {
      if (paret) {
        axios.delete(
          `https://63331f25433198e79dbfcd6d.mockapi.io/Cart/${paret.id}`
        );
      
        setItemDrawCard((prev) =>
          prev.filter((item) => Number(obj.parsetId) !== Number(item.id))
        );
      } else {
       const {data} =  await axios.post(
          "https://63331f25433198e79dbfcd6d.mockapi.io/Cart",
          obj
        );
        setItemDrawCard((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка");
    }

    /*   axios.post("https://63331f25433198e79dbfcd6d.mockapi.io/Cart", o);
    setItemDrawCard((prev) => [...prev, o]); */
  };
  // Добавление карточки с закладками на сервер

  const addPlusLike = async (obj) => {
   
    try {
      if (favorite.find((it) => Number(it.id) === Number(obj.id))) {
        axios.delete(
          `https://63331f25433198e79dbfcd6d.mockapi.io/like/${obj.id}`
        );
        setFavorite((prev) =>
          prev.filter((item) => Number(obj.id) !== Number(item.id))
        );
    
      } else {
        await axios.post(
          "https://63331f25433198e79dbfcd6d.mockapi.io/like",
          obj
        );
        setFavorite((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Ошибка");
    }
  };
 

  // поиск
  const searchChange = (event) => {
    setSearch(event.target.value);
  };



  const isFavorite = (obj)=>{
 
    return  itemDrawCard.some(
    (it) => Number(it.parsetId) === Number(obj)
  );

  }

  return (
 <ContextApp.Provider value={{favorite,isFavorite,itemDrawCard,cCars,addRemoveCart,drawerOpen,setItemDrawCard,setCard}}>
    <div className={app.app}>
      {drawerCard ? (
        <Drawer
          itemDrawCard={itemDrawCard}
          setDrawerClose={() => drawerOpen(false)}
          addRemoveCart={addRemoveCart}
        />
      ) : (
        false
      )}

      <Header setDrawerOpen={() => drawerOpen(true)} />

      <Routes>
        <Route
          element={
            <Home
              itemDrawCard={itemDrawCard}
              cCars={cCars}
              search={search}
              addPlusCard={addPlusCard}
              searchChange={searchChange}
              addPlusLike={addPlusLike}
              setSearch={setSearch}
              loading={loading}

            />
          }
          path="/"
        />
        <Route
          element={
            <Like
              addPlusCard={addPlusCard}
              setFavorite={setFavorite}
              favorite={favorite}
              addPlusLike={addPlusLike}
            />
          }
          path="like"
        />
      </Routes>
      
    </div>
</ContextApp.Provider>
  );

}  
export default App;
