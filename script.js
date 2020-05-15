var xAxis_categories = ['place1', 'place2', 'place3', 'place4', 'place6', 'place7', 'place8', 'place9', 'place10']
var count_of_visitors = [55, 60, 64, 77, 50, 40, 32, 67, 90]
var number_of_men = [23, 44, 13, 68, 10, 20, 15, 41, 30] 
var number_of_women = [32, 16, 51, 9, 40, 20, 17, 26, 60]
var average_age_of_men = [39, 50, 55, 34, 78, 91, 88, 35, 64]
var average_age_of_women =[43, 10, 75, 39, 88, 21, 68, 95, 14]

var total_men = number_of_men.reduce(function(a, b) {
    return a + b;
  })
var total_women = number_of_women.reduce(function(a, b) {
    return a + b;
})

// тема
Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: null,
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '18px'
        }
    },
   
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#E0E0E3',
        title: {
            style: {
                color: '#E0E0E3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#E0E0E3'
            }
        }
    },
   
    legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        }
    },
 
    labels: {
        style: {
            color: '#707073'
        }
    } 
};
Highcharts.setOptions(Highcharts.theme);


//1 график
Highcharts.chart('number_of_visitors', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Number of visitors'
    },
    xAxis: {
      categories: xAxis_categories,
    },
    yAxis: {
        min: 0,
        title: {
          text: 'Number',
        }
      },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Visitors',
      data: count_of_visitors
    }]
  })


// 2 график
Highcharts.chart('average_age_of_visitors', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Average age of visitors'
    },
    xAxis: {
        categories: xAxis_categories,
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Age',
        align: 'high'
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -20,
      y: 50,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Men',
      data: average_age_of_men
    }, {
      name: 'Women',
      data: average_age_of_women
    }]
  });
  

// 3 график
Highcharts.chart('gender_of_visitors', {
    title: {
      text: 'Gender of visitors'
    },
    xAxis: {
        categories: xAxis_categories,
    },

    yAxis: {
        min: 0,
        title: {
          text: 'Age',
        }
      },

    credits: {
        enabled: false
      },
    labels: {
      items: [{
        html: 'Proportion',
        style: {
          left: '30px',
          top: '0px',
          color: (
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black'
        }
      }]
    },
    series: [{
      type: 'column',
      name: 'Men',
      data: number_of_men
    }, {
      type: 'column',
      name: 'Women',
      data: number_of_women
    },
     {
      type: 'pie',
      name: 'Total',
      data: [{
        name: 'Men',
        y: total_men,
        color: Highcharts.getOptions().colors[0] 
      }, {
        name: 'Women',
        y: total_women,
        color: Highcharts.getOptions().colors[1] 
      }],
      center: [40, 50],
      size: 100,
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }]
  });;

