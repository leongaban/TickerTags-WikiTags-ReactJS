import React from 'react'

export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				username: 'Jordan Mclain'
			}
		};
	}

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
		            <div className="navbar-header">
		                <a className="navbar-brand navbar-link" href="/home">
		                	<img src="http://distribution.wikitags.com/imgs/wikitags-logo.png" height="25"/>
		                </a>
		                <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-2">
		                	<span className="sr-only">Toggle navigation</span>
		                	<span className="icon-bar"></span>
		                	<span className="icon-bar"></span>
		                	<span className="icon-bar"></span>
		                </button>
		            </div>
		            <div className="collapse navbar-collapse" id="navcol-2">
		                <ul className="nav navbar-nav navbar-right">
		                	<li role="presentation">
				            	<div className="form-group">
		                            <label htmlFor="search-field"><i className="fa fa-search"></i></label>
		                            <input type="text" name="search" placeholder="Search" className="form-control ui-autocomplete-input mtneg9" id="search_index" autoComplete="off" />
		                        </div>
		                	</li>
		                	<li role="presentation">
		                		<a href="/wiki/trends"><i className="fa fa-line-chart mr5"></i> Trends</a>
		                	</li>
		                    <li role="presentation">
		                    	<a href="create-1.html"><i className="fa fa-plus-circle mr5"></i>New List</a>
		                    </li>
		                    <li className="dropdown">
		                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">
		                        	<img className="img-circle" src='https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p200x200/16427754_10109804047846404_7127573162950585713_n.jpg?oh=63510730903055240afec4489566fc94&amp;oe=5955601B' width="20"/>
		                        	<span className="username">
		                        		{ this.state.user.username }<span className="caret"></span>
		                        	</span>
		                        </a>
		                        <ul className="dropdown-menu" role="menu">
		                            <li role="presentation"><a href="profile.html">My Profile</a></li>
		                            <li role="presentation"><a href="#">Notification Settings</a></li>
		                            <li className="divider" role="presentation"></li>
		                            <li role="presentation"><a href="signup.html">Sign Out</a></li>
		                        </ul>
		                    </li>
		                </ul>
		            </div>
		        </div>       
            </nav>
        );
    }
}