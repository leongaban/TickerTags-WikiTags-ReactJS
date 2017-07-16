import React from 'react'

const ProfileJumbotron = (props) => {
    return (
    	<div className="container">
			<div className="jumbotron"><img className="img-circle center-block" src={ props.img }/>
	            <h2 className="text-center">{ props.first_name }{ props.last_name }</h2>
	            <p className="text-center">{ props.bio }</p>
	            <button className="btn btn-link btn-xs center-block" type="button">Edit Profile</button>
	        </div>
        </div>
    );
}

export default ProfileJumbotron;