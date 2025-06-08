import React, { useState, useEffect, createContext } from "react";

const WordsContext = createContext();

const WordsContextProvider = ({children}) => {
    const [cardList, setCardList] = useState([
        { id: 1, title: 'word', transcription: '[wɜːd]', translation: 'слово' },
        { id: 2, title: 'see', transcription: '[siː]', translation: 'видеть' },
        { id: 3, title: 'snow', transcription: '[snəʊ]', translation: 'снег' },
        { id: 4, title: 'apple', transcription: '[ˈæpl]', translation: 'яблоко' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
                const data = await response.json();

                const mappedData = data.map(item => ({
                    id: item.id,
                    title: item.english,
                    transcription: item.transcription,
                    translation: item.russian
                }));

                setCardList(prev => [...prev, ...mappedData]);
            } catch (err) {
                setError(err.message || "Ошибка загрузки");
            } finally {
                setIsLoading(false);
                
            }
        };

        fetchData();
    }, []);

    const deleteWord = (id) => {
        setCardList(prev => prev.filter(item => item.id !== id));
    };

    const addWord = (newItem) => {
        setCardList(prev => [...prev, { id: Date.now(), ...newItem }]);
    };

    const handleSave = (updatedItem) => {
        setCardList(prev =>
            prev.map(item =>
                item.id === updatedItem.id ? { ...item, ...updatedItem } : item
            )
        );
    };

    if (isLoading) return <p style={{ textAlign: "center" }}>Загрузка данных...</p>;
    if (error) return <p style={{ color: "red" }}>Ошибка: {error}</p>;

    return (
        <WordsContext.Provider value={{ cardList, setCardList, deleteWord, handleSave, addWord }}>
            {children}
        </WordsContext.Provider>
    );
};

export { WordsContext, WordsContextProvider };
