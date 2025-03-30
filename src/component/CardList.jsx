import React from 'react';
import Card from './Card';

function CardList() {
    return (
        <React.Fragment>
            <div className="card-list">
                <Card
                    title='...'
                    text='///'
                />
                <Card
                    title='...'
                    text='///'
                />
                <Card
                    title='...'
                    text='///'
                />
                <Card
                    title='...'
                    text='///'
                />
            </div>
        </React.Fragment>
    );
}

export default CardList;