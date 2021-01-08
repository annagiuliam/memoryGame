import React from 'react';

const Modal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return (
    <div className={showHideClassName}>
        <section  className="modal-main">
            <div className="modal-text">{props.text}</div>
            <button className="modal-btn" onClick={props.onClick}>OK</button>
        </section>        
    </div>)
}

export default Modal