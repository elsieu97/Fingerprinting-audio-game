function every(){
var answers = "have a good weekend";
var question = document.getElementById("question").value.toLowerCase();
  if(question === ""){
  alert('Nothing was entered');
  }else{
var match = answers.some(function(r){
  return question === r;
});
  var score=100;
  var points=0;
  if (match){
alert("congrats");
score += 200;
points += 200;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
  }else{
alert("wrong");
score -= 100;
points -= 100;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
}
function every2(){
var answers = "come on come on";
var question = document.getElementById("question").value.toLowerCase();
  if(question === ""){
  alert('Nothing was entered');
  }else{
var match = answers.some(function(r){
  return question === r;
});
  var score=100;
  var points=0;
  if (match){
alert("congrats");
score += 250;
points += 200;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
  }else{
alert("wrong");
score -= 150;
points -= 100;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
}
function every3(){
var answers = "maybe next time huh";
var question = document.getElementById("question").value.toLowerCase();
  if(question === ""){
  alert('Nothing was entered');
  }else{
var match = answers.some(function(r){
  return question === r;
});
  var score=100;
  var points=0;
  if (match){
alert("congrats");
score += 200;
points += 200;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
  }else{
alert("wrong");
score -= 100;
points -= 100;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
}
function every4(){
var answers = "i cant believe i let you";
var question = document.getElementById("question").value.toLowerCase();
  if(question === ""){
  alert('Nothing was entered');
  }else{
var match = answers.some(function(r){
  return question === r;
});
  var score=100;
  var points=0;
  if (match){
alert("congrats");
score += 200;
points += 250;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
  }else{
alert("wrong");
score -= 150;
points -= 100;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
}
