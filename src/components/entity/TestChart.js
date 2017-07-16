import React from 'react'
import { getChartData, getCloudData } from '../../data/api'

const Login = () => <div className="well"><p className="text-center">To view social mentions please <a href="/wiki/login">Log In</a></p></div>;

export class Social extends React.Component {

    constructor(props) {
        super(props)
        this.onSelection = this.onSelection.bind(this);
    }

    onSelection(media) {

    }

    render() {
        const { media, text, color, icon, onSelect } = this.props;
        const inactiveColor = '#eeeeee';
        const iconClass = `fa ${icon} fa-stack-1x fa-inverse`;
        const iconStyle = {color};
        const socialStyle = {cursor: 'pointer', decoration: 'none'};

        return (
            <a onClick={() => onSelect(media)} style={socialStyle}>
            <span className="fa-stack fa-lg">
                <i id={media} className="fa fa-circle fa-stack-2x" style={iconStyle}/>
                <i className={iconClass}/>
            </span>
                { text }
            </a>
        )
    }
}

export class TestChart extends React.Component {

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

    getSocialData({media, days}) {
        // this.getCloudData(days)
        const element = document.getElementById(this.state.id);
        getChartData(this.props.subject.id, element, days);
        // this.getCloudData().then(console.log)
    }

    componentDidMount() {
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(this.getSocialData({ days: this.state.days}));
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

        return (
            <div>
                <div id={ this.state.id } className="chart_div" style={chartStyle}/>
                <div className="row socialmentions" id={subject.id}>
                    <Social onSelect={this.getSocialData} media="twitter" color="#0084b4" text="twitter" icon="fa-twitter"/>
                    <Social onSelect={this.getSocialData} media="board" color="#3b5998" text="boards" icon="fa-comments"/>
                    <Social onSelect={this.getSocialData} media="video_comment" color="#bb00000" text="video comments" icon="fa-youtube-play"/>
                    <Social onSelect={this.getSocialData} media="blog" color="#f26522" text="blogs" icon="fa-rss"/>
                    <Social onSelect={this.getSocialData} media="review" color="#ffd400" text="reviews" icon="fa-star"/>
                    <Social onSelect={this.getSocialData} media="news" color="#6a737b" text="news" icon="fa-newspaper-o"/>

                    { this.state.authenticated ? <hr id="social_mentions"/> : <Login/> }
                </div>
            </div>
        )
    }
}