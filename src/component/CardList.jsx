import React from 'react';
import CardItem from './CardItem';

function CardList() {
    return (
        <React.Fragment>
            <div className="card-list">
                <CardItem
                    check={false}
                    title='word'
                    transcription='///'
                    translation='&&&'
                />
                <CardItem
                    check={true}
                    title='word'
                    transcription='///'
                    translation='&&&'
                />
                <CardItem
                    check={true}
                    title='word'
                    transcription='///'
                    translation='&&&'
                />
                <CardItem
                    check={true}
                    title='word'
                    transcription='///'
                    translation='&&&'
                />
            </div>
        </React.Fragment>
    );
}

export default CardList;