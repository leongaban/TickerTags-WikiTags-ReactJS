import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ModifiersInfoBox from './ModifiersInfoBox'
import TagModifiersBox from './TagModifiersBox'
import { user_tags } from '../../temp_models'

export default function AddModifiers(props) {
    return (
        <div>
	        <Header />
	        <div className="container create-list-page">
	        	<h3>Add Modifiers</h3>
	        	<div className="row">
        			<div className="col-md-4">
						<ModifiersInfoBox />
        			</div>

        			<div className="col-md-8">
						<TagModifiersBox tags={ user_tags }/>
	        		</div>
	        	</div>
			</div>
	        <Footer />
		</div>
    );
}