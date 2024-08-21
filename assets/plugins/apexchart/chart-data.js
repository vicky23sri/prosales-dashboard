'use strict'; $(document).ready(function () {
    function generateData(baseval, count, yrange) {
        var i = 0; var series = []; while (i < count) { var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;; var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15; series.push([x, y, z]); baseval += 86400000; i++; }
        return series;
    }
    if ($('#s-line-area').length > 0) {
        var sLineArea = {
            chart: {
                height: 350,
                type: 'line', // Changed from 'area' to 'line'
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: [2, 2], // Width of the lines
                dashArray: [0, 5] // 0 for solid line, 5 for dotted line
            },
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            colors: ['#333333', '#cccccc'], // Dark gray (almost black) and light gray
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        }
    
        var chart = new ApexCharts(document.querySelector("#s-line-area"), sLineArea);
        chart.render();
    }
    if ($('#s-col').length > 0) {
        var sCol = {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%', // Reduced from 55% to make bars smaller
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 72, 68]
            }],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            },
            colors: [
                '#E6F3FF', '#E6E6E6', '#FFF0E6', '#E6FFE6', 
                '#FFE6F0', '#E6FFF0', '#F0E6FF', '#FFE6E6', 
                '#E6FFFF', '#FFFFE6', '#F0F0E6', '#FFE6F3'
            ],
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.8
                    }
                }
            }
        }
    
        var chart = new ApexCharts(document.querySelector("#s-col"), sCol);
        chart.render();
    }
    if ($('#donut-chart').length > 0) {
        var donutChart = {
            chart: {
                height: 350,
                type: 'donut',
                toolbar: {
                    show: false,
                }
            },
            series: [44, 55, 41, 17],
            labels: ['Canada', 'USA', 'Mexico', 'Other'],
            colors: ['#A1E3CB', '#A1E3CB', '#B1E3FF', 'rgba(0, 0, 0, 0.8)'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
                labels: {
                    colors: '#000000'  
                }
            },
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.8
                    }
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true
                            }
                        }
                    }
                }
            }
        }
        
        var donut = new ApexCharts(document.querySelector("#donut-chart"), donutChart);
        donut.render();
    }
});