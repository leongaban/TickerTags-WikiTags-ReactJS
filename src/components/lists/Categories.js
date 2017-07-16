import React from 'react'
import { isNil } from 'ramda'
import Chip from '../common/Chip'
import Card from './Card'

const cardsList = (card, index) => <Card key={ index } card={ card } />;

export default function Categories({ category, cards }) {

    return (
        <div className="container pl0">
        	<div className="mbot20 w100">
        		<Chip icon={ category } name={ category }/>
        	</div>
        	<div className="row categories-list">
        		<ul>
        			{ isNil(cards) ? null : cards.map(cardsList) }
        		</ul>
        	</div>
        </div>
    );
}
