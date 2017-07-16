import React from 'react';
import { any, curry, clone, equals, find, map, reject } from 'ramda';

const checkSelected = curry((source, selected) => source === selected);

export class SourcesFilter extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selected: props.sources
		};

		this.selectSource = this.selectSource.bind(this);
	}

	componentDidMount() {
		// console.log('%c SourcesFilter componentDidMount', 'background: #393939; color: #bada55', this.state);
	}

	selectSource(source) {
		const clickedSource = checkSelected(source);
		const isSelected = find(clickedSource, this.state.selected)
		let newSources = clone(this.state.selected);
		isSelected ? newSources = reject(clickedSource, this.state.selected) : newSources.push(source);
		this.setState({ selected: newSources });
	}

    render() {

		const activeIf = (source) => {
			const checked = map(checkSelected(source), this.state.selected)
			const isActive = any(equals(true))(checked);
			return isActive ? 'btn btn-default active' : 'btn btn-default';
		};

        return (
	        <div className="fl">
	        	<span className="label label-default mr10 rel top10">Sources</span>
                <div className="btn-group rel top10" role="group">
                	<button onClick={ ()=> this.selectSource('Tweets') }
                			className={ activeIf('Tweets') } type="button">Tweets</button>
                    <button onClick={ ()=> this.selectSource('Posts') }
                    		className={ activeIf('Posts') } type="button">Posts</button>
                    <button onClick={ ()=> this.selectSource('Comments') }
                    		className={ activeIf('Comments') } type="button">Comments</button>
                    <button onClick={ ()=> this.selectSource('Blogs') }
                    		className={ activeIf('Blogs') } type="button">Blogs</button>
                    <button onClick={ ()=> this.selectSource('News') }
                    		className={ activeIf('News') } type="button">News</button>
                </div>
            </div>
        );
    }
}

export default SourcesFilter;
