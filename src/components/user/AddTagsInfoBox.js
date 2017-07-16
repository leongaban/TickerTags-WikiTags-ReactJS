import React from 'react';

export default function AddTagsInfoBox(props) {
    return (
		<div className="alert alert-info" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <span>
                <strong>Add as many tags as you want! </strong><br/>
                Tags are essentially the words that you want to compare and rank.
            </span>
            <ul>
                <li>If your tag already exists in WikiTags, we'll suggest it as you type.</li>
            </ul>
        </div>
    );
}