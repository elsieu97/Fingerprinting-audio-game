
function every(e){
  e.preventDefault();
var answers = "no thats not gonna do it";
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
score -= 175;
points -= 150;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}
function tryit(){
  var score = document.getElementById('score').value;
  var points = document.getElementById('points').value;
  localStorage.setItem("textvalue", score);
  return false;
  localStorage.setItem("textvalue", points);
  return false;
}
