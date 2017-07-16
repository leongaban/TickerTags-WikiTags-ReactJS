import React from 'react';
import Chip from '../common/Chip';
import { capitalize } from '../../util/utility';
import { head, isNil } from 'ramda'

const HeroBanner = ({ type, category }) => {
    if (!type || !category) return null;
    const leader = head(category)
    const hasBackground = leader.subjects.length > 0 && !isNil(leader.subjects[0].subject.thumbnail)
    const backgroundURL = hasBackground ? leader.subjects[0].subject.thumbnail.value : `https://wikitags.com/images/bgwikitags.jpg`
    const heroStyle = {
        backgroundColor:'#0e0e0e',
            background: `linear-gradient(rgba(50,50,50,.1), rgba(0,0,0,.8)), url(${backgroundURL})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 30%',
            color: 'rgb(255,255,255)',
            paddingTop: '40px',
            paddingRight:'30px',
            paddingBottom: '40px',
            paddingLeft: '30px',
            margin: '10px'
    }
    const urlStyle = { color: 'white' }
	return (
		<div className="jumbotron hero-banner" style={heroStyle}>
	    	<Chip icon={ type } name={ type }/>
	        <h6 className="mt15">THE MOST TALKED ABOUT</h6>
          <h2><a style={urlStyle} href={leader.url}>{ capitalize(leader.name.value) }</a></h2>
		</div>
	)
}

export default HeroBanner;
