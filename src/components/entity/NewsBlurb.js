import React from 'react';

const NewsBlurb = (props) => {
	const title = props.title;
	
    return (
    	<div className="media"> 
			<div className="media-left">
			<a href={ props.link } target="_blank" title={ title }>
				<img className="media-object" src={ props.img } alt="Harrison Ford"/>
			</a>
			</div>
			<div className="media-body">
				<h4 className="media-heading">
					<a href={ props.link } target="_blank" title={ title }>{ title }</a>
				</h4>
				{ props.description }
			</div>
		</div>
    );
};

export default NewsBlurb;