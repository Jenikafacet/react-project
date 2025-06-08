import React, { useState }  from "react";
import CardItem from "./CardItem";
import { observer } from "mobx-react-lite";
import { useWordsStore } from "./Context";

const CardList = observer(() => {
    const store = useWordsStore(); 

    const [newWord, setNewWord] = useState({ title: "", transcription: "", translation: "" });
    const [error, setError] = useState("");

    const handleAdd = () => {
        if (!newWord.title.trim() || !newWord.transcription.trim() || !newWord.translation.trim()) {
            setError("Заполните все поля");
            return;
        }
        setError("");
        store.addWord(newWord);
        setNewWord({ title: "", transcription: "", translation: "" });
    };

    return (
        <React.Fragment>
                <div className="new-word">
                    <input type="text" placeholder="word" value={newWord.title} onChange={(e) => setNewWord({ ...newWord, title: e.target.value })} />
                    <input type="text" placeholder="transcription" value={newWord.transcription} onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })} />
                    <input type="text" placeholder="translation" value={newWord.translation} onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })} />
                    <button onClick={handleAdd} className="button-add">Add word</button>
                </div>
                {error && <p style={{color: "red"}}>{error}</p>}
                {store.cardList.map((item)=> {
                    return <CardItem 
                        deleteWord={() => store.deleteWord(item.id)}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        transcription={item.transcription}
                        translation={item.translation}
                    />
                })}
        </React.Fragment>
    );
});

export default CardList;
