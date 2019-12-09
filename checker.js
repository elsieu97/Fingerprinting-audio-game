function every(e){
  e.preventDefault();
var answers = "have a good weekend";
var question = document.getElementById('question').value.toLowerCase();
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
points -= 250;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
function every2(e){
  e.preventDefault();
var answers = "you wanna come in";
var question = document.getElementById('question').value.toLowerCase();
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
score -= 200;
points -= 200;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
function every3(e){
  e.preventDefault();
var answers = " you know what im talking";
var question = document.getElementById('question').value.toLowerCase();
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
score -= 200;
points -= 200;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
