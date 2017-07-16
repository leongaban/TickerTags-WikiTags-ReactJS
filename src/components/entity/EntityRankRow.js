import React from 'react'
import { notEmpty } from '../../util/utility'

export default function EntityRankRow(props) {
	const tags = props.tags.map((tag) => tag);
	const styler = (direction) => notEmpty(direction) ? `fa fa-caret-${direction}` : '';

	return (
    	<div className="row col-md-12 entity-row">
            <div className="col-md-1">
                <h2 className="text-center fl label-rank">
                	<span className="label label-success mright5">{ props.rank }</span>
                </h2>
                <span className="badge fl">
                	<i className={ styler(props.direction) }></i>
                    <span className="glyphicon"></span> { props.movement }
                </span>
			</div>
            <div className="col-md-3 pl0"><img src={ props.img } alt={ props.title } className="img-rounded"/>
            </div>
            <div className="col-md-4 text-center">
                <h3 className="mb10 font24"><a href="/wiki/Halle_Berry">{ props.title }</a></h3>
                <h5>{ tags }</h5>
			</div>
            <div className="col-sm-12 col-md-4">
                <div id="" className="chart_div">
					<a href="http://placehold.it"><img src="http://placehold.it/390x200?text=Chart"/></a>
                </div>
            </div>
        </div>
    );
}