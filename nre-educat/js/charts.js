//TEMA
Highcharts.theme = {
    colors: ['#3C763D', '#31708F', '#A94442', '#8A6D3B'],
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


// POR AVALIACAO

// Distribuição das questões por Área da Medicina e grau de dificuldade

$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Distribuição das questões por Área da Medicina e grau de dificuldade'
        },
        xAxis: {
            categories: [
                'Geral',
                'Saúde Coletiva',
                'Pediatria',
                'Urgência e Emergência	',
                'Ética e bioética',
                'Ginecologia e Obstetrícia',
                'Clínica Médica',
                'Saúde Mental',
                'Medicina da Família e Comunidade'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Número de Questões '
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Fácil',
            data: [4, 1, 1, 2, 1, 1, 0, 0, 0]

        }, {
            name: 'Médio',
            data: [4, 4, 2, 2, 0, 2, 3, 1, 1]

        }, {
            name: 'Difícil',
            data: [0, 0, 0, 1, 0, 1, 1, 0, 0]

        }]
    });
});