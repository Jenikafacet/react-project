import { useEffect, useState } from "react";
import styles from "./cardActive.module.css";

function CardActive(props) {
    const {title, transcription, translation, buttonRef} = props;

    const [showTranslation, setShowTranslation] = useState(false);

    const handleShowTranslation = () => {
        setShowTranslation(true);
        props.handleWordsCount(props.id)
    };

    useEffect(() => {
        setShowTranslation(false);
    }, [title]);

    return (
        <div className="card__item">
            <div className={styles.card__body}>
                <div>
                    <h4 className={styles.card__title}>{title}</h4>
                    <p className={styles.card__transcription}>{transcription}</p>
                </div>
                {showTranslation ? ( 
                    <div className={styles.card__translation}>{translation}</div>
                ) : (
                    <button 
                        ref={buttonRef}
                        onClick={handleShowTranslation}
                        className={styles.card__button}>
                        Проверить
                    </button>
                )}
            </div>
        </div>
    );
}

export default CardActive;
