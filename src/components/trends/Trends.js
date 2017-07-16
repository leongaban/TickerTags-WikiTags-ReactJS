import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Chart from '../entity/Chart'

const handleSubmit = () => {

};

const getChartTrendsData = (range) => {
	// console.log('getChartTrendsData range', range);
};

export default function Trends({ body }) {
    // console.log('inside the Trends component, body:', body);
    const subject = body.subject ? body.subject : { id: 0 };
    // console.log('subject', subject);

    return (
        <div className="trends-component">
        	<div className="container">
	            <div className="row">
		        	<Header />
		        	<h2>Trends <small>compare social volumes of up to three terms</small></h2>
		        	<div className="form-inline">
		        		<form onSubmit={ () => handleSubmit() }>
							<label className="sr-only" htmlFor="inlineFormInput">Term 1</label>
							<input id="trends_term_1" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Term 1"/>
							<label className="sr-only" htmlFor="inlineFormInput">Term 2</label>
							<input id="trends_term_2" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Term 2"/>
							<label className="sr-only" htmlFor="inlineFormInput">Term 3</label>
							<input id="trends_term_3" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Term 3"/>
							<button type="submit" className="btn btn-primary" onClick={ () => getChartTrendsData() }>Submit</button>
						</form>
		        	</div>
		        	<div className="btn-group" role="group">
						<button type="button" id="chart_select_90" className="btn btn-default"
								onClick={ () => getChartTrendsData(90) }>90 Days</button>
						<button type="button" id="chart_select_60" className="btn btn-default"
								onClick={ () => getChartTrendsData(60) }>60 Days</button>
						<button type="button" id="chart_select_30" className="btn btn-default active"
								onClick={ () => getChartTrendsData(30) }>30 Days</button>
					</div>
				    <Chart subject={ subject }/>
			    </div>
			</div>
	    </div>
    );
}