
import React from 'react'
import style from "./tracking.module.css"
import "./tracking.css"

const Tracking = ({dados,trackingInfoTime}) => {
  trackingInfoTime && console.log(trackingInfoTime)
  
 

  return (
    <section
      className={style.tracking}
    >
      {dados.map(({title,timeframes}) => (
          <div
          className={`${style.bgTracking} ${title.toLowerCase()}`}
          key={title}>
            <div className={style.dataTracking}>
              <h2
                className={style.trackingTitle}
                >{title}</h2>
              <p
                className={style.timeCTracking}
              >{trackingInfoTime && timeframes[trackingInfoTime].current}hrs
              </p>
              <p
                className={style.timePTracking}
              >Last week - { trackingInfoTime && timeframes[trackingInfoTime].previous}hrs
              </p>
            </div>
          </div>
        ))
      }
    </section>

  )
}

export { Tracking }
