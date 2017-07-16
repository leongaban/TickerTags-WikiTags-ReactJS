import React from 'react';

export default function ListInfoBox(props) {
    return (
		<div className="alert alert-info" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            	<span aria-hidden="true">×</span>
            </button>
            <strong>What is your list about?</strong><br/>
            <p>Be descriptive and select a category to help others find and share your list.</p>
            <p>Want to keep your list private? Just check the 'Make my list private' box.</p>
        </div>
    );
}