import React from 'react';

export default function ModifiersInfoBox(props) {
    return (
		<div className="alert alert-info" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <span><strong>Click to preview</strong> social mentions for each tag to make sure the results are what you're looking for. Keep in mind, some tags might be too generic to find relevant results. Others might be too specific and not have any results. <strong>Click Edit to add modifiers</strong> and fine tune your search.</span>
            <ul className="modifier-details">
                <li><strong>Also Include</strong> will add additional terms to the search. For example, if your tag is "Coke" you might also want to include "Coca Cola" and we will find mentions that include either Coke or Coca Cola.</li>
                <li><strong>Must Include</strong> requires the additional terms to be present for the search to match. For example, if your tag is "Prince" and you're interested in the artist, you might want to add "artist or music" in this box.</li>
                <li><strong>Exclude</strong> will limit the search to results that do not have the excluded term. For example, if your tag is "Apple" and you mean the fruit and not the company, you might want to exclude "computer or phone or mac
                    or watch or app or cloud or tv"</li>
            </ul>
            <p>Building a tag might take some trial and error.</p>
            <ul></ul>
        </div>
    );
}