function every(){
var answers = ["haves ahcjkn goods weekend", "you whghjjannas come in", " you know whattydydyh ims talking", "wheres achfghdrfes we going", "well tvhvjhgalks hiuiabout it soon", "no thats not jhjhgonna do it", "oh yeahs evvhjhhhberythings is fine", "maybehvhjvhjs next time huh", "let mevjuhs out of here", "ill tell you whbbbjhbats i think", "i cants belijkjneve i let you", "come on come on"];
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
