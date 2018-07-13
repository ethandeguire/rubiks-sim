var sqrWidth;
var squares = [];
var csvData = [1,5,3,1,2,5,3,3,5,5,3,3,2,1,2,3,4,4,4,1,0,5,4,1,5,4,0,2,4,1,3,0,3,2,0,5,1,0,4,0,5,4,2,2,4,1,5,2,1,3,2,0,0,0];
var red;
var showNumbers = true;

class Square{
	constructor(width,x,y,col){
		this.width = width;
		this.x = x;
		this.y = y;
		this.col = col;
		this.num;
	}
	
	show(){
		rectMode(CORNER);
		fill(this.col);
		noStroke();
		if(this.num >= 0){stroke(0);}
		rect(this.x,this.y,this.width,this.width);
		textSize(20);
		if(showNumbers == true && this.num >= 0){
			var column = this.x/this.width;
			var row = this.y/this.width;
			
			textAlign(CENTER);
			fill(0);
			noStroke();
			
			if(round(column) == 4 && row == 1){
				text("Back" , this.x + (this.width/2), this.y + (this.width/2));
			}
			if(round(column) == 4 && round(row) == 7){
				text("Front" , this.x + (this.width/2), this.y + (this.width/2));
			}
			if(round(column) == 10 && round(row) == 4){
				text("Down" , this.x + (this.width/2), this.y + (this.width/2));
			}
			if(round(column) == 7 && round(row) == 4){
				text("Right" , this.x + (this.width/2), this.y + (this.width/2));
			}
			if(round(column) == 4 && round(row) == 4){
				text("Top" , this.x + (this.width/2), this.y + (this.width/2));
			}
			if(round(column) == 1 && round(row) == 4){
				text("Left" , this.x + (this.width/2), this.y + (this.width/2));
			}
			else{
				//text(this.num + "" , this.x + (this.width/2), this.y + (this.width/2));
			}
		}
	}
	
	change(newCol,num){
		this.num = num;
		this.col = color(newCol);
		stroke(0);
		strokeWeight(3);
		this.show();
		noStroke();
		
	}
}

function setup() {
	
	var button = createButton("Add CSV Data");
	button.mousePressed(function(){var data=prompt();var tempArr=[];for(var i=0;i<data.length;i++){if(data[i]!=','){tempArr.push(int(data[i]));}}csvData=tempArr;makeSquares();});
	button.position(0,0);
	
	var button = createButton("Show Numbers");
	button.mouseClicked(function(){if(showNumbers == false){showNumbers = true}else{showNumbers = false}makeSquares();});
	button.position(0,25);
	
	
	red = color(255,0,0);
	yellow = color(255,255,0);
	green = color(0,255,0);
	blue = color(0,120,255);
	orange = color(255,128,0);
	white = color(255);
	makeSquares();
	
	
	
	
}

function makeSquares(){
	createCanvas(windowWidth,windowHeight-5);
	background(255);
	noStroke();
	frameRate(60);
	
	
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
	newSquare(3,6,0,0);
	newSquare(4,6,1,1);
	newSquare(5,6,2,2);
	newSquare(3,7,3,3);
	newSquare(4,7,4,4);
	newSquare(5,7,5,5);
	newSquare(3,8,6,6);
	newSquare(4,8,7,7);
	newSquare(5,8,8,8);
	
	//top
	newSquare(3,3,9,0);
	newSquare(4,3,10,1);
	newSquare(5,3,11,2);
	newSquare(3,4,12,3);
	newSquare(4,4,13,4);
	newSquare(5,4,14,5);
	newSquare(3,5,15,6);
	newSquare(4,5,16,7);
	newSquare(5,5,17,8);
	
	//back
	newSquare(3,2,18,0);
	newSquare(4,2,19,1);
	newSquare(5,2,20,2);
	newSquare(3,1,21,3);
	newSquare(4,1,22,4);
	newSquare(5,1,23,5);
	newSquare(3,0,24,6);
	newSquare(4,0,25,7);
	newSquare(5,0,26,8);
	
	//bottom
	newSquare(11,5,27,0);
	newSquare(10,5,28,1);
	newSquare(9,5,29,2);
	newSquare(11,4,30,3);
	newSquare(10,4,31,4);
	newSquare(9,4,32,5);
	newSquare(11,3,33,6);
	newSquare(10,3,34,7);
	newSquare(9,3,35,8);
	
	//right
	newSquare(6,5,36,0);
	newSquare(6,4,37,1);
	newSquare(6,3,38,2);
	newSquare(7,5,39,3);
	newSquare(7,4,40,4);
	newSquare(7,3,41,5);
	newSquare(8,5,42,6);
	newSquare(8,4,43,7);
	newSquare(8,3,44,8);
	
	//left
	newSquare(2,3,45,0);
	newSquare(2,4,46,1);
	newSquare(2,5,47,2);
	newSquare(1,3,48,3);
	newSquare(1,4,49,4);
	newSquare(1,5,50,5);
	newSquare(0,3,51,6);
	newSquare(0,4,52,7);
	newSquare(0,5,53,8);
	
	
	
	noFill();
	stroke(0);
	strokeWeight(10);
	rect(sqrWidth*3,0,sqrWidth*3,sqrWidth*9);
	rect(0,sqrWidth*3,sqrWidth*12,sqrWidth*3);
	rect(0,sqrWidth*3,sqrWidth*9,sqrWidth*3);
	
	
}

function newSquare(x,y,arrPos,num){
	if(csvData[arrPos] == 0){col = white}
	if(csvData[arrPos] == 1){col = yellow}
	if(csvData[arrPos] == 2){col = red}
	if(csvData[arrPos] == 3){col = blue}
	if(csvData[arrPos] == 4){col = orange}
	if(csvData[arrPos] == 5){col = green}
	squares[x][y].change(col,num);
}

function draw() {
}	