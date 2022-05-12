
import style from "./main.module.css"
import avatar from "../images/image-jeremy.png"
import trackingTime from "../data.json"
import { Tracking } from "./tracking"
import React from "react"

const MainTracking = () => {
  const [valueTracking, setValueTracking] = React.useState()

  function handleSetTracking ({target}) {
    setValueTracking(target.innerText.toLowerCase())
  }

  return (
    <main className={`${style.mainContent} container`}>
      <aside className={style.aside}>
        <div className={style.asideMain}>
          <img src={avatar} alt="foto de perfil" />
          <p className={style.infoPerfil}>
            Report for
          </p>
          <h1 className={style.namePerfil}>
            Jeremy Robson
          </h1>
        </div>
          <nav
           className={style.navBtns}>
              <button 
                onClick={handleSetTracking}
                className={style.btns}>Daily</button>
              <button 
                onClick={handleSetTracking}
                className={style.btns}>weekly</button>
              <button 
                onClick={handleSetTracking}
                className={style.btns}>monthly</button>
          </nav>
      </aside>
      
        <div className={style.trackingTime}>
          <Tracking dados={trackingTime} trackingInfoTime = {valueTracking}/>
        </div>
    </main>
  )
}

export {
  MainTracking
}