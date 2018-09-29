//[Dashboard Javascript]

//Project:	Fab Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)

$(function () {
    'use strict';

    // Make the dashboard widgets sortable Using jquery UI
    $('.connectedSortable').sortable({
        placeholder         : 'sort-highlight',
        connectWith         : '.connectedSortable',
        handle              : '.box-header, .nav-tabs',
        forcePlaceholderSize: true,
        zIndex              : 999999
    });
    $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

    // donut chart
    $('.donut').peity('donut');

    // world-map
    setTimeout(function(){
        jQuery('#world-map-markers').vectorMap(
            {
                map: 'world_mill_en',
                backgroundColor: '#fff',
                borderColor: '#818181',
                borderOpacity: 0.25,
                borderWidth: 1,
                color: '#f4f3f0',
                regionStyle : {
                    initial : {
                        fill : '#5F7C96'
                    }
                },
                markerStyle: {
                    initial: {
                        r: 5,
                        'fill': '#fff',
                        'fill-opacity':1,
                        'stroke': '#000',
                        'stroke-width' : 5,
                        'stroke-opacity': 0.4
                    },
                },
                enableZoom: true,
                hoverColor: '#0a89c1',
                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors: ['#b6d6ff', '#005ace'],
                selectedColor: '#c9dfaf',
                selectedRegions: [],
                showTooltip: true,
                onRegionClick: function(element, code, region)
                {
                    var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();

                    alert(message);
                }
            });
        }, 3000)

        // Revenue - CharJS Line
        Chart.defaults.derivedLine = Chart.defaults.line;

        if( $('#chart_cadastros').length > 0 ){
            var ctx2 = document.getElementById("chart_cadastros").getContext("2d");
            var data2 = {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: "#1e88e5",
                        borderColor: "#1e88e5",
                        data: [10, 59, 40, 75, 50, 45]
                    }
                ]
            };

            var hBar = new Chart(ctx2, {
                type:"horizontalBar",
                data:data2,

                options: {
                    tooltips: {
                        mode:"label"
                    },
                    scales: {
                        yAxes: [{
                            stacked: true,
                            gridLines: {
                                color: "rgba(135,135,135,0)",
                            },
                            ticks: {
                                fontFamily: "Poppins",
                                fontColor:"#666666"
                            }
                        }],
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                color: "rgba(135,135,135,0)",
                            },
                            ticks: {
                                fontFamily: "Poppins",
                                fontColor:"#888888"
                            }
                        }],

                    },
                    elements:{
                        point: {
                            hitRadius:40
                        }
                    },
                    animation: {
                        duration:	3000
                    },
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor:'rgba(33,33,33,1)',
                        cornerRadius:0,
                        footerFontFamily:"'Poppins'"
                    }

                }
            });
        };

        if( $('#chart_contratos').length > 0 ){
            var ctx2 = document.getElementById("chart_contratos").getContext("2d");
            var data2 = {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: "#E91E63",
                        borderColor: "#E91E63",
                        data: [10, 59, 40, 75, 50, 45]
                    }
                ]
            };

            var hBar = new Chart(ctx2, {
                type:"horizontalBar",
                data:data2,

                options: {
                    tooltips: {
                        mode:"label"
                    },
                    scales: {
                        yAxes: [{
                            stacked: true,
                            gridLines: {
                                color: "rgba(135,135,135,0)",
                            },
                            ticks: {
                                fontFamily: "Poppins",
                                fontColor:"#666666"
                            }
                        }],
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                color: "rgba(135,135,135,0)",
                            },
                            ticks: {
                                fontFamily: "Poppins",
                                fontColor:"#888888"
                            }
                        }],

                    },
                    elements:{
                        point: {
                            hitRadius:40
                        }
                    },
                    animation: {
                        duration:	3000
                    },
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor:'rgba(33,33,33,1)',
                        cornerRadius:0,
                        footerFontFamily:"'Poppins'"
                    }
                }
            });
        };
    }); // End of use strict

