import empty from "./DrawerEmpty.module.scss"
import React from "react"
import ContextApp from "../../../ContexApp"

const DrawerEmpty = ({title,description,image})=>{
 
  const {drawerOpen} = React.useContext(ContextApp)   


    return(
        <div className={empty.main}>
            <img  width={120} height={120} className={empty.img} src={image}    alt="korz" />
            <h2 className={empty.zag}>{title}</h2>
            <p>{description}</p>
            <div onClick= { ()=> drawerOpen(false)} className={empty.button}>Вернуться назад</div>
        </div>
        
    )
}

export default DrawerEmpty;