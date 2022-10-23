import { Link } from "react-router-dom";
import { useCard } from "../../hooks/useCard";
import header from "./Header.module.scss";


const Header = (props) => {

  const {itemDrawCard,setCard,totalPrise} = useCard();

  return (
    <header>
      <div className={header.header}>
        <Link  style={{ textDecoration: 'none', color: 'black', display:"flex"}}  className={header.a} to="/">
          <div className={header.headerLeft}>
            <img width={40} height={40} src="/img/logo.jpg" alt="logo" />
            <ul>
              <li>REACT SNEAKERS</li>
              <li>Магазин лучших кроссовок</li>
            </ul>
          </div>
        </Link>
        <ul className={header.headerRight}>
          <li className={header.click} onClick={props.setDrawerOpen}>
            <img src="/img/korzina.svg" alt="korzina" />
            <span> {totalPrise} грн.</span>
          </li>

          <li>
            <Link to="like">
              <img src="/img/zakladka.svg" alt="zakladka" />
            </Link>
          </li>
          <li>
            <img src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
