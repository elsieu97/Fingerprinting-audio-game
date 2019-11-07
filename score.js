var remove;
var pointsR;
var takeAway;
var division;		
var scoreR;
var points;		
var score = 0;	 
var scoreT;	
var goOn;		
function startScore() {
    scoreR = 200;	
    scoreT = 100;
    takeAway = 25;
    division = 50;
    points = 500;	
    waitingAnswers = false;
    remove = 0;
    scoreChange(0);
    }
function scoreChange(){
if(waitingAnswers == true){	 
	if(correct == true) {
		answerRight();}
		else if(correct == false) {
		answerWrong();}
		score += points	
		goBack();
		pointsR = parseInt(points); 
		points = 0;}
	checkPoints();
	changeScore();}
function answerRight(){
	points += scoreR;
	points = parseInt(Math.max(0,points - Math.pow(remove, 1/3.5)));}
function answerWrong() {
	points += parseInt(scoreT + Math.pow(remove, 1/3) );
	points *= -1;}
function checkPoints(){
	if(points <= 0) {
		goBack();
		points = 0;
		return true;}
	else return false;}
function changeScore(){ 
	document.getElementById("points").innerHTML = points;
	document.getElementById("score").innerHTML = score;}
