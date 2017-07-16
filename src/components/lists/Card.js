import React from 'react'
import { isNil } from 'ramda'

const CardSubjects = ({card}) => {
    const entities = isNil(card.subjects) || card.subjects.length < 1 ? null : card.subjects.map((entity, index) => {
        return (
            <li key={ index } className="list-group-item">
                <span className="label label-success mr5 mln5">{ isNil(entity.rank) ? "-" : entity.rank }</span>
                <a href={`/wiki/entity${entity.subject.url}`}><span>{ entity.subject.name.value }</span></a>
            </li>
        )
    });

    return (
        <div>
            <ul className="list-group mbot10">
                { entities }
            </ul>
        </div>
    )
}

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
        };
        this.setFavorite = this.setFavorite.bind(this);
        this.shareCategory = this.shareCategory.bind(this);
    }

    setFavorite() {
        this.setState({favorite: !this.state.favorite})
    }

    shareCategory() {
    }

    render() {
        const card = this.props.card;
        const title = card.name.value;
        const hasBackground = card.subjects.length > 0 && !isNil(card.subjects[0].subject.thumbnail)
        const backgroundURL = hasBackground ? card.subjects[0].subject.thumbnail.value : `https://wikitags.com/images/bgwikitags.jpg`
        const cardStyle = {
            backgroundColor: '#000000',
            background: `linear-gradient(rgba(50,50,50,.1), rgba(0,0,0,.8)), url(${backgroundURL})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 30%',
            paddingTop: '40px',
            paddingRight: '30px',
            paddingBottom: '40px',
            paddingLeft: '30px',
            margin: '10px',
            maxHeight: '165px'
        }

        return (
            <li key={ title }>
                <div className="col-md-3 entity-card">
                    <a href={ card.url } className="no-hover">
                        <div style={cardStyle} className="jumbotron card-title-pic">
                            <h6>MOST TALKED ABOUT</h6>
                            <h3>{ title }</h3>
                        </div>
                    </a>
                    <CardSubjects card={card}/>
                    <div>
                        <div className="mt5 ml10 link"><a href={ card.url }>View List</a></div>
                        <div className="btn-group btn-group-xs pull-right" role="group">
                            <button className="btn btn-default" type="button" onClick={() => this.setFavorite(title)}>
                                <i className={ this.state.favorite ? 'fa fa-heart' : 'fa fa-heart-o' }/>
                            </button>
                            <button className="btn btn-primary" type="button" onClick={ this.shareCategory }>
                                <i className="fa fa-share-square mr5"/>Share
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}