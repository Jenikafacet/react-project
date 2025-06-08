import React, { useState, useRef, useEffect } from 'react';
import CardActive from './CardActive'; 
import styles from './cardActiveList.module.css';
import left from '../data/arrow-sm-left-svgrepo-com.svg';
import right from '../data/arrow-sm-right-svgrepo-com.svg';
import icon from '../data/trumpet_17951008.png';
import { observer } from "mobx-react-lite";
import { useWordsStore } from "./Context";

const CardActiveList= observer(() => {
    const store = useWordsStore(); 

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [wordsCount, setWordsCount] = useState(0);
    const [learnedCards, setLearnedCards] = useState([]);
    const buttonRef = useRef();

    const handleNext = () => {
        if (currentIndex < store.cardList.length -1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex < store.cardList.length - 1 ? prevIndex + 1 : prevIndex
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
        setCurrentIndex(0);
        setWordsCount(0);
        setLearnedCards([]);
    };

    const handleWordsCount = (id) => {
        if (!learnedCards.includes(id)) {
            setWordsCount(wordsCount+1);
            setLearnedCards([...learnedCards, id]);
        }    
    }

    useEffect(() => {
        console.log(buttonRef.current)
        if (buttonRef.current) {
            buttonRef.current.focus();
        }   
    }, [currentIndex]);

    return (
        <React.Fragment>
            <h1>Карточки слов</h1>
            <div className={styles.card__box}>
                <button className={styles.button__box} onClick={handlePrev} disabled={currentIndex === 0}>
                    <img src={left} alt="назад" width="30px" height="30px" />
                </button>
                <div className={`${styles.card__transition} ${isAnimating ? styles.hidden : ''}`} >
                    <CardActive
                        key={store.cardList[currentIndex].id} 
                        title={store.cardList[currentIndex].title}
                        transcription={store.cardList[currentIndex].transcription}
                        translation={store.cardList[currentIndex].translation}
                        handleWordsCount={()=>handleWordsCount(store.cardList[currentIndex].id)}
                        id={store.cardList[currentIndex].id}
                        buttonRef={buttonRef}
                    /> 
                </div>
                <button className={styles.button__box} onClick={handleNext} disabled={currentIndex === store.cardList.length - 1}>
                    <img src={right} alt="вперед" width="30px" height="30px" />
                </button>
            </div>
            <div className={styles.card__number}>{currentIndex + 1} из {store.cardList.length}</div>
            <div>Изучено слов: {wordsCount}</div>
            {currentIndex === store.cardList.length - 1 && (
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
});

export default CardActiveList;
