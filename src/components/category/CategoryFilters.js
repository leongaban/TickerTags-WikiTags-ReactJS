import React from 'react';
import TimeframeFilter from './TimeframeFilter';
import SourcesFilter from './SourcesFilter';

export class CategoryFilter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            timeframe: 'Today',
            sources: ['Tweets', 'Posts', 'Comments']
        };
	}

	componentDidMount() {
	}

    render() {
        const timeframe = this.state.timeframe;
        return (
            <div className="category-filters">
                <div className="well">
                    <div className="row">
                        <div className="col-md-12">
                        	<TimeframeFilter timeframe={ timeframe }/>
							<SourcesFilter sources={ this.state.sources }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryFilter;