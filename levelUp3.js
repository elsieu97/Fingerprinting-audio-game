function every(){
var answers = ["haves a goods weekend", "you wannas come in", " you know what ims talking", "wheres ares we going", "well talks about it soon", "no thats not gonna do it", "oh yeahs everythings is fine", "maybes next time huh", "let mes out of here", "ill tell you whats i think", "i cants believe i let you", "come on come on"];
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
    location.replace("https://elsieu97.github.io/Fingerprinting-audio-game/Game3.html");
  }else{
alert("wrong");
score -= 150;
points -= 150;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}  }
