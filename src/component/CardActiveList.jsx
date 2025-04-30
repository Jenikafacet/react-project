import React, { useState } from 'react';
import CardActive from './CardActive'; 
import cardListData from '../data/cardListData';
import styles from './cardActiveList.module.css';
import left from '../data/arrow-sm-left-svgrepo-com.svg'
import right from '../data/arrow-sm-right-svgrepo-com.svg'
import icon from '../data/trumpet_17951008.png'

function CardActiveList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (currentIndex < cardListData.length -1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex < cardListData.length - 1 ? prevIndex + 1 : prevIndex
                );
                setIsAnimating(false)
            }, 300);
        }  
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : prevIndex
                );
                setIsAnimating(false)
            }, 300);
        }
    };

    const handleRestart = () => {
        setCurrentIndex (0);
    };

    return (
        <React.Fragment>
            <h1>Карточки слов</h1>
            <div className={styles.card__box}>
                <button className={styles.button__box} onClick={handlePrev} disabled={currentIndex === 0}>
                    <img src={left} alt="назад" width="30px" height="30px" />
                </button>
                <div className={`${styles.card__transition} ${isAnimating ? styles.hidden : ''}`} >
                    <CardActive 
                        title={cardListData[currentIndex].title}
                        transcription={cardListData[currentIndex].transcription}
                        translation={cardListData[currentIndex].translation}
                    /> 
                </div>
                <button className={styles.button__box} onClick={handleNext} disabled={currentIndex === cardListData.length - 1}>
                    <img src={right} alt="вперед" width="30px" height="30px" />
                </button>
            </div>
            <div className={styles.card__number}>{currentIndex + 1} из {cardListData.length}</div>  
            {currentIndex === cardListData.length - 1 && (
                <div className={styles.finish__massage}>
                    <div className={styles.finish__box}>
                        <div>Вы прошли все задания!</div>
                        <img src={icon} alt="icon" width="30px" height="30px" />
                    </div>
                    <button className={styles.button__box} onClick={handleRestart}>Начать сначала</button>
                </div>
            )}
        </React.Fragment>
    );
}

export default CardActiveList;
