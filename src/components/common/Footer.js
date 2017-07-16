import React from 'react'

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="container footer">
    		&copy; { year } <strong>WikiTags</strong>, a service of <a href="https://tickertags.com" target="_blank">TickerTags</a>. Powered by <a href="https://www.wikidata.org" target="_blank">WikiData</a>.
		</div>
    );
}

export default Footer;