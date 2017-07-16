import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ListInfoBox from './ListInfoBox'
// import UpgradeBox from './UpgradeBox' // hidden for now to match live
import NameYourListBox from './NameYourListBox'

export default function CreateList(props) {
    return (
        <div>
	        <Header />
	        <div className="container create-list-page">
	        	<h3>Create a New List</h3>
	        	<div className="row">
        			<div className="col-md-4">
						<ListInfoBox />
		                {/*<UpgradeBox />*/}
        			</div>

        			<div className="col-md-8">
						<NameYourListBox />
        			</div>
        		</div>
	        </div>
	        <Footer />
		</div>
    );
}