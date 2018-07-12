var sqrWidth;
squares = [];
var csvData = 
[
2,5,5,2,2,4,1,2,4,1,4,4,1,0,0,3,0,0,3,5,5,1,4,0,1,4,0,3,1,0,2,1,0,2,1,5,2,2,1,3,3,4,3,3,4,2,3,0,5,5,3,5,5,4
];

var red;

class Square{
	constructor(width,x,y,col){
		this.width = width;
		this.x = x;
		this.y = y;
		this.col = col;
	}
	
	show(){
		rectMode(CORNER);
		fill(this.col);
		rect(this.x,this.y,this.width,this.width);
	}
	
	change(newCol){
		this.col = color(newCol);
		stroke(0);
		strokeWeight(3);
		this.show();
		noStroke();
	}
}

function setup() {
	createCanvas(windowWidth,windowHeight-5);
	background(255);
	noStroke();
	frameRate(60);
	
	red = color(255,0,0);
	yellow = color(255,255,0);
	green = color(0,255,0);
	blue = color(0,0,255);
	orange = color(255,128,0);
	white = color(255);
	
	//finds maximum square width;
	var maxWidthX = windowWidth/12;
	var maxWidthY = windowHeight/9;
	if(maxWidthX <= maxWidthY){sqrWidth = maxWidthX}else{sqrWidth = maxWidthY}
	
	
	var squaresX = int(windowWidth/sqrWidth);
	var squaresY = int(windowHeight/sqrWidth);
	
	
	for(var i = 0; i<squaresX; i++){
		squares[i] = [];
		for(var j = 0; j<squaresY; j++){
			squares[i][j] = new Square(sqrWidth, i*sqrWidth, j*sqrWidth, 200);
			squares[i][j].show();
		}
	}
	
	
	//front
	newSquare(3,6,0);
	newSquare(4,6,1);
	newSquare(5,6,2);
	newSquare(3,7,3);
	newSquare(4,7,4);
	newSquare(5,7,5);
	newSquare(3,8,6);
	newSquare(4,8,7);
	newSquare(5,8,8);
	
	//top
	newSquare(3,3,9);
	newSquare(4,3,10);
	newSquare(5,3,11);
	newSquare(3,4,12);
	newSquare(4,4,13);
	newSquare(5,4,14);
	newSquare(3,5,15);
	newSquare(4,5,16);
	newSquare(5,5,17);
	
	//back
	newSquare(3,2,18);
	newSquare(4,2,19);
	newSquare(5,2,20);
	newSquare(3,1,21);
	newSquare(4,1,22);
	newSquare(5,1,23);
	newSquare(3,0,24);
	newSquare(4,0,25);
	newSquare(5,0,26);
	
	//bottom
	newSquare(11,5,27);
	newSquare(10,5,28);
	newSquare(9,5,29);
	newSquare(11,4,30);
	newSquare(10,4,31);
	newSquare(9,4,32);
	newSquare(11,3,33);
	newSquare(10,3,34);
	newSquare(9,3,35);
	
	
	//right
	newSquare(6,5,36);
	newSquare(6,4,37);
	newSquare(6,3,38);
	newSquare(7,5,39);
	newSquare(7,4,40);
	newSquare(7,3,41);
	newSquare(8,5,42);
	newSquare(8,4,43);
	newSquare(8,3,44);
	
	
	
	//left
	newSquare(2,3,45);
	newSquare(2,4,46);
	newSquare(2,5,47);
	newSquare(1,3,48);
	newSquare(1,4,49);
	newSquare(1,5,50);
	newSquare(0,3,51);
	newSquare(0,4,52);
	newSquare(0,5,53);
	
}

function newSquare(x,y,arrPos){
	if(csvData[arrPos] == 0){col = white}
	if(csvData[arrPos] == 1){col = yellow}
	if(csvData[arrPos] == 2){col = red}
	if(csvData[arrPos] == 3){col = blue}
	if(csvData[arrPos] == 4){col = orange}
	if(csvData[arrPos] == 5){col = green}
	console.log(csvData[arrPos]);
	squares[x][y].change(col);
}

function draw() {
}	