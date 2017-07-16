import React from 'react'
import PropTypes from 'prop-types'
import { isNil } from 'ramda'

const Theme = ({ category, user }) => {
    const style = {
        paddingBottom: `15px`
    }
    switch (category.index){
        case 'featured':
            return <div className="col-md-12" style={style}><h3><span className="label label-warning"><i className="fa fa-star"/>Featured Lists</span></h3></div>
            break;
        case 'hot':
            return <div className="col-md-12" style={style}><h3><span className="label label-danger"><i className="fa fa-fire"/>Hot Lists</span></h3></div>
            break;
        default:
            // trending is default view
            return <div className="col-md-12" style={style}><h3><span className="label label-primary"><i className="fa fa-line-chart"/>Trending Lists</span></h3></div>
            break;
    }

}

const url = (index) => `/wiki/edit/${index}`

const Chunk = ({ category }) => {
    const url = category.subjects && category.subjects[0].subject.thumbnail ? category.subjects[0].subject.thumbnail.value : `https://wikitags.com/images/bgwikitags.jpg`
    const chunkStyle = {
        minHeight: '165px',
        backgroundColor: '#000000',
        color: 'rgb(255, 255, 255)',
        background: `linear-gradient(rgba(50,50,50,.1), rgba(0,0,0,.8)), url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: `center 30%`,
        paddingTop: `40px`,
        paddingRight: '30px',
        paddingBottom: '40px',
        paddingLeft: '30px',
        margin: '0px',
        maxHeight: '165px'
    }
    const titleStyle = {
        marginBottom: '-20px'
    }
    const categoriesUser = {
        marginBottom: '20px',
        marginTop: '-15px'
    }
    const editStyle = {
        cursor: 'pointer',
        color: '#d9534f'
    }
    return (
        <div className="col-md-3">
            <div className="jumbotron" style={chunkStyle} alt={category.name.value}>
                <h6 style={titleStyle}> MOST TALKED ABOUT</h6>
                <h3><a href={category.url} style={{color:'#ffffff'}}>{ category.name.value }</a></h3>
            </div>
            <div className="list-group">
                { category.subjects.slice(0,3).map(subject => <li className="list-group-item"><span className="label label-success mright5">{ subject.rank}</span><span><a href={subject.subject.url}>{ subject.subject.name.value } </a></span></li>)}
            </div>
            <div style={categoriesUser}>
                { !isNil(user) && category.wiki_user && category.wiki_user.id === user.id ? <a href={url(category.index)}>Edit List</a> | <a>Remove</a> : <a href={ category.url }>View List</a> }
                <div className="btn-group btn-group-xs pull right" role="group">
                </div>
            </div>
        </div>
    )
}
const ListPage = ({ body }) => {
    const {category, categories} = body;

    return (
        <div className="container">
            <h1>{ category.name.value }</h1>
            <p className="lead">The following is a list of <mark>{ category.name.value }</mark> ranked by what people are talking about today.</p>
            <div className="container">
                <div className="row">
                    <Theme category={category}/>
                    { categories.map(chunk => <Chunk category={chunk}/>)}
                </div>
            </div>
        </div>
    )
}

ListPage.PropTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
        .isRequired,
    index: PropTypes.string.isRequired
}
export default ListPage
