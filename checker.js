var answers = ["have a good weekend", "you wanna come in", " you know what im talking", "where are we going", "well talk about it soon", "no thats not gonna do it", "oh yeah everything is fine", "maybe next time huh", "let me out of here", "ill tell you what i think", "i cant believe i let you", "come on come on"];
var input = document.getElementById("question").value.toLowerCase();
var score = document.getElementById("score").value;
var points = document.getElementById("points").value;
function every(){
for(var i = 0; i < answers.length; i++){
  if (input == answers[i]){
    score=score+200;
    points=points+200;
  }else{
    score=score-200;
  points=-points-200;}}}
