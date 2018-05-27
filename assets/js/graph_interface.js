var chart_VWC = AmCharts.makeChart("chart_108_VWC", {
"type" : "serial",
"theme": "light",
"marginRight": 5,
"marginLeft": 5,
"mouseWheelZoomEnabled":false,
"dataDateFormat" : "YYYY-MM-DD HH:NN:SS",
"valueAxes": [{
	"title": "VWC (m3/m3)",
	"position": "left"
}],
"balloon": {
	"borderThickness": 1,
	"shadowAlpha": 0
},
"graphs" : [{
	"id" : "graph_VWC1",
	"valueField" : "108_VWC_o",
	"title" : "Observed",
	"bullet" : "round",
},{
	"id" : "graph_VWC2",
	"valueField" : "108_VWC_p",
	"title" : "Predicted",
	"bullet" : "round",
}],
"chartScrollbar": {
	"enabled": false,
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
	"autoGridCount":true,
	"color":"#AAAAAA"
},
"chartCursor": {
	"enabled": true,
	"categoryBalloonDateFormat": "JJ"
},
"categoryAxis" : {
	"title": "Timestamp (hourly)",
	"minPeriod": "hh",
	"parseDates": true
},
"startDuration" : 0.1,
"legend": {
	"enabled": true,
	"useGraphSettings": true,
	"position": "bottom"
},
"categoryField" : "Timestamp",
"dataLoader" : {
	"url" : "datalog/interface/graph.csv",
	"format" : "csv",
	"delimiter" : ",",
	"useColumnNames" : true,
	"skip" : 1
}
});
var chart_Temp = AmCharts.makeChart("chart_108_Temp", {
"type" : "serial",
"theme": "light",
"marginRight": 5,
"marginLeft": 5,
"mouseWheelZoomEnabled":false,
"dataDateFormat" : "YYYY-MM-DD HH:NN:SS",
"valueAxes": [{
	"title": "Temperature (°C)",
	"position": "left"
}],
"balloon": {
	"borderThickness": 1,
	"shadowAlpha": 0
},
"graphs" : [{
	"id" : "graph_Temp1",
	"valueField" : "108_Soil_Temp_o",
	"title" : "Soil Observed",
	"bullet" : "round",
},{
	"id" : "graph_Temp2",
	"valueField" : "108_Soil_Temp_p",
	"title" : "Soil Predicted",
	"bullet" : "round",
},{
	"id" : "graph_Temp3",
	"valueField" : "108_Room_Temp_o",
	"title" : "Room Observed",
	"bullet" : "round",
},{
	"id" : "graph_Temp4",
	"valueField" : "108_Room_Temp_p",
	"title" : "Room Predicted",
	"bullet" : "round",
}],
"chartScrollbar": {
	"enabled": false,
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
	"autoGridCount":true,
	"color":"#AAAAAA"
},
"chartCursor": {
	"enabled": true,
	"categoryBalloonDateFormat": "JJ"
},
"categoryAxis" : {
	"title": "Timestamp (hourly)",
	"minPeriod": "hh",
	"parseDates": true
},
"startDuration" : 0.1,
"legend": {
	"enabled": true,
	"useGraphSettings": true,
	"position": "bottom",
	"marginBottom": -10
},
"categoryField" : "Timestamp",
"dataLoader" : {
	"url" : "datalog/interface/graph.csv",
	"format" : "csv",
	"delimiter" : ",",
	"useColumnNames" : true,
	"skip" : 1
}
});
var chart_VWC = AmCharts.makeChart("chart_109_VWC", {
"type" : "serial",
"theme": "light",
"marginRight": 5,
"marginLeft": 5,
"mouseWheelZoomEnabled":false,
"dataDateFormat" : "YYYY-MM-DD HH:NN:SS",
"valueAxes": [{
	"title": "VWC (m3/m3)",
	"position": "left"
}],
"balloon": {
	"borderThickness": 1,
	"shadowAlpha": 0
},
"graphs" : [{
	"id" : "graph_VWC1",
	"valueField" : "109_VWC_o",
	"title" : "Observed",
	"bullet" : "round",
},{
	"id" : "graph_VWC2",
	"valueField" : "109_VWC_p",
	"title" : "Predicted",
	"bullet" : "round",
}],
"chartScrollbar": {
	"enabled": false,
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
	"autoGridCount":true,
	"color":"#AAAAAA"
},
"chartCursor": {
	"enabled": true,
	"categoryBalloonDateFormat": "JJ"
},
"categoryAxis" : {
	"title": "Timestamp (hourly)",
	"minPeriod": "hh",
	"parseDates": true
},
"startDuration" : 0.1,
"legend": {
	"enabled": true,
	"useGraphSettings": true,
	"position": "bottom"
},
"categoryField" : "Timestamp",
"dataLoader" : {
	"url" : "datalog/interface/graph.csv",
	"format" : "csv",
	"delimiter" : ",",
	"useColumnNames" : true,
	"skip" : 1
}
});
var chart_Temp = AmCharts.makeChart("chart_109_Temp", {
"type" : "serial",
"theme": "light",
"marginRight": 5,
"marginLeft": 5,
"mouseWheelZoomEnabled":false,
"dataDateFormat" : "YYYY-MM-DD HH:NN:SS",
"valueAxes": [{
	"title": "Temperature (°C)",
	"position": "left"
}],
"balloon": {
	"borderThickness": 1,
	"shadowAlpha": 0
},
"graphs" : [{
	"id" : "graph_Temp1",
	"valueField" : "109_Soil_Temp_o",
	"title" : "Soil Observed",
	"bullet" : "round",
},{
	"id" : "graph_Temp2",
	"valueField" : "109_Soil_Temp_p",
	"title" : "Soil Predicted",
	"bullet" : "round",
},{
	"id" : "graph_Temp3",
	"valueField" : "109_Room_Temp_o",
	"title" : "Room Observed",
	"bullet" : "round",
},{
	"id" : "graph_Temp4",
	"valueField" : "109_Room_Temp_p",
	"title" : "Room Predicted",
	"bullet" : "round",
}],
"chartScrollbar": {
	"enabled": false,
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
	"autoGridCount":true,
	"color":"#AAAAAA"
},
"chartCursor": {
	"enabled": true,
	"categoryBalloonDateFormat": "JJ"
},
"categoryAxis" : {
	"title": "Timestamp (hourly)",
	"minPeriod": "hh",
	"parseDates": true
},
"startDuration" : 0.1,
"legend": {
	"enabled": true,
	"useGraphSettings": true,
	"position": "bottom",
	"marginBottom": -10
},
"categoryField" : "Timestamp",
"dataLoader" : {
	"url" : "datalog/interface/graph.csv",
	"format" : "csv",
	"delimiter" : ",",
	"useColumnNames" : true,
	"skip" : 1
}
});
