function every(){
var answers = ["no thats not gonna do it", "No that's not gonna do it"];
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
    location.replace("https://elsieu97.github.io/Fingerprinting-audio-game/Game2.html");
  }else{
alert("wrong");
score -= 150;
points -= 150;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}  }
