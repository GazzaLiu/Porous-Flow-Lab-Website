var smallBlockMapX = [440, 780, 840, 900, 720, 780, 840, 900, 440, 500, 560, 900, 30, 80, 130, 180, 230, 280, 880, 930, 50, 110, 490, 550, 610, 670, 670, 730, 790, 850, 910];
var smallBlockMapY = [70, 70, 70, 70, 170, 170, 170, 170, 270, 270, 270, 270, 410, 410, 410, 410, 410, 410, 410, 410, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520];
var yoff = 0.0;
var canvas;
var stationMap;
var state = "realtime";
var realtimeData;
var predictedData;
var numberFont;
var loopIndex;

//----------p5.js structure----------

function preload() {
	stationMap = loadJSON('assets/js/map.json');
	realtimeData = loadJSON('datalog/greenhouse_108_realtime.json');
	predictedData = loadJSON('datalog/greenhouse_108_predict.json');
	numberFont = loadFont('assets/fonts/Fluent_Calibri.ttf');
}

function setup() {
	canvas = createCanvas(1000, 620);
	canvas.position(200, 800);
	loopIndex = -1;
	hideCanvas();
}

function draw() {
	strokeWeight(4);
	stroke(100, 100, 100);
	fill(230, 200, 150);
	background(255, 255, 255);
	rect(390, 20, 590, 320, 20);
	rect(20, 360, 960, 240, 20);
	fill(230, 230, 230);
	rect(20, 20, 350, 320, 20);
	drawAllSmallBlock();
	drawAllBigBlock();
	drawBlockData();
	drawAllBigBlockRect();
	if (loopIndex != -1) {
		drawRealtimeInfo();
		drawHighlightBigBlockRect(stationMap.Station[loopIndex].X, stationMap.Station[loopIndex].Y);
	}
}

function mouseMoved() {
	var dx;
	var dy;
	loopIndex = -1
	for (var i = 0; i < stationMap.StationNumber; i++) {
		dx = mouseX - stationMap.Station[i].X;
		dy = mouseY - stationMap.Station[i].Y;
		if (dx > 0 && dy > 0 && dx < 120 && dy < 90) {
			loopIndex = i;
		}
	}
}

//----------custom function----------

function drawSmallBlock(x, y) {
	rect(x, y, 40, 30, 10);
}

function drawAllSmallBlock() {
	fill(150, 245, 145);
	for (var i = 0; i <= smallBlockMapX.length; i++) {
		drawSmallBlock(smallBlockMapX[i], smallBlockMapY[i]);
	}
}

function drawBigBlock(x, y) {
	rect(x, y, 120, 90, 10);
}

function drawAllBigBlock() {
	fill(230, 230, 230);
	for (var i = 0; i < stationMap.StationNumber; i++) {
		drawBigBlock(stationMap.Station[i].X, stationMap.Station[i].Y);
	}
}

function drawBigBlockRect(x, y) {
	rect(x, y, 120, 90, 10);
}

function drawAllBigBlockRect() {
	stroke(100, 100, 100);
	noFill();
	for (var i = 0; i < stationMap.StationNumber; i++) {
		drawBigBlockRect(stationMap.Station[i].X, stationMap.Station[i].Y);
	}
}

function drawHighlightBigBlockRect (x, y) {
	stroke(255, 150, 150);
	noFill();
	rect(x, y, 120, 90, 10);
}

function drawBlockData() {
	if (state == "realtime") {
		for (var i = 0; i < stationMap.StationNumber; i++) {
			drawWave(stationMap.Station[i].X, stationMap.Station[i].Y, realtimeData.Data[i].VWC);
			fill(0, 0, 0);
			textSize(45);
			textFont(numberFont);
			text(String(Math.round(realtimeData.Data[i].VWC * 100)) + "%", stationMap.Station[i].X + 14, stationMap.Station[i].Y + 60);
		}
	}
	else if (state == "") {
		
	}
	else if (state == "") {
		
	}
}

function drawWave(x_lu, y_lu, value) {
	noStroke();
	color_R = map(value, 0, 0.4, 255, 50);
	color_B = map(value, 0, 0.4, 150, 255);
	value = map(value, 0, 0.4, 85, 5);
	fill(color_R, 150, color_B); // wave color
	beginShape(); 
	var xoff = yoff;
	for (var x = x_lu; x <= x_lu + 120; x += 5) {
		var y = map(sin(xoff), 0, 1, y_lu + value, y_lu + value + 5); // wave amptitude
		vertex(x, y);
		xoff += 0.35; // wave frequency
	}
	yoff += 0.005; // wave velocity
	vertex(x_lu + 120, y_lu + 90 - 2);
	vertex(x_lu, y_lu + 90 - 2);
	endShape(CLOSE);
}

function switchState (target) {
	state = target;
}

function drawRealtimeInfo() {
	noStroke();
	fill(0, 0, 0);
	textSize(25);
	textFont("Microsoft JhengHei");
	stationIndex = stationMap.Station[loopIndex].Index;
	str =
	"儀器編號：" + stationIndex + "\n" + 
	"儀器種類：" + "5TE" + "\n" + 
	"儀器狀態：" + "正常" + "\n" + 
	"體積含水量：" + realtimeData.Data[stationIndex - 1].VWC + "(m3/m3)" +"\n" + 
	"電導度：" + realtimeData.Data[stationIndex - 1].EC + "(dS/m)" +"\n" + 
	"溫度：" + realtimeData.Data[stationIndex - 1].Temp + "(°C)" + "\n";
	text(str, 50, 80);
}

function drawPredictedInfo(time, type) {
	noStroke();
	fill(0, 0, 0);
	textSize(25);
	textFont("Microsoft JhengHei");
	stationIndex = stationMap.Station[loopIndex].Index;
	str =
	"位置編號：" + stationIndex + "\n" + 
	"體積含水量：" + predictedData[time][type].Data[stationIndex - 1]["VWC"] + "(m3/m3)" +"\n" + 
	"溫度：" + predictedData[time][type].Data[stationIndex - 1]["Temp"] + "(°C)" + "\n" + 
	"預測平均誤差：" + predictedData[time][type]["Error"] + "%";
	text(str, 50, 80);
}

function drawCropInfo () {
	
}

function hideCanvas () {
	canvas.hide();
}

function showCanvas () {
	canvas.show();
}

function setCanvasPosition (x, y) {
	canvas.position(x, y);
}
