import React, { Children, useRef } from "react";
import "./modal.css"
export const Modal = ({modal , setModal ,children ,title}) => {
    const overleyRef = useRef()
    const handleOvarley =(evt)=>{
        if(evt.target === overleyRef.current){
            setModal(false)
        }
       
    }
  return (
<div ref={overleyRef} onClick={(evt) => handleOvarley(evt)} className={`overlay ${modal ? 'open' : ''}`}>
<div className="modal-wrapper ">
      <button onClick={() => setModal(false)} className="btn btn-dark rounded-0 modal-button"> &times; </button>
      <div className="modal-header">
        <h3> {title}</h3>
      </div>
      <div className="modal-content">
        {children}
      </div>
    </div>
</div>
  );
};
