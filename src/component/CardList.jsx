import React, { useState }  from 'react';
import CardItem from './CardItem';
// import CardActive from './CardActive';
import cardListData from '../data/cardListData'; 


function CardList() {

    const [cardList, setCardList] = useState(cardListData);

    const handleSave = (updatedItem) => {
        setCardList(prevList =>
            prevList.map(item =>
                item.id === updatedItem.id ? { ...item, ...updatedItem } : item
            )
        );
    };

    // const [activeId, setActiveId] = useState(null);
    
    // const handleClick = (id) => {
    //     setActiveId(id);
    // };

    // const activeItem = cardList.find(item => item.id === activeId);
    

    return (
        <React.Fragment>
            <div className="card-list">
                {cardList.map((item)=> {
                    return <CardItem 
                        // onClick={() => handleClick(item.id)}
                        onSave={handleSave}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        transcription={item.transcription}
                        translation={item.translation}
                    />
                })}
            </div>
            {/* {activeItem && (
                <div className="card-active">
                    <CardActive
                        key={activeItem.id}
                        title={activeItem.title}
                        transcription={activeItem.transcription}
                        translation={activeItem.translation}
                    />
                </div>
            )} */}
            
        </React.Fragment>
    );
}

export default CardList;
