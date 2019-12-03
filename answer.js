var userInput;
var answer = null;
var waitingAnswers;
var Answer = [];
var correct;
var choose;
var correctA;
var div = document.getElementById('answer');
document.getElementById('answer').onchange = function(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);
    // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};
function startAnswers(){
    if(answer){
	correctA = answer[0];
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
