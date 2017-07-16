import axios from 'axios'

export function getChartData(ids, element, days=30, end_epoch=null) {
    const url = `http://wikitags.com/wiki/json/chart/entity/${ids}?days=${days}`

    axios.get(url).then(response => {

        const chart_data = response.data;

        // Set chart options
        const options = {
            colors:['#5CB85C' ,'#428BCA' ,'#F0AD4E' ,'#D9534F' ,'#5BC0DE' ],
            isStacked: 'absolute',
            legend: { position: 'none' },
            chartArea:{left:30,right:15,top:0,bottom:40,width:"100%",height:"90%"},
            backgroundColor: {fill: 'none'},
            vAxis: { gridlines: { count: 0 } },
            hAxis: { gridlines: { color: 'transparent' } },
            animation:{
                duration: 1000,
                easing: 'inAndOut',
                startup: true }
        };

        let lookup = [];
        for (var i=0;i<chart_data.incidence.length;i++) {
            if (i==0) {
                lookup.push(chart_data.incidence[i]);
            } else {
                var row = [];
                for (var j=0;j<chart_data.incidence[i].length;j++) {
                    if (j == 0) {
                        row.push(new Date(chart_data.incidence[i][j]*1000));
                    } else {
                        row.push(chart_data.incidence[i][j]);
                    }
                }
                lookup.push(row);
            }
        }
        var data = google.visualization.arrayToDataTable(lookup, false);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(element);

        chart.draw(data, options);

        google.visualization.events.addListener(chart, 'select', function() {
            try {
                var selection = chart.getSelection();
                var timestamp = data.getValue(selection[0].row, 0).getTime()/1000;
                getSocialData(entity_id, 'twitter', '#0084b4', 'fa-twitter', timestamp);
                getCloudData(entity_id, timestamp);

                $('.wordcloud').each(function(i,obj) {
                    getCloudData(entity_id, obj, timestamp);
                });

            } catch(err) {
                console.log(err.message);
            }
        });
    })

}


export function getCloudData(days) {
    const url = `http://wikitags.com/wiki/json/cloud/${this.props.subject.id}`

    return axios.get(url).then(response => {
        const chart_data = response.chart_data;
        let html = '';
        for (var i=0;i<chart_data.length;i++) {
            html += '<span class="cloud' + chart_data[i]['normalized'] + '">' + chart_data[i]['term'] + '</span> ';
        }
        return html
        // $(obj).html(html);
    });
}
//
// function changeChartPeriod(entity_id, days) {
//     $('#chart_select_30').removeClass('active');
//     $('#chart_select_60').removeClass('active');
//     $('#chart_select_90').removeClass('active');
//     $('#chart_select_' + days).addClass('active');
//     var obj = $('.chart_div')[0];
//     getChartData(entity_id, obj, days);
// }

function getSocialData(media) {
    // $('#social_mentions').nextAll().remove();
    const url = `http://wikitags.com/wiki/json/social/${this.props.subject.id}?media_type=${media}`

    axios.get(url).then(response => {
        const chart_data = response.data;

        let html = '';
        if (chart_data.status == 'failure') {
            $('#social_mentions').after('<div class="well"><p class="text-center">To view social mentions please <a href="/wiki/login">Log In</a></p></div>');
        }
        for (let i=0; i<chart_data.tweets.length; i++) {
            const tweet = chart_data.tweets[i];
            if (media_type == 'twitter') {
                html += '<div class="media"><div class="media-left"><a><span class="media-object fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x" style="color: #0084b4"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></div><div class="media-body"><h4><a href="https://twitter.com/' + tweet.username + '" target="_blank"><strong>@' + tweet.username + '</strong></a> • ' + tweet.formatted_date_difference + '</h4><p>' + tweet.highlight + '</p></div></div>';
            } else {
                html += '<div class="media"><div class="media-left"><a><span class="media-object fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x" style="color: ' + color + '"></i><i class="fa ' + style + ' fa-stack-1x fa-inverse"></i></span></a></div><div class="media-body"><h4><a href="' + tweet.url + '" target="_blank"><strong>' + tweet.domain + '</strong></a> • ' + tweet.formatted_date_difference + '</h4><p>' + tweet.highlight + '</p></div></div>';
            }
        }
        $('#social_mentions').after(html);
    })
}
