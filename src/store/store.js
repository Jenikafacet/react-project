import { v4 as uuidv4 } from "uuid";
import { makeAutoObservable, runInAction } from "mobx";
// import { createContext } from "react";

class WordsStore {
    cardList = [
        { id: uuidv4(), title: 'word', transcription: '[wɜːd]', translation: 'слово' },
        { id: uuidv4(), title: 'see', transcription: '[siː]', translation: 'видеть' },
        { id: uuidv4(), title: 'snow', transcription: '[snəʊ]', translation: 'снег' },
        { id: uuidv4(), title: 'apple', transcription: '[ˈæpl]', translation: 'яблоко' }
    ];

    isLoading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchData () {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
            const data = await response.json();

            const mappedData = data.map(item => ({
                id: uuidv4(),
                title: item.english,
                transcription: item.transcription,
                translation: item.russian
            }));

            runInAction(() => {
                this.cardList = [...this.cardList, ...mappedData];
                this.isLoading = false;
            });
        } catch (err) {
            runInAction(() => {
                this.error = err.message || "Ошибка загрузки";
                this.isLoading = false;
            });
        } 
    };

    deleteWord(id) {
        this.cardList = this.cardList.filter(item => item.id !== id);
    };

    addWord(newItem) {
        this.cardList.push({ id: uuidv4(), ...newItem });
    };
    
    handleSave(updatedItem) {
        this.cardList = this.cardList.map(item => 
            item.id === updatedItem.id ? { ...item, ...updatedItem } : item
        );
    };   
}

export const wordsStore = new WordsStore();
