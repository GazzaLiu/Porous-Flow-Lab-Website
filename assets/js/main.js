var stationRealtime;
var stationHistory;
var canvasElement;

function load() {
	stationRealtime = document.getElementById("station_realtime");
	stationHistory = document.getElementById("station_history");
	canvasElement = document.getElementById("realtime_data");
}

function showRealtime() {
	showCanvas();
	stationHistory.style.display = "none";
	stationRealtime.style.display = "block";
	//var rect = canvasElement.getBoundingClientRect();
	//alert(canvasElement);
	setCanvasPosition(getElementRect(canvasElement).left, getElementRect(canvasElement).top);
}

function showHistory() {
	hideCanvas();
	stationRealtime.style.display = "none";
	stationHistory.style.display = "block";
}

function getElementRect(e) {
	e = e.getBoundingClientRect();
	return {
		left: e.left + window.scrollX,
		top: e.top + window.scrollY
	}
}

function downloadDatalog(preFilename) {
	var e = document.getElementById("station_history_data");
	download('./datalog/' + preFilename + e.options[e.selectedIndex].value.toString() + '.csv');
}

function download(filename)
{
	window.location = filename;
}
