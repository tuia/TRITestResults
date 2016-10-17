//TEMA
Highcharts.theme = {
    colors: ['#31708F', '#3C763D', '#A94442', '#8A6D3B'],
    chart: {
        marginTop: 60
    },
    title: {
        style: {
            color: '#333333',
            font: '400 18px "Roboto", sans-serif;'
        }
    },
}
Highcharts.setOptions(Highcharts.theme);


    // LINE CHART
    $(function () {

        var options = {
            data: {
                table: document.getElementById('linechart-table'),
            },
            chart: {
                type: 'line',
                marginTop: 80,
            },
            title: {
                text: 'Alternativa Escolhida por grupo de respondentes',
                align: 'center',
            },
            xAxis: {
                title: {
                    text: 'Grupos'
                }
            },
            yAxis: {
                allowDecimals: true,
                title: {
                    text: 'Porcentagem'
                }
            }
        };

        $('#line-chart').highcharts(Highcharts.merge(options));
    });


    // BAR CHART
    $(function () {

        var options = {
            data: {
                table: document.getElementById('barchart-table'),
                endColumn: 1,
            },
            chart: {
                type: 'column',
                marginTop: 80,
            },
            yAxis: {
                allowDecimals: true,
                title: {
                    text: 'Proporção de respondentes'
                }
            },
            xAxis: {
                title: {
                    text: 'Alternativas escolhidas'
                }
            },
            title: {
                text: 'Porcentagem de respondentes que escolheram cada alternativa',
                align: 'center',
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                    },
                    enableMouseTracking: false
                }
            },
        };

        $('#bar-chart').highcharts(Highcharts.merge(options));
    });
