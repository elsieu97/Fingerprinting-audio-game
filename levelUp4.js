function every(){
var answers = ["have a good weevgggcgchgkend", "you wghvvanna come in", " you know wgcghfat im talking", "where aryguguye we going", "well talk about it soon", "no thajkkts not going do it", "oh yeah evehvjrything is fine", "maybe next tijiime huh", "levhgvht me out of here", "ill thiuhell you what i think", "i cant belhkjieve i let you", "couihuime on come on"];
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
    location.replace("https://elsieu97.github.io/Fingerprinting-audio-game/Game4.html");
  }else{
alert("wrong");
score -= 100;
points -= 160;
    document.getElementById("score").innerHTML = score;
    document.getElementById("points").innerHTML = points;
      }
}  }
