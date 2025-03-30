import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Card;
