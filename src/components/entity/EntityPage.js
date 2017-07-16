import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Header from '../common/Header'
import Footer from '../common/Footer'
import Chart from './Chart'
// import TestChart from './TestChart'

import { and, isNil, isEmpty, type, toPairs } from 'ramda'

const EntityVideo = ({subject}) => {
    const url = `https://www.youtube.com/embed/${ subject.youtube.value }?rel=0&amp;controls=0&amp;showinfo=0`;
    return (<div className="image-wrap">
        <iframe
            title="YouTube video player"
            className="youtube-player"
            type="text/html"
            src={ url }
            height="100%"
            width="100%"
            frameborder="0"
            allowFullScreen/>
    </div>)
};

const descriptors = (value) => type(value) === "Object" && value.type !== 'url';

const Description = ({ subject }) => {
    return (
        <div>
            { Object
                .values(subject)
                .filter(descriptors)
                .map((desc, index) => <div key={index}> <dt> {desc.friendly_key }</dt><dd> {desc.value }</dd></div>)}
        </div>
    )
};

const mapRelationship = (key, values) => <div key={key}><dt> { key }:</dt>{ values.map(value => <dd key={value.url}><a href={ value.url }> {value.name.value }</a></dd>)}</div>

const Relationships = ({ relationships }) => <div>{ toPairs(relationships).map(relationship => mapRelationship(...relationship)) }</div>

const Categories = ({ categories }) => {
    return (<div className="row">
        <div className="col-md-12 col-lg-6 list-group">
            { categories.map( category => {
                return (
                    <a key={category.object.url}
                       href={category.object.url} className="list-group-item btn btn-xs btn-default">
                        { isNil(category.object.rank) ? null : <small className="label label-success">#{ category.object.rank }</small>}
                        { category.object.name.value }</a>
                )
            })}
        </div>
    </div>)
}

const CategoriesSubject = ({ category_subjects }) => {
    return(<div>
            <div className="list-group">
                { category_subjects.slice(0,10).map(subject => {
                    return (
                        <a key={subject.url}
                           href={subject.url} className="list-group-item">
                            { isNil(subject.rank) ? null : <span className="label label-success">#{subject.rank}</span>}
                            { subject.name.value }
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

const Thumbnail = ({ subject }) => {
    const url = !isNil(subject.thumbnail) ? subject.thumbnail.value : `https://wikitags.com/images/bgsm_1024.jpg`;
    return (
        <img src={ url }
             alt="{{ data.subject.name.value }}"
             width="100%"
             className="img-responsive img-thumbnail"/>)
};

const WordCloud = ({ subject }) => {

    const cloudStyle = {width: '100%', minHeight: '200px'};
    const wordCloudStyle = {paddingTop:'60px'};

    return (<div className="col-md-8 col-md-sm-12 col-xs-12">
            <h3>Tag Cloud</h3>
            <div className="well text-center wordcloud" style={cloudStyle} id={subject.id}>
                <div style={wordCloudStyle}>
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted"/>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default class EntityPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {title, relationships, user, description, category_subjects, categories, subject} = this.props.body;
        // console.log('subject', subject);
        return (
            <div>
                <Header />
                <div className="container entity-page">
                    <div className="col-xs-12 col-md-8">
                        <h2>
                            { isNil(subject.rank) ? null : <span className="label label"> { subject.rank }</span> }
                            { subject.name.value }
                            <small> { isEmpty(subject.description) ? null : subject.description.value }
                                { isNil(subject.previous_rank) ? null : <span className="badge">+1</span> }
                            </small>
                        </h2>
                        <p>{ description }</p>
                        <h3> Social Mention Volume
                            <small> for { subject.name.value }</small>
                        </h3>
                            
                        <Chart subject={subject} />

                        <div>
                            <h3> Today's Rankings <small> for {subject.name.value} </small></h3>
                            <Categories categories={categories}/>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <h3>Related Tags</h3>
                                <CategoriesSubject category_subjects={category_subjects} />
                            </div>
                        </div>
                        <WordCloud subject={subject}/>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        { isNil(subject.youtube) ? <Thumbnail subject={subject}/> : <EntityVideo subject={subject}/> }
                        <h3 className="text-center"> { subject.name.value }</h3>
                        <dl className="dl-horizontal text-overflow">
                            { and(!isNil(subject.thumbnail), !isNil(subject.imageAttribution)) && [(<dt key={0}>image credit:</dt>), (<dd key={1}>
                                <a href={subject.imageAttribution.value}>wikimedia</a></dd>)] }
                            <Description subject={subject}/>
                            <Relationships relationships={relationships}/>
                        </dl>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

EntityPage.PropTypes = {
    title: PropTypes.string.isRequired,
    relationships: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    category_subjects: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    subject: PropTypes.object.isRequired
};