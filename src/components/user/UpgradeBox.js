import React from 'react';

export default function UpgradeBox(props) {
    return (
		<div className="alert alert-success" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <h3 className="text-center">Upgrade to Unlimited</h3>
            <button className="btn btn-success btn-block btn-sm mb10" type="button">
                <i className="glyphicon glyphicon-star"></i> Upgrade Now
            </button>
            <p>Create as many lists as you want for only $7.99 per month.</p>
        </div>
    );
}