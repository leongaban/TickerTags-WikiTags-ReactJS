import React from 'react';

export class CategoryBanner extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			favorite: props.favorite,
			title: props.title
		};

		this.setFavorite = this.setFavorite.bind(this);
		this.shareCategory = this.shareCategory.bind(this);
	}

	setFavorite() {
		const toggle = !this.state.favorite;
		this.setState({ favorite: toggle });
	}

	shareCategory() {
	}

    render() {

        return (
	        <div className="container w100 pr0">
        		<div className="jumbotron category-jumbo">
		            <h1><div className="btn-group btn-group-xs pull-right" role="group"></div></h1>
		            <h4 className="text-uppercase text-center mbot20">The most talked about</h4>
		            <h1 className="text-center">{ this.props.title }</h1>
		            <h2 className="text-center mt20">
		            	<button className="btn btn-default mr10" type="button" onClick={ this.setFavorite }>
		            		<i className={ this.state.favorite ? 'fa fa-heart' : 'fa fa-heart-o' }/> Favorite
		            	</button>
		            	<button className="btn btn-primary" type="button" onClick={ this.shareCategory }>
		            		<i className="fa fa-share-square"/> Share
		            	</button>
		            </h2>
		        </div>
        	</div>
        );
    }
}

export default CategoryBanner;
