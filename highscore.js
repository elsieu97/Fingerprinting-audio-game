var score = 0;
var highscore = 0;
localStorage.setItem("highscore",0);
var storagedHighScore = localStorage.getItem("highscore");
if (storagedHighScore  || score > parseInt(storagedHighScore)) {
  localStorage.setItem("highscore", score);
}
