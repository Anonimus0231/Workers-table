import React, { useState } from "react"
import style from './style_module.css'
import ModalWin from "../ModalWin/ModalWin.jsx"

export default function Header({getInfo}) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return(
    <>
    <header className="header">
      <div className="header__cont">
        <div  className="header__title">Workers Table</div>
        <svg onClick={() => {handleShow()}} xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z"/></svg> 
      </div>
    </header>
    <ModalWin show={show} setShow={setShow} getInfo={getInfo}/>
    </>
    )
}