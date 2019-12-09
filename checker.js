function every(){
var answers = ["have a good weekend", "you wanna come in", " you know what im talking", "where are we going", "well talk about it soon", "no thats not gonna do it", "oh yeah everything is fine", "maybe next time huh", "let me out of here", "ill tell you what i think", "i cant believe i let you", "come on come on"];
var input = document.getElementById("question").value.toLowerCase();
for(var i = 0; i < answers.length; i++){
  if (input == answers[i]){
    documnet.write("congrats");
  }else{
    document.write("wrong");}}}}
