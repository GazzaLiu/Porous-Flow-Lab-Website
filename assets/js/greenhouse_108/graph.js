var chart_VWC = AmCharts.makeChart("chart_VWC", {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled": true,
    "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
    "valueAxes": [{
        "title": "Volumetric Water Content (m3/m3)",
        "maximum": 0.50,
        "minimum": 0.00,
        "position": "left"
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "graph_VWC1",
        "valueField": "VWC(1)",
        "title": "VWC(1)",
        "bullet": "round",
    }, {
        "id": "graph_VWC2",
        "valueField": "VWC(2)",
        "title": "VWC(2)",
        "bullet": "round",
    }, {
        "id": "graph_VWC3",
        "valueField": "VWC(3)",
        "title": "VWC(3)",
        "bullet": "round",
    }, {
        "id": "graph_VWC4",
        "valueField": "VWC(4)",
        "title": "VWC(4)",
        "bullet": "round",
    }, {
        "id": "graph_VWC5",
        "valueField": "VWC(5)",
        "title": "VWC(5)",
        "bullet": "round",
    }, {
        "id": "graph_VWC6",
        "valueField": "VWC(6)",
        "title": "VWC(6)",
        "bullet": "round",
    }, {
        "id": "graph_VWC7",
        "valueField": "VWC(7)",
        "title": "VWC(7)",
        "bullet": "round",
    }, {
        "id": "graph_VWC8",
        "valueField": "VWC(8)",
        "title": "VWC(8)",
        "bullet": "round",
    }, {
        "id": "graph_VWC9",
        "valueField": "VWC(9)",
        "title": "VWC(9)",
        "bullet": "round",
    }, {
        "id": "graph_VWC10",
        "valueField": "VWC(10)",
        "title": "VWC(10)",
        "bullet": "round",
    }, {
        "id": "graph_VWC11",
        "valueField": "VWC(11)",
        "title": "VWC(11)",
        "bullet": "round",
    }, {
        "id": "graph_VWC12",
        "valueField": "VWC(12)",
        "title": "VWC(12)",
        "bullet": "round",
    }],
    "chartScrollbar": {
        "enabled": true,
        "oppositeAxis": false,
        "offset": 60,
        "scrollbarHeight": 40,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "enabled": true,
        "categoryBalloonDateFormat": "JJ:NN"
    },
    "categoryAxis": {
        "title": "Timestamp (hourly)",
        "minPeriod": "hh",
        "parseDates": true
    },
    "startDuration": 0.1,
    "legend": {
        "enabled": true,
        "useGraphSettings": true
    },
    "categoryField": "Timestamp",
    "dataLoader": {
        "url": "datalog/greenhouse_108/graph.csv",
        "format": "csv",
        "delimiter": ",",
        "useColumnNames": true,
        "skip": 1
    }
});
var chart_EC = AmCharts.makeChart("chart_EC", {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled": true,
    "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
    "valueAxes": [{
        "title": "Electrical Conductivity (dS/m)",
        "maximum": 1.00,
        "minimum": 0.00,
        "position": "left"
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "graph_EC",
        "valueField": "EC(1)",
        "title": "EC(1)",
        "bullet": "round",
    }, {
        "id": "graph_EC",
        "valueField": "EC(2)",
        "title": "EC(2)",
        "bullet": "round",
    }, {
        "id": "graph_EC3",
        "valueField": "EC(3)",
        "title": "EC(3)",
        "bullet": "round",
    }, {
        "id": "graph_EC4",
        "valueField": "EC(4)",
        "title": "EC(4)",
        "bullet": "round",
    }, {
        "id": "graph_EC5",
        "valueField": "EC(5)",
        "title": "EC(5)",
        "bullet": "round",
    }, {
        "id": "graph_EC6",
        "valueField": "EC(6)",
        "title": "EC(6)",
        "bullet": "round",
    }, {
        "id": "graph_EC7",
        "valueField": "EC(7)",
        "title": "EC(7)",
        "bullet": "round",
    }, {
        "id": "graph_EC8",
        "valueField": "EC(8)",
        "title": "EC(8)",
        "bullet": "round",
    }, {
        "id": "graph_EC9",
        "valueField": "EC(9)",
        "title": "EC(9)",
        "bullet": "round",
    }, {
        "id": "graph_EC10",
        "valueField": "EC(10)",
        "title": "EC(10)",
        "bullet": "round",
    }, {
        "id": "graph_EC11",
        "valueField": "EC(11)",
        "title": "EC(11)",
        "bullet": "round",
    }, {
        "id": "graph_EC12",
        "valueField": "EC(12)",
        "title": "EC(12)",
        "bullet": "round",
    }],
    "chartScrollbar": {
        "enabled": true,
        "oppositeAxis": false,
        "offset": 60,
        "scrollbarHeight": 40,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "enabled": true,
        "categoryBalloonDateFormat": "JJ:NN"
    },
    "categoryAxis": {
        "title": "Timestamp (hourly)",
        "minPeriod": "hh",
        "parseDates": true
    },
    "startDuration": 0.1,
    "legend": {
        "enabled": true,
        "useGraphSettings": true
    },
    "categoryField": "Timestamp",
    "dataLoader": {
        "url": "datalog/greenhouse_108/graph.csv",
        "format": "csv",
        "delimiter": ",",
        "useColumnNames": true,
        "skip": 1
    }
});
var chart_Temp = AmCharts.makeChart("chart_Temp", {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled": true,
    "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
    "valueAxes": [{
        "title": "Temperature (°C)",
        "maximum": 35,
        "minimum": 15,
        "position": "left"
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "graph_Temp1",
        "valueField": "Temp(1)",
        "title": "Temp(1)",
        "bullet": "round",
    }, {
        "id": "graph_Temp2",
        "valueField": "Temp(2)",
        "title": "Temp(2)",
        "bullet": "round",
    }, {
        "id": "graph_Temp3",
        "valueField": "Temp(3)",
        "title": "Temp(3)",
        "bullet": "round",
    }, {
        "id": "graph_Temp4",
        "valueField": "Temp(4)",
        "title": "Temp(4)",
        "bullet": "round",
    }, {
        "id": "graph_Temp5",
        "valueField": "Temp(5)",
        "title": "Temp(5)",
        "bullet": "round",
    }, {
        "id": "graph_Temp6",
        "valueField": "Temp(6)",
        "title": "Temp(6)",
        "bullet": "round",
    }, {
        "id": "graph_Temp7",
        "valueField": "Temp(7)",
        "title": "Temp(7)",
        "bullet": "round",
    }, {
        "id": "graph_Temp8",
        "valueField": "Temp(8)",
        "title": "Temp(8)",
        "bullet": "round",
    }, {
        "id": "graph_Temp9",
        "valueField": "Temp(9)",
        "title": "Temp(9)",
        "bullet": "round",
    }, {
        "id": "graph_Temp10",
        "valueField": "Temp(10)",
        "title": "Temp(10)",
        "bullet": "round",
    }, {
        "id": "graph_Temp11",
        "valueField": "Temp(11)",
        "title": "Temp(11)",
        "bullet": "round",
    }, {
        "id": "graph_Temp12",
        "valueField": "Temp(12)",
        "title": "Temp(12)",
        "bullet": "round",
    }],
    "chartScrollbar": {
        "enabled": true,
        "oppositeAxis": false,
        "offset": 60,
        "scrollbarHeight": 40,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "enabled": true,
        "categoryBalloonDateFormat": "JJ:NN"
    },
    "categoryAxis": {
        "title": "Timestamp (hourly)",
        "minPeriod": "hh",
        "parseDates": true
    },
    "startDuration": 0.1,
    "legend": {
        "enabled": true,
        "useGraphSettings": true
    },
    "categoryField": "Timestamp",
    "dataLoader": {
        "url": "datalog/greenhouse_108/graph.csv",
        "format": "csv",
        "delimiter": ",",
        "useColumnNames": true,
        "skip": 1
    }
});
chart.addListener("rendered", zoomChart);
zoomChart();

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}