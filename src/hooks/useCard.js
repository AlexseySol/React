import React from "react";
import ContextApp from "../ContexApp";




export  const  useCard = ()=>{
const {itemDrawCard,setItemDrawCard} = React.useContext(ContextApp)
const totalPrise = itemDrawCard.reduce((sum,obj)=> obj.price + sum , 0)
console.log( itemDrawCard.reduce((sum,obj)=> obj.price + sum , 0))

return { totalPrise, setItemDrawCard,itemDrawCard}
}


