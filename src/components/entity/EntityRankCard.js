// import React from 'react';
// import { entity_rank_card } from '../../temp_models';

// export class EntityRankCard extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			card: entity_rank_card
// 		};
// 	}

// 	componentDidMount() {
// 	}

//     render() {
//     	const card = this.state.card;
//     	const tags = card.tags.map((tag) => <li key={tag}>{tag}</li>);

//         return (
// 	        <div className="container col-xs-6 col-md-3 entity-card">
// 			    <div className="thumbnail">
// 			    	<a href={`/entity/${card.title}`}>
// 			            <div className="image-wrap">
// 			                <img src={ card.img } alt={ card.title } className="img-responsive"/>
// 			            </div>
// 			        </a>
// 			        <div className="caption">
// 			            <h2>
// 			            	<span className="label label-success">#{ card.rank }</span>
// 			                <a href={`/entity/${card.title}`} className="small mr5">{ card.title }</a>
// 			                <small>
// 			                    <span className="badge">
// 			                        <span className="glyphicon"></span>{ card.movement }
// 			                    </span>
// 			                </small>
// 			            </h2>
// 			            <a href={`/entity/${card.title}`}>
// 			            	<p className="mt10 cursor">{ card.title }</p>
// 			            </a>
// 			            <div className="btn-group" role="group" aria-label="Tags">
// 			            	<ul className="entity-tags">
// 								{ tags }
// 			            	</ul>
// 			            </div>
// 			        </div>
// 			    </div>
// 			</div>
//         );
//     }
// }

// export default EntityRankCard;