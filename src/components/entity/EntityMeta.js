import React from 'react';
import { entity_meta } from '../../temp_models';

export default class EntityMeta extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title
		};
	}

	componentDidMount() {
	}

    render() {
        return (
	        <div className="entity-meta">
		        <img src={ entity_meta.image } alt={ this.state.title } className="img-responsive img-thumbnail"/>
		        <h3 className="text-center">{ this.state.title }</h3>
		        <dl className="dl-horizontal text-overflow">
		        	<dt>Born:</dt>
		        	<dd>Kimberly Noel Kardashian</dd>
		        	<dd>October 21, 1980 (age 36)</dd>
			  		<dd><a href="#">Los Angeles, CA</a></dd>

			  		<dt>Profiles:</dt>
					<dd>
					  	<a href="https://www.instagram.com/kimkardashian/"><span className="fa-stack fa-lg"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a> <a href="https://twitter.com/kimkardashian/"><span className="fa-stack fa-lg"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a> <a href="https://www.facebook.com/KimKardashian/"><span className="fa-stack fa-lg"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a> <a href="https://www.youtube.com/channel/UCeNhHgTE36tTQkJsjPaPwnA/"><span className="fa-stack fa-lg"><i className="fa fa-square fa-stack-2x"></i><i className="fa fa-youtube fa-stack-1x fa-inverse"></i></span></a>
					</dd>

					<dt>Website:</dt>
					<dd><a href="https://www.kimkardashianwest.com">kimkardashianwest.com</a></dd>

					<dt>Height:</dt>
					<dd>5' 3"</dd>

					<dt>Siblings:</dt>
					<dd>
						<a href="#">Kourtney Kardashian</a> (sister)
					</dd>
					<dd>
						<a href="#">Kylie Jenner</a> (half-sister)
					</dd>
					<dd>
						<a href="#">Khloe Kardashian</a> (sister)
					</dd>
					<dd>
						<a href="#">Kendall Jenner</a> (half-sister)
					</dd>
					<dd>
						<a href="#">Rob Kardashian</a> (brother)
					</dd> 

					<dt>Children:</dt>
					<dd><a href="#">Saint West</a></dd>
					<dd><a href="#">North West</a></dd>

					<dt>Parents:</dt>
					<dd><a href="#">Robert Kardashian</a> (father)</dd>
					<dd><a href="#">Kris Jenner</a> (mother)</dd>

					<dt>Residence:</dt>
					<dd><a href="#">Hidden Hills, CA</a></dd>

					<dt>Occupation:</dt>
					<dd>
						<a href="#">Television personality</a>
					</dd>
					<dd>
						<a href="#">socialite</a>
					</dd>
					<dd>
						<a href="#">actress</a>
					</dd>
					<dd>
						<a href="#">model</a>
					</dd>

					<dt>Salary:</dt>
					<dd>US$52.5 million (2015)</dd>

					<dt>Spouse(s):</dt>
					<dd>
						<a href="#">Damon Thomas</a> (m. 2000-04)
					</dd>
					<dd>
						<a href="#">Kris Humphries</a> (m. 2011-13)
					</dd>
					<dd>
						<a href="#">Kanye West</a> (m. 2014)
					</dd>

					<dt>Also Known As:</dt>
					<dd>Kim Kardashian West</dd>
					<dd>KiKi</dd>
					<dd>Keeks</dd>
					<dd>Kim K</dd>
					<dd>Kimberly Noel Kardashian</dd>
					<dd>Kimberly Kardashian West</dd>
					<dd>Kimmie</dd>
					<dd>Kimberly Noel "Kim" Kardashian</dd>
					<dd>Kimberly "Kim" Kardashian West</dd>
		        </dl>
			</div>
        );
    }
}