import React from "react"
import { getChartData } from '../../data/api'
import { isNil } from "ramda"
import Header from "../common/Header"
import CategoryBanner from "./CategoryBanner"
import CategoryFilters from "./CategoryFilters"
import Footer from "../common/Footer"

const Ranking = ({subject}) => {
    if (subject.previous_rank) {
        const delta = subject.previous_rank - subject.rank;
        switch (delta) {
            case delta < 0:
                return (
                    <span><span className="glyphicon glyphicon-chevron-down"/>{-1 * delta}</span>
                );
                break;
            case delta > 0:
                return <span><span className="glyphicon glyphicon-chevron-up"/>{delta}</span>
                break;
            default:
                return <span><span className="glyphicon glyphicon-chevron-up"/>even</span>
        }
    } else {
        return <span><span className="glyphicon glyphicon-chevron-right"/> new</span>
    }
};
const Subject = ({subject}) => {

    const imageStyle = {
        maxWidth: "100%",
        maxHeight: "100%"
    };

    const chartStyle = {
        width: "100%",
        height: "125px"
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-1">
                {!isNil(subject.rank) &&
                    <h2 className="text-center">
                        <span className="label label-success mright5">
                            {subject.rank}
                        </span>
                    </h2>
                }
                </div>
                <div className="col-md-3">
                    <img className="img-rounded center-block"
                         style={imageStyle}
                         src={
                            !isNil(subject.thumbnail)
                                ? subject.thumbnail.value
                                : `https://wikitags.com/images/bgsm_1024.jpg`
                         }
                         alt={subject.name.value} />
                </div>
                <div className="col-md-3">
                    <h3 className="text-center">
                        <a href={subject.url}>{subject.name.value}</a>
                    </h3>
                    <h5 className="text-center">{subject.description.value}</h5>
                </div>
                <div className="col-md-1">
                    <p className="text-center">
                        <Ranking subject={subject}/>
                    </p>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="text-center">
                        <div id={subject.id} className="chart-div" style={chartStyle} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default class CategoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            favorite: false,
            ids: this.props.body.entity_ids.slice(0, 5).join(',')
        };

        this.changeChartPeriod = this.changeChartPeriod.bind(this);
    }

    changeChartPeriod(days) {
        const element = document.getElementById(this.state.id);
        getChartData(this.state.ids, element, days);
    }

    render() {
        const { body } = this.props;
        const title = body.category.name.value;
        const favorite = this.state.favorite;

        const entities = body.subjects.map(subject => (
            <Subject key={subject.id} subject={subject}/>
        ));

        const chartStyle = { width: '100%', height: '300px' };

        return (
            <div>
                <Header />
                <div className="container category-page">
                    <CategoryBanner title={title} favorite={favorite}/>
                    <CategoryFilters />
                    <div className="row col-md-12 social-mention-vol">
                        <h3>Social Mention Volume<small> {title}</small></h3>
                        <div className="btn-group" role="group">
                            <button id="chart_select_90" className="btn btn-default"
                                    onClick={(e) => this.changeChartPeriod(90)}>90 Days</button>
                            <button id="chart_select_60" className="btn btn-default"
                                    onClick={(e) => this.changeChartPeriod(60)}>60 Days</button>
                            <button id="chart_select_30" className="btn btn-default active"
                                    onClick={(e) => this.changeChartPeriod(30)}>30 Days</button>
                        </div>
                        <div id={this.state.ids} className="chart_div" style={chartStyle}/>
                    </div>
                    {entities}
                </div>
                <Footer />
            </div>
        );
    }
}