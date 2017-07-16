import React from 'react'

export default function NameYourListBox(props) {
    return (
		<div className="well">
            <h3 className="text-left"><i className="glyphicon glyphicon-cog"></i> Name Your List</h3>
            <input type="text" required="" className="input-list-name" placeholder="Rank the most talked about..."/>
            <select className="input-lg">
                <option defaultValue="">Select Category</option>
                <option value="12">Entertainment</option>
                <option value="13">Politics</option>
                <option value="14">Sports</option>
            </select>
            <div className="checkbox">
                <label>
                    <input type="checkbox"/><i className="fa fa-lock"></i>Make my list private
                </label>
            </div>
            <p className="mt15">
                <a href="create-2.html">
                    <button className="btn btn-success btn-lg" type="button">Next</button>
                    <small className="ml10 font12">
                        Your account will be charged a one-time $1.99 fee to create this list
                    </small>
                </a>
            </p>
        </div>
    );
}