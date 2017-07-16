import React from 'react';

export default function AddTagsBox(props) {
    return (
		<div className="well">
            <h3 className="text-left">
                <i className="glyphicon glyphicon-cog mr5"></i>{ props.title }
                <small className="ml10"><a href="create-1.html">Rename List</a></small>
            </h3>
            <h5 className="mb20 font14">Category: { props.category }</h5>
            <h3 className="text-left"><i className="fa fa-hashtag"></i> Add Tags</h3>
            <input type="text" required="" className="input-lg" placeholder="Tag #1" />
            <button className="btn btn-success btn-lg" type="submit">Add</button>
            <a href="create-3.html" className="ml10">I'm Done </a>
        </div>
    );
}