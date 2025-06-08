import React, { useEffect, createContext, useContext } from "react";
import { observer } from "mobx-react-lite";
import { wordsStore } from "../store/store";

const WordsContext = createContext(wordsStore);

const useWordsStore = () => useContext(WordsContext);

const WordsContextProvider = observer(({ children }) => {

    useEffect(() => {
        wordsStore.fetchData();
    }, []);

    if (wordsStore.isLoading) return <p style={{ textAlign: "center" }}>Загрузка данных...</p>;
    if (wordsStore.error) return <p style={{ color: "red" }}>Ошибка: {wordsStore.error}</p>;

    return (
        <WordsContext.Provider value={wordsStore}>
            {children}
        </WordsContext.Provider>
    );
});

export { useWordsStore, WordsContextProvider };
