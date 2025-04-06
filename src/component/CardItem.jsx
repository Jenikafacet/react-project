import React from "react";
import styles from './cardItem.module.css';
import Save from "./Save";
import Edit from "./Edit";

function CardItem(props) {
    const {check, title, transcription, translation} = props;

    return (
        <div className="card">
            {check
            ? <div className={styles.card__body}>
                <h4 className={styles.card__title}>{title}</h4>
                <p className={styles.card__transcription}>{transcription}</p>
                <h4 className={styles.card__translation}>{translation}</h4>
                <Edit />
            </div>
            : <div className={styles.card__body__add}>
                <input type="text" placeholder={title} />
                <input type="text" placeholder={transcription} />
                <input type="text" placeholder={translation} />
                <Save />
            </div>}
        </div>
    );
}

export default CardItem;
