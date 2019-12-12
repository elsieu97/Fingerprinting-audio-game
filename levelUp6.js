function every(){
var answers = ["have a goodkjhh weekend", "you wanna come in", " you know what imuihuikh talking", "whguyjguere are we going", "well talkhuhk about it soon", "no thahgvyujts not going do it", "oh yehjah everything is fine", "maybhgvfhbe next time huh", "let me hijuikout of here", "ill tell you whatjhhb i think", "i cant hgjbhjbelieve i let you", "come onhkj come on"];
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
    location.replace("https://elsieu97.github.io/Fingerprinting-audio-game/Game6.html");
  }else{
alert("wrong");
score -= 100;
points -= 160;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}  }
