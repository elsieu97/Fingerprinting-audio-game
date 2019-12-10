function every(){
var answers = ["have a good weekend", "you wanna come in", " you know what im talking", "where are we going", "well talk about it soon", "no thats not going do it", "oh yeah everything is fine", "maybe next time huh", "let me out of here", "ill tell you what i think", "i cant believe i let you", "come on come on"];
var question2 = document.getElementById("question2").value.toLowerCase();
if(question2 === ""){
  alert('Nothing was entered');
  }else{
  var match = answers.some(function(r){
  return question2 === r;
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
