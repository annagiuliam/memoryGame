import React from 'react';


const Card = (props) => {
    return (
        <div className="card-container" onClick={props.onClick}>
            <img src={props.cat.src} alt=""></img>
        </div>
    )
}

export default Card;