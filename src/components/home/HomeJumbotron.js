import React from 'react';
import RankAnything from './RankAnything';
import HeroBanner from './HeroBanner';

export function HomeJumbotron ({ body }) {

    const { featured, trending, hot } = body;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-md-offset-0">
                    <RankAnything/>
                </div>
                <div className="col-md-7 col-md-offset-0">
                    <HeroBanner type="featured" category={featured}/>
                    <HeroBanner type="trending" category={trending}/>
                    <HeroBanner type="hot" category={hot}/>
                </div>
            </div>
        </div>
    );
}

export default HomeJumbotron;