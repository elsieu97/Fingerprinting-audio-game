var counter = 0;
var levelUp;
var background1;
var order;
var directions;
var starting;
var origin;
var play1;
var next1;
var audio1; 
var background1; 
var audiobackground1;
function startGame(){
    scanAudio1(start);}
function start1 (){
    scanAudio1(startInit);}
function scanAudio1(returnN) {
	answer = server.split(" ");
	var reader = new FileReader();
	var audio3 = false;
	getAudioO(audioFile2, function (fileObject) {
	var audio9 = fileObject;
		reader.onloadend = function () {
		scanAudio();
		audio3 = true;
		audio10 = reader.result;
    context.decodeAudioData(audio10, function(buffer) {
		audio1 = buffer;
		if(background1!=null && audio1!=null){
		returnN();}
        }, function(error){console.error("decodeAudioData" , error);});}
		reader.readAsArrayBuffer(audio9);}); 
function scanAudio() {
	if(audio3){
		getBackgroundO(background5, function (fileObject) {
		var background6 = fileObject;
		reader.onloadend = function () {
		audio10 = reader.result;
		context.decodeAudioData(audio10, function(buffer) { 
		background1 = buffer;
		if(background1!=null && audio1!=null){
		returnN();}});}
		reader.readAsArrayBuffer(background6);});}
	else {
		Time(function(){
		scanAudio();},150);}}}
function start(){
    var gameRemove = false;
	startAnswer();
	startScore();
        base();
        start9(gameRemove);}
