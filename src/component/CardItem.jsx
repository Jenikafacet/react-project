import React, { useState } from "react";
import styles from './cardItem.module.css';
import Save from "./Save";
import Edit from "./Edit";
import { observer } from "mobx-react-lite";
import { useWordsStore } from "./Context";

const CardItem = observer((props) =>  {
    const {title, transcription, translation, id, deleteWord } = props;
    const store = useWordsStore();

    const [isActive, setActive] = useState(false);
    const [errors, setErrors] = useState({
        title: false,
        transcription: false,
        translation: false,
    })

    const validateFields = (fields) => {
        return {
            title: fields.title.trim() === '',
            transcription: fields.transcription.trim() === '',
            translation: fields.translation.trim() === '',
        }
    }
        
    const handleClick = () => {
        setActive(true);
    };

    const handleClickSave = () => {
        const newErrors = validateFields({
            title: editTitle,
            transcription: editTranscription,
            translation: editTranslation,
        });
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);

        if (hasErrors) {
            alert("Ошибка: все поля должны быть заполнены.");
            return;
        }

        console.log({
            id,
            title: editTitle,
            transcription: editTranscription,
            translation: editTranslation,
        });

        setActive(false);
        if (store.handleSave) {
            store.handleSave({
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
        setErrors((prev) => ({ ...prev, title: event.target.value.trim() === '' }));
    };

    const handleTranscriptionChange = (event) => {
        setEditTranscription(event.target.value);
        setErrors((prev) => ({ ...prev, transcription: event.target.value.trim() === '' }));
    };
    const handleTranslationChange = (event) => {
        setEditTranslation(event.target.value);
        setErrors((prev) => ({ ...prev, translation: event.target.value.trim() === '' }));
    };

    const isSaveDisabled = Object.values(errors).some(Boolean);

    return (
        <div className="card">
            {isActive === false
            ? <div className={styles.card__body}>
                <h4 className={styles.card__title}>{title}</h4>
                <p className={styles.card__transcription}>{transcription}</p>
                <h4 className={styles.card__translation}>{translation}</h4>
                <Edit onSave={handleClick} deleteWord={deleteWord} />
            </div>
            : <div className={styles.card__body__add}>
                <input type="text" value={editTitle} onChange={handleTitleChange} className={errors.title ? styles.inputError : ''} />
                <input type="text" value={editTranscription} onChange={handleTranscriptionChange} className={errors.transcription ? styles.inputError : ''} />
                <input type="text" value={editTranslation} onChange={handleTranslationChange} className={errors.translation ? styles.inputError : ''} />
                <Save onClick={handleClickSave} onCancel={handleCancel} disabled={isSaveDisabled} />
            </div>}
        </div>
    );
});

export default CardItem;
