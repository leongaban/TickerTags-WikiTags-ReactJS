import React from 'react'
import TagModifierRow from './TagModifierRow'

const createTagRows = (_this) => {
    return _this.state.tags.map((tag) => {
        return (<TagModifierRow key={ tag.tag }
                                tag={ tag.tag }
                                selected={ _this.state.selected }
                                modifiers={ tag.modifiers }
                                callbackParent={ _this.onChildChanged } />);
    });
}

export default class TagModifiersBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            tags: props.tags,
            rows: []
        };
        this.onChildChanged = this.onChildChanged.bind(this);
    }

    componentDidMount() {
        const firstTag = this.state.tags[0].tag;
        this.setState({ selected: firstTag }, () => {
            const tags = createTagRows(this);
            this.setState({ rows: tags });
        });
    }

    onChildChanged(tag) {
        this.setState({ selected: tag }, () => {
            this.setState({ rows: [] }, () => {
                const tags = createTagRows(this);
                this.setState({ rows: tags });
            });
        });
    }

    render() {
        return (
    		<div>
                <div className="well">
                    <h3 className="text-left"><i className="glyphicon glyphicon-cog"></i> Coke vs. Pepsi <small><a href="#">Rename List</a></small></h3>
                    <h5>Category: Brands and Products </h5>
                    <h3 className="text-left mt20">
                        <i className="fa fa-hashtag"></i> Tags

                        <button className="btn btn-danger btn-xs pull-right ml5" type="button">
                            <i className="fa fa-window-close"></i> Cancel
                        </button>

                        <button className="btn btn-success btn-xs pull-right" type="button">
                            <i className="fa fa-share-square"></i> Preview
                        </button>
                    </h3>

                    <ul className="list-group">
                        { this.state.rows }
                        <li className="list-group-item">
                            <span><a className="text-muted" href="#"><i className="fa fa-plus-square"></i> Add/Remove Tag</a></span>
                        </li>
                    </ul>                    
                </div>
                <button className="btn btn-success btn-block btn-lg" type="submit">Save and Continue </button>
                <p className="mt10 text-center font14 line20">When you're happy with your list of tags, click to save and we'll start our search of over 15 billion daily social posts to rank your list by how frequently each are mentioned.</p>
            </div>
        );
    }
}