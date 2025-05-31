import React, { useContext, useState }  from 'react';
import CardItem from './CardItem';
import { WordsContext } from './Context';


function CardList() {

    const { cardList, deleteWord, addWord } = useContext(WordsContext);  

    const [newWord, setNewWord] = useState({ title: "", transcription: "", translation: "" });

    const handleAdd = () => {
        if (newWord.title.trim()) {
            addWord(newWord);
            setNewWord({ title: "", transcription: "", translation: "" });
        }
    };

    return (
        <React.Fragment>
                <div className="new-word">
                    <input type="text" placeholder="word" value={newWord.title} onChange={(e) => setNewWord({ ...newWord, title: e.target.value })} />
                    <input type="text" placeholder="transcription" value={newWord.transcription} onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })} />
                    <input type="text" placeholder="translation" value={newWord.translation} onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })} />
                    <button onClick={handleAdd} className="button-add">Add word</button>
                </div>
                {cardList.map((item)=> {
                    return <CardItem 
                        deleteWord={() => deleteWord(item.id)}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        transcription={item.transcription}
                        translation={item.translation}
                    />
                })}
        </React.Fragment>
    );
}

export default CardList;
