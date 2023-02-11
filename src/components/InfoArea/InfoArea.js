import React from 'react'
import "./infoarea.css"
import { AiOutlineCheck } from "react-icons/ai";

function InfoArea() {
  return (
    <div className='info-area'>
        <div className='advertisement-box'>
        <AiOutlineCheck style={{ fontSize: '7em' }}/><p>Wir legen viel Wert auf Verständlichkeit und logischen Aufbau.</p>
        </div>
        <div className='advertisement-box'>
        <AiOutlineCheck style={{ fontSize: '7em' }}/><p>Wenn du die Prüfung wiederholen musst, verlängern wir dir den Zugang zu den Unterlagen.</p>
        </div>
        <div className='advertisement-box'>
        <AiOutlineCheck style={{ fontSize: '7em' }}/><p>Speziell für Minimalisten oder Perfektionisten.</p>
        </div>
    </div>
  )
}

export default InfoArea