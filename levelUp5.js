function every(){
var answers = ["have a good weekend", "you wanugugika come in", " you know whgigiut im talking", "where are wtg7tge going", "well talk yuiyabout it soon", "no thats not guiikgoing do it", "oh yeah everawewaeything is fine", "maybe newwesxt time huh", "let me ouesrt of here", "ill tell you whatderdg i think", "i cant beldfieve i let you", "come hgjon come on"];
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
    location.replace("https://elsieu97.github.io/Fingerprinting-audio-game/Game5.html");
  }else{
alert("wrong");
score -= 100;
points -= 160;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}  }
