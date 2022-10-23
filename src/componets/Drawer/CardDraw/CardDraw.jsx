import React from "react"
import cardDraw  from "./CardDraw.module.scss"




const CardDraw =({imageUrl,price,text,addRemoveCart, id})=>{

    return(
    <div>
        <div className={cardDraw.cart}>
          <img width={70}  height={70} src={imageUrl} alt="кроссовки" />
          <div className={cardDraw.cart__item}>
            <p>{text}</p>
            <b>{price} грн.</b>
          </div>
       <img  className={cardDraw.click} onClick={()=>addRemoveCart(id)} src="/img/button-on.svg" alt="" />
          </div>
      </div>
    )
}

export default CardDraw;