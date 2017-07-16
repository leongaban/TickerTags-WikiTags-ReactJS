import React from 'react'
import IncludeExcludeTags from './IncludeExcludeTags'

export default class TagModifierRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
            tag: props.tag
        };
        this.selectTagRow = this.selectTagRow.bind(this);
    }

    selectTagRow(tag) {
        this.setState({ selected: tag }); // we update our state
        this.props.callbackParent(tag); // we notify our parent
    }

    render() {
        const tag = this.state.tag;
        const selected = this.state.selected;
        const isSelected = tag === selected ? <IncludeExcludeTags /> : null;
        const classNames = 'list-group-item cursor';
        const highlightIf = (s) => tag === s ? `${classNames} highlight-tags` : classNames;

        return (
            <div className="tag-row">
                <li className="list-group-item highlight-tags cursor" className={ highlightIf(selected) } onClick={()=> this.selectTagRow(tag)}>
                    <span className="mb5 w100"><strong>{ tag }</strong></span>
                </li>
                { isSelected }
            </div>
        );
    }
}