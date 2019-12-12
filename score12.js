function every(){
var answers = ["maybdae nextdsadsa time huh", "let me out of here", "ill tell adsadyou what i thisdsnk"];
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
