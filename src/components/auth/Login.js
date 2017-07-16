import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Login() {
	return (
        <div className="login-page">
            <Header />
        	<div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="well">
                        <h1>Rank anything.</h1>
                        <p className="lead">Create your own list and get a real-time ranking of what people are talking about from over 15 billion messages, tweets, and comments posted every day.</p>
                        <a href="https://www.facebook.com/v2.9/dialog/oauth?client_id=781069738723452&amp;scope=email&amp;redirect_uri=https://wikitags.com/wiki/login" className="btn btn-primary btn-block btn-lg" type="button">Log In with Facebook</a>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            <Footer />
        </div>
    );
}