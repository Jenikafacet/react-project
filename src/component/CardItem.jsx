import React, { useState } from "react";
import styles from './cardItem.module.css';
import Save from "./Save";
import Edit from "./Edit";

function CardItem(props) {
    const {onClick, title, transcription, translation, onSave, id} = props;

    const [isActive, setActive] = useState(false);
        
    const handleClick = () => {
        setActive(true);
    };

    const handleClickSave = () => {
        setActive(false);
        if (onSave) {
            onSave({
                id,
                title: editTitle,
                transcription: editTranscription,
                translation: editTranslation
            });
        }
    };

    const handleCancel = () => {
        setActive(false);
        setEditTitle(title);
        setEditTranscription(transcription);
        setEditTranslation(translation)
    };

    const [editTitle, setEditTitle] = useState(title);
    const [editTranscription, setEditTranscription] = useState(transcription);
    const [editTranslation, setEditTranslation] = useState(translation);

    const handleTitleChange = (event) => {
        setEditTitle(event.target.value);
    };
    const handleTranscriptionChange = (event) => {
        setEditTranscription(event.target.value);
    };
    const handleTranslationChange = (event) => {
        setEditTranslation(event.target.value);
    };

    return (
        <div onClick={onClick} className="card">
            {isActive === false
            ? <div className={styles.card__body}>
                <h4 className={styles.card__title}>{title}</h4>
                <p className={styles.card__transcription}>{transcription}</p>
                <h4 className={styles.card__translation}>{translation}</h4>
                <Edit onClick={handleClick} />
            </div>
            : <div className={styles.card__body__add}>
                <input type="text" value={editTitle} onChange={handleTitleChange} />
                <input type="text" value={editTranscription} onChange={handleTranscriptionChange}/>
                <input type="text" value={editTranslation} onChange={handleTranslationChange}/>
                <Save onClick={handleClickSave} onCancel={handleCancel}/>
            </div>}
        </div>
    );
}

export default CardItem;
