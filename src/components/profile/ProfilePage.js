import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProfileJumbotron from './ProfileJumbotron'
import List from '../lists/List'
import { hot_cards } from '../../temp_models'

export default class ProfilePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				first_name: 'Jordan',
				last_name: 'Mclain',
				img: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/16427754_10109804047846404_7127573162950585713_n.jpg?oh=a319f133174f625f357210b3a9899249&oe=59BE4BEA'
			}
		};
	}

	componentDidMount() {
		console.log('%c ProfilePage componentDidMount', 'background: #393939; color: #bada55');
	}

    render() {
        return (
	        <div className="profile-page">
		        <Header />
	        	<ProfileJumbotron
	        		first_name={ this.state.user.first_name }
	        		last_name={ this.state.user.last_name }
	        		img={ this.state.user.img }
	        		bio={ 'Optional bio line goes here.' } />
				<List category="user" cards={[]} />
				<List category="user" cards={ hot_cards } />
		        <Footer />
			</div>
        );
    }
}