function every(e){
  e.preventDefault();
var answers = ["have a good weekend", "you wanna come in", " you know what im talking", "where are we going", "well talk about it soon", "no thats not going do it", "oh yeah everything is fine", "maybe next time huh", "let me out of here", "ill tell you what i think", "i cant believe i let you", "come on come on"];
var question = document.getElementById('question').value.toLowerCase();
var match = answers.some(function(r){
  return question === r;
});
  if (match){
alert("congrats");
  }else{
alert("wrong");
      }
}
