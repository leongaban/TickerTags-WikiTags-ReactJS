import React from 'react';
import { isEmpty } from 'ramda';

export default class ListGroupItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			link: props.link,
			rank: props.rank,
			direction: props.direction,
			movement: props.movement
		};
	}

    render() {
    	const movement = this.state.movement;
    	const direction = this.state.direction;
    	const setClass = (direction) => isEmpty(direction) ? 'fa' : `fa fa-caret-${direction}`;

        return (
			<a className="list-group-item btn btn-xs btn-default" href={ this.state.link }>
				<span className="label label-success">#{ this.state.rank }</span> { this.state.title }
				<span className="badge"><small><i className={ setClass(direction) }></i>{ movement }</small></span>
			</a>
        );
    }
}