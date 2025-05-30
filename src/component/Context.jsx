import React, { useState, createContext } from "react";

const WordsContext = createContext();

const WordsContextProvider = ({children}) => {
    const [cardList, setCardList] = useState([
        { id: 1, title: 'word', transcription: '///', translation: 'Слово' },
        { id: 2, title: 'see', transcription: '///', translation: 'Видеть' },
        { id: 3, title: 'snow', transcription: '///', translation: 'Снег' },
        { id: 4, title: 'apple', transcription: '///', translation: 'Яблоко' }
    ]);

    return (
        <WordsContext.Provider value={{ cardList, setCardList }}>
            {children}
        </WordsContext.Provider>
    );

};

export { WordsContext, WordsContextProvider };