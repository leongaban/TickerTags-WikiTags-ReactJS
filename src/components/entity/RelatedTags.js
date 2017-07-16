import React from 'react';
import { isNil } from 'ramda'
import TimeRangeControls from '../common/TimeRangeControls';
import ListGroupItem from './ListGroupItem';

export default function RelatedTags({ tags }) {
	const related = isNil(tags) ? null : tags.map((tag) => {
		return (
			<ListGroupItem
				key={ tag.id }
				title={ tag.title }
				link={ tag.link }
				rank={ tag.rank }
				movement={ tag.movement }
				direction={ tag.direction } />
		)
	});

    return (
        <div className="related-tags">
			<h3>Related Tags</h3>

			<TimeRangeControls range={ 'Today' } size={ 'small' } align={ 'left' } />

			<p className="mt15 tags-list">
				{ related }
			</p>
		</div>
    );
};

