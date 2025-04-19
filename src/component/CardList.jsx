import React, { useState }  from 'react';
import CardItem from './CardItem';
import CardActive from './CardActive';


function CardList() {

    const [cardList, setCardList] = useState([{id: 1, title: 'word', transcription: '///', translation: 'Слово'},
        {id: 2, title: 'see', transcription: '///', translation: 'Видеть'},
        {id: 3, title: 'snow', transcription: '///', translation: 'Снег'},
        {id: 4, title: 'apple', transcription: '///', translation: 'Яблоко'}
    ]);

    const handleSave = (updatedItem) => {
        setCardList(prevList =>
            prevList.map(item =>
                item.id === updatedItem.id ? { ...item, ...updatedItem } : item
            )
        );
    };

    const [activeId, setActiveId] = useState(null);
    
    const handleClick = (id) => {
        setActiveId(id);
    };

    const activeItem = cardList.find(item => item.id === activeId);

    return (
        <React.Fragment>
            <div className="card-list">
                {cardList.map((item)=> {
                    return <CardItem 
                        onClick={() => handleClick(item.id)}
                        onSave={handleSave}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        transcription={item.transcription}
                        translation={item.translation}
                    />
                })}
            </div>
            <div className="card-active">
                {activeItem && (
                    <CardActive
                        key={activeItem.id}
                        title={activeItem.title}
                        transcription={activeItem.transcription}
                        translation={activeItem.translation}
                    />
                )}
            </div>
        </React.Fragment>
    );
}

export default CardList;