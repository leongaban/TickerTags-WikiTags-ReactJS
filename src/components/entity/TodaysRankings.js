import React from 'react';
import { splitAt } from 'ramda';
import { todays_rankings as todays } from '../../temp_models';
import ListGroupItem from './ListGroupItem';

// split todays.rankings into 2 even arrays
// create ListGroupItems out of each array
const rankedList = todays.rankings;
const half = (rankedList.length / 2);
const rankingArrays = splitAt(half, rankedList);
const topList = rankingArrays[0];
const botList = rankingArrays[1];

const fillGroupItem = (item) => {
	return (
		<ListGroupItem
			key={ item.id }
			title={ item.title }
			link={ item.link }
			rank={ item.rank }
			movement={ item.movement }
			direction={ item.direction } />
	)
};

const top_list = topList.map((item) => fillGroupItem(item));
const bot_list = botList.map((item) => fillGroupItem(item));

export default class TodaysRankings extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title
		};
	}

    render() {
        return (
	        <div className="todays-rankings">
				<h3>Today's Rankings <small>for { this.state.title }</small></h3>

				<div className="col-md-12 col-lg-6 list-group mt10">
					{ top_list }
				</div>

				<div className="hidden-md hidden-sm hidden-xs col-lg-6 list-group mt10">
					{ bot_list }
				</div>
			</div>
        );
    }
}