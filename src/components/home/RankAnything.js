import React from 'react';

export class RankAnything extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Rank anything.',
			description: 'Create your own list and get a real-time ranking of what people are talking about from over 15 billion messages, tweets, and comments posted every day.',
			btn_text: 'New List'
		};
		this.createNewList = this.createNewList.bind(this);
	}

	createNewList(e) {
	}

    render() {
	    const titleStyle = { color: 'white'}
        return (
	        <div className="jumbotron rank-anything" style={titleStyle}>
                <h1>{ this.state.title }</h1>
                <p className="lead">{ this.state.description }</p>
                <button className="btn btn-success" type="button" onClick={ this.createNewList }>
                	<i className="fa fa-plus-circle"/> { this.state.btn_text }
                </button>
            </div>
        );
    }
}

export default RankAnything;
