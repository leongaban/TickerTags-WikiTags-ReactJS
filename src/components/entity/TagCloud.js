import React from 'react'
import { isNil } from 'ramda'
import TimeRangeControls from '../common/TimeRangeControls'

const makeTag = (tag) => <span key={ tag.term } className={`fl cloud${ tag.size }`}>{ tag.term }</span>;

const TagCloud = ({ cloud }) => {

	const tags = isNil(cloud) ? null : cloud.map(makeTag);

    return (
        <div className="tag-cloud">
			<h3 className="mbot10">Tag Cloud</h3>

			<TimeRangeControls range={ 'Today' } size={ 'small' } align={ 'left' } />
			
			<section>
				<div className="well text-center" id="wordcloud">
					{ tags }
				</div>
			</section>
		</div>
    );
};

export default TagCloud;