import React from 'react';
import { isNil } from 'ramda'
import NewsBlurb from './NewsBlurb';

const fillNewsBlurb = (news) => {
	return (
		<NewsBlurb
			key={ news.title }
			title={ news.title }
			img={ news.img }
			link={ news.link }
			description={ news.description } />
	)
};

const TodaysNews = ({ news }) => {
	const today = isNil(news) ? null : news.map(fillNewsBlurb);

    return (
        <div className="todays-news mt20">
        	<h3>Today's News <small>about Kim Kardashian</small></h3>
        	{ today }
		</div>
    );
};

export default TodaysNews;