function PlaySoundAndVideo2(soundObj3, videoObj) {
    var soundAndVideo2=document.getElementById(soundObj3,videoObj);
    soundAndVideo2.play();
}
        function pauseAudio2(){
    var audio3 = document.getElementById('audio3');
    var audio4 = document.getElementById('audio4');
    audio3.pause();
    audio4.pause();
}
        setTimeout(function(){ 
document.getElementById("audio3").play(); 
}, 5000)
//Intializes variables for the next1 round and sends data to server
//resets variables
function next1() { 
	audio1 = null;
	answer = null;
	changeScore.style.display1 = "none";
        background1 = null;
	document.getElementById("stage").style.display1 = "initial";
        audio10 = null;
	startGame();}
function rounds() {
	updateScore();
	play1(audio1);
	aaaudio1level();
	if(answered_correctly == true) levelUpPosition("win");
		else levelUpPosition("lose");
	scanServer();}
function scanServer() {
	scanLevelI();
	scanUserInput();}
function scanLevelI() {
	//Updating info to send to database 
	var levelInfo = {}; //variable for adding updates info for every round to server
	levelInfo.name = name1;
	levelInfo.audio2 = audio2;
	levelInfo.background5 = background5;
	levelInfo.background5Pos = order;
	levelInfo.clickPos = [];
	levelInfo.answer = answer;
	levelInfo.userInput = userInput;
	levelInfo.pointsScored = pointsScored;
	//send info back to server 	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", servletContext + "/update/", true);
	xhr.setRequestHeader('Content-Type', 'text/html');
	xhr.send(JSON.stringify(levelInfo));}
function scanUserInput() {
	//Updating info to send to database
	var jsonMessage = { "messageType" : "continue", "name" : name1, "pointsScored" : highscore };	//continue message
	var xhr = new XMLHttpRequest();
	xhr.open("POST", servletContext + "/game/", true);
	xhr.setRequestHeader('Content-Type', 'text/html');
	//Catches the response and sends it to handler fucntion. Calls for new round.
	xhr.onload = function () { 							
		var responseText = this.responseText;
		handleResponse(responseText);}
	xhr.send(JSON.stringify(jsonMessage));}
