import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import AddTagsInfoBox from './AddTagsInfoBox'
import AddTagsBox from './AddTagsBox'

// temp model data
const add_tags = { list_name: 'Coke vs. Pepsi', category: 'Brands and Products' };

export default function AddTags(props) {
    return (
        <div>
	        <Header />
	        <div className="container create-list-page">
	        	<h3>Add Tags!</h3>
	        	<div className="row">
        			<div className="col-md-4">
						<AddTagsInfoBox />
        			</div>

        			<div className="col-md-8">
						<AddTagsBox title={ add_tags.list_name } category={ add_tags.category } />
        			</div>
        		</div>
	        </div>
	        <Footer />
		</div>
    );
}