import React from 'react'

export default class TimeRangeControls extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            range: props.range,
            size: props.size,
            align: props.align
        };
        this.changeRange = this.changeRange.bind(this);
        this.activeIf = this.activeIf.bind(this);
	}

	componentDidMount() {
	}

    changeRange(range) {
        // console.log('%c changeRange', 'background: #393939; color: #bada55', range);
        this.setState({ range });
    }

    activeIf(range) {
        let btn = 'btn btn-default';
        btn = this.state.size === 'large' ? btn : `${btn} btn-xs`;
        return this.state.range === range ? `${btn} active` : btn;
    }

    render() {
        const setAlign = (align) => align === 'center' ? 'text-center mb20' : 'mb20';

        return (
            <div className={ setAlign(this.state.align) }>
                <div className="btn-group" role="group">
                    <button onClick={() => this.changeRange('Today')} type="button" className={ this.activeIf('Today') }>Today</button>
                    <button onClick={() => this.changeRange('Week')} type="button" className={ this.activeIf('Week') }>Week</button>
                    <button onClick={() => this.changeRange('Month')} type="button" className={ this.activeIf('Month') }>Month</button>
                    <button onClick={() => this.changeRange('Year')} type="button" className={ this.activeIf('Year') }>Year</button>
                    <button onClick={() => this.changeRange('Max')} type="button" className={ this.activeIf('Max') }>Max</button>        
                </div>
            </div>
        );
    }
}