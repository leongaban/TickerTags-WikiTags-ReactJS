import React from 'react';
import TimeRangeControls from '../common/TimeRangeControls';

export default class TimeframeFilter extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		// console.log('%c TimeframeFilter componentDidMount', 'background: #393939; color: #bada55', this.state);
	}

    render() {
        return (
	        <div className="fl">
	        	<span className="label label-default mr10">Timeframe</span>
                <div className="btn-group mr20 rel top10" role="group">
                	<TimeRangeControls range={ 'Today' } size={ 'large' } align={ 'left' } />
                </div>
            </div>
        );
    }
}