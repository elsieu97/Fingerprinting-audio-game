var userInput;
var answer = null;
var waitingAnswers;
var Answer = [];
var correct;
var choose;
var correctA;
var div = document.getElementById('answer');
function startAnswers(){
    if(answer){
	correctA = answer[0];	//Correct choice is the first one
	document.getElementById('answer').innerHTML = "";
	Answer = [];
	for(var i = 0;i<answer.length;i++){
            Answer.push(new answerInput(answer[i], i));}
            choose = document.getElementsByClassName("answerInput \n\
            answerOptions answerOptions-choice");
            waitingAnswers = false;}}
class answerInput{
	constructor(string, i){
	var answerOptions = document.createElement("c");        
	answerOptions.href = "#level";
	answerOptions.className = "answerInput answerOptions answerOptions-choice";
        var that = document.createTextNode(string);
	answerOptions.appendChild(that); 
	answerOptions.value = string;
	answerOptions.onclick = function(){
	        userInput =  answerOptions.value;
		waitingAnswers = true;
		correct = answerOptions.value == correctA ? true : false;
		rounds();};
		div.appendChild(answerOptions);}}
