import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import HomeJumbotron from './HomeJumbotron'
import List from '../lists/List'

export default function HomePage({body}) {
    const { featured, trending, hot } = body;

    return (
        <div>
        	<Header />
	        <HomeJumbotron body={body} />
            <List category="user"/>
            <List category="featured" cards={ featured } />
            <List category="trending" cards={ trending } />
            <List category="hot" cards={ hot } />
            <Footer />
	    </div>
    );
}