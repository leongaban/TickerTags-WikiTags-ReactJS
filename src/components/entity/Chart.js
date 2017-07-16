import React from 'react'
import { type } from 'ramda'
import { getChartData, getCloudData } from '../../data/api'

const Login = () => <div className="well"><p className="text-center mt10">To view social mentions please <a href="/wiki/login">Log In</a></p></div>
const socialColors = {
    twitter: '#0084b4',
    boards: '#3b5998',
    video_comment: '#bb0000',
    blogs: '#f26522',
    reviews: '#ffd400',
    news: '#6a737b'
}
const inactiveColor = '#eeeeee';
const setSocialColor = (btn, state) => {
    if (btn == state) return socialColors[state];
    return inactiveColor;
};

class Social extends React.Component {

    constructor(props) {
        super(props)
        this.onSelection = this.onSelection.bind(this);
    }

    onSelection(media) {
        
    }

    render() {
        const { media, text, color, icon, onSelect } = this.props;
        const iconClass = `fa ${icon} fa-stack-1x fa-inverse`;
        const iconStyle = { color };
        const socialStyle = { cursor: 'pointer', decoration: 'none' };

        return (
            <a className="mr10" onClick={() => onSelect(media)} style={socialStyle}>
                <span className="fa-stack fa-lg mr5">
                    <i id={media} className="fa fa-circle fa-stack-2x" style={iconStyle}/>
                    <i className={iconClass}/>
                </span>
                { text }
            </a>
        )
    }
}

export default class Chart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            media: 'twitter',
            days: 30,
            id: `chart-${this.props.subject.id}`,
            authenticated: false
        }

        this.getSocialData = this.getSocialData.bind(this);
        this.getCloudData = getCloudData.bind(this);
    }

    // getSocialData({media, days}) {
    getSocialData(state) {
        // this.getCloudData(days)
        // this.getCloudData().then(console.log)
        const element = document.getElementById(this.state.id);
        getChartData(this.props.subject.id, element, state.days);

        if (type(state) === 'String') {
            this.setState({
                media: state
            });
        }
    }

    componentDidMount() {
        // Load the Visualization API and the corechart package.
        // console.log('Chart mounted');
        google.charts.load('current', { packages: ['corechart', 'line'] });
        // google.charts.setOnLoadCallback(this.getSocialData({ days: this.state.days }));
        google.charts.setOnLoadCallback(this.getSocialData(this.state));
    }

    render() {
        const chartStyle = {
            width: '100%',
            height: '300px',
            backgroundImage: 'url(http://distribution.wikitags.com/imgs/wikitags-watermark-10.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '40%'
        };

        const { subject } = this.props;
        const media = this.state.media;

        return (
            <div>
                <div id={ this.state.id } className="chart_div" style={ chartStyle }/>
                <div className="row socialmentions" id={ subject.id }>
                    <div className="mb15">
                        <Social onSelect={ this.getSocialData }
                                color={ setSocialColor('twitter', media) }
                                media="twitter" text="twitter" icon="fa-twitter"/>

                        <Social onSelect={ this.getSocialData }
                                color={ setSocialColor('board', media) }
                                media="board" text="boards" icon="fa-comments"/>

                        <Social onSelect={ this.getSocialData }
                                color={ setSocialColor('video_comment', media) }
                                media="video_comment" text="video comments" icon="fa-youtube-play"/>

                        <Social onSelect={ this.getSocialData }
                                color={ setSocialColor('blog', media) }
                                media="blog" text="blogs" icon="fa-rss"/>

                        <Social onSelect={ this.getSocialData }
                                color={ setSocialColor('review', media) }
                                media="review" text="reviews" icon="fa-star"/>

                        <Social onSelect={ this.getSocialData }
                                color={ setSocialColor('news', media) }
                                media="news" text="news" icon="fa-newspaper-o"/>
                    </div>
                    { this.state.authenticated ? <hr id="social_mentions"/> : <Login/> }
                </div>
            </div>
        )
    }
}